/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Skeleton, SkeletonLine } from 'keep-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { GrUpdate } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';
import AppForm from '../../components/form/AppForm';
import {
  GeneralInformation,
  PriceInformation,
  ProductCategory,
  ProductImage,
  StockInformation,
  UpdateProductHeader,
} from '../../features/products';
import { displayToast } from '../../lib/toast';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from '../../redux/features/products/productApi';
import { ProductSchema } from '../../validations/product.validation';

export default function UpdateProduct() {
  const [updateProduct] = useUpdateProductMutation();
  const [uploadImage] = useUploadImageMutation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) return <UpdateProductSkeleton />;

  const onSubmit: SubmitHandler<FieldValues> = async (productData) => {
    // if the image is image file, upload it, otherwise return the image url as it is
    const uploadPromises = productData.imageUrls.map((item: string) => {
      if (item.startsWith('data:image')) {
        return uploadImage(item);
      } else {
        return Promise.resolve(item);
      }
    });

    const imageUrls = (await Promise.all(uploadPromises)).map(
      (item: any) => item?.data?.data?.url || item
    );

    productData.imageUrls = imageUrls;

    const result = await updateProduct({ id, data: productData });

    displayToast(result, 'Product updated successfully!', {
      action: {
        label: 'See all products',
        onClick: () => navigate('/manage-products/products'),
      },
    });

    return result?.data?.success;
  };

  const defaultValues = {
    name: product?.data?.name,
    description: product?.data?.description,
    price: product?.data?.price,
    discount: product?.data?.discount,
    stockQuantity: product?.data?.stockQuantity,
    brand: product?.data?.brand?._id,
    category: product?.data?.category?._id,
    imageUrls: product?.data?.imageUrls,
  };

  return (
    <AppForm
      schema={ProductSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      className="text-metal-700 space-y-0"
    >
      <UpdateProductHeader />
      <div className="p-4 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 h-[calc(100vh-144px)] overflow-y-scroll">
        <div className="grid grid-cols-1 gap-4 h-max">
          <GeneralInformation />
          <PriceInformation />
        </div>
        <div className="grid grid-cols-1 gap-4 h-max">
          <ProductImage />
          <ProductCategory />
          <StockInformation />
        </div>
      </div>
    </AppForm>
  );
}

function UpdateProductSkeleton() {
  return (
    <Skeleton>
      <div className="flex justify-between items-center bg-white h-16 px-3 sticky top-0 z-10 border-b border-metal-100">
        <div className="flex gap-4 items-center">
          <GrUpdate className="text-lg" />
          <h2 className="text-body-1 font-semibold">Update Your Product</h2>
        </div>
        <Button type="submit" size="xs" color="success">
          <BiCheck className="text-xl mr-2" />
          Update Product
        </Button>
      </div>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 h-[calc(100vh-144px)] overflow-y-scroll">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg space-y-6">
            <SkeletonLine className="h-8 w-1/2 mb-4" />
            <SkeletonLine className="h-12 w-full" />
            <SkeletonLine className="h-12 w-full" />
            <SkeletonLine className="h-16 w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg space-y-6">
            <SkeletonLine className="h-8 w-1/2 mb-4" />

            <div className="flex items-center gap-4">
              <SkeletonLine className="h-10 w-full" />
              <SkeletonLine className="h-10 w-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg space-y-6">
            <SkeletonLine className="h-8 w-1/2 mb-4" />
            <div className="grid grid-cols-4 gap-2">
              <SkeletonLine className="w-full aspect-square" />
              <SkeletonLine className="w-full aspect-square" />
              <SkeletonLine className="w-full aspect-square" />
              <SkeletonLine className="w-full aspect-square" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-6">
            <SkeletonLine className="h-8 w-1/2 mb-4" />
            <SkeletonLine className="h-12 w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg space-y-6">
            <SkeletonLine className="h-8 w-1/2 mb-4" />
            <SkeletonLine className="h-12 w-full" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
