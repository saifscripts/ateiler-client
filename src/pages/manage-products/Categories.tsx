import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form';
import {
  AddProductHeader,
  GeneralInformation,
  PriceInformation,
  ProductCategory,
  ProductImage,
  StockInformation,
} from '../../features/add-product';
import { ProductSchema } from '../../validations/product.validation';

const isImageDataValid = (
  imageData: string[],
  setError: UseFormSetError<FieldValues>,
  clearErrors: UseFormClearErrors<FieldValues>
) => {
  if (imageData.length < 1) {
    setError('imageUrls' as 'keys', {
      type: 'manual',
      message: 'Image is required!',
    });

    return false;
  }

  clearErrors('imageUrls');
  return true;
};

const Categories = () => {
  const [imageData, setImageData] = useState<string[]>([]);

  const methods = useForm<FieldValues>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!isImageDataValid(imageData, methods.setError, methods.clearErrors))
      return;
    console.log(data);
  };

  useEffect(() => {
    isImageDataValid(imageData, methods.setError, methods.clearErrors);
  }, [imageData, methods]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="text-metal-700"
      >
        <AddProductHeader />
        <div className="p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
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

export default Categories;
