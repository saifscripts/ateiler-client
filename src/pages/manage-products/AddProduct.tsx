import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'keep-react';
import { useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  AddProductHeader,
  GeneralInformation,
  PriceInformation,
  ProductCategory,
  ProductImage,
  StockInformation,
} from '../../features/add-product';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import { useCreateProductMutation } from '../../redux/features/products/productApi';
import { ProductSchema } from '../../validations/product.validation';

const AddProduct = () => {
  const [imageData, setImageData] = useState<string[]>([]);
  const [createProduct] = useCreateProductMutation();
  const [uploadImage] = useUploadImageMutation();
  const navigate = useNavigate();

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

      const uploadPromises = imageData.map((file) => uploadImage(file));

      const imageUrls = (await Promise.all(uploadPromises)).map(
        (item) => item?.data?.data?.url
      );

      productData.imageUrls = imageUrls;

      const result = await createProduct(productData);

      if (result?.data?.success) {
        methods.reset();
        setImageData([]);
        toast.success('Product added successfully!', {
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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="text-metal-700"
      >
        <AddProductHeader />
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

export default AddProduct;
