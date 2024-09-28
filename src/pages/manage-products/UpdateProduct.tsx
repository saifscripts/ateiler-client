/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from 'react-hook-form';
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
import { pickValues } from '../../utils/pickValues';
import { ProductSchema } from '../../validations/product.validation';

const UpdateProduct = () => {
  const [updateProduct] = useUpdateProductMutation();
  const [uploadImage] = useUploadImageMutation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);

  const onSubmit: SubmitHandler<FieldValues> = async (productData) => {
    // if the image is image file, upload it, otherwise return the image url as it is
    const uploadPromises = productData.imageUrls.map((item: string) => {
      if (item.startsWith('data:image')) {
        // It's a base64 encoded image
        return uploadImage(item);
      } else {
        // It's already a URL
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

  if (!product) return <div>Loading...</div>;

  return (
    <AppForm
      schema={ProductSchema}
      defaultValues={pickValues(product?.data, [
        'name',
        'description',
        'price',
        'discount',
        'stockQuantity',
        'brand',
        'category',
        'imageUrls',
      ])}
      onSubmit={onSubmit}
      className="text-metal-700"
    >
      <UpdateProductHeader />
      <div className="p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 h-[calc(100vh-144px)] overflow-y-scroll">
        <div className="grid grid-cols-1 gap-6">
          <GeneralInformation />
          <PriceInformation />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <ProductImage />
          <ProductCategory />
          <StockInformation />
        </div>
      </div>
    </AppForm>
  );
};

export default UpdateProduct;
