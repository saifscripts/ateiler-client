import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'keep-react';
import { useEffect, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';
import {
  GeneralInformation,
  PriceInformation,
  ProductCategory,
  ProductImage,
  StockInformation,
  UpdateProductHeader,
} from '../../features/add-product';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from '../../redux/features/products/productApi';
import { ProductSchema } from '../../validations/product.validation';

const UpdateProduct = () => {
  const [imageData, setImageData] = useState<string[]>([]);
  const [updateProduct] = useUpdateProductMutation();
  const [uploadImage] = useUploadImageMutation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);

  const methods = useForm<FieldValues>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (productData) => {
    try {
      methods.clearErrors('imageUrls');

      if (imageData.length < 1) {
        methods.setError('imageUrls' as 'keys', {
          type: 'manual',
          message: 'Image is required!',
        });
      }

      const uploadPromises = imageData.map((item) => {
        try {
          z.string().base64().parse(item);
          return uploadImage(item);
        } catch (err) {
          return Promise.resolve(item);
        }
      });

      const imageUrls = (await Promise.all(uploadPromises)).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item?.data?.data?.url || item
      );

      productData.imageUrls = imageUrls;

      const result = await updateProduct({ id, data: productData });

      if (result?.data?.success) {
        toast.success('Product updated successfully!', {
          action: {
            label: 'See all products',
            onClick: () => navigate('/manage-products/products'),
          },
        });
      }
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  useEffect(() => {
    for (const key in product?.data) {
      methods.setValue(key, product?.data?.[key]);
    }
    setImageData(product?.data?.imageUrls);
  }, [methods, product]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="text-metal-700"
      >
        <UpdateProductHeader />
        <div className="p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 h-[calc(100vh-144px)] overflow-y-scroll">
          <div className="grid grid-cols-1 gap-6">
            <GeneralInformation />
            <PriceInformation />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <ProductImage imageData={imageData} setImageData={setImageData} />
            <ProductCategory />
            <StockInformation />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UpdateProduct;
