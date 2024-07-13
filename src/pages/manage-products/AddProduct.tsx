import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  AddProductHeader,
  GeneralInformation,
  ProductImage,
} from '../../features/add-product';
const AddProduct = () => {
  const [imageData, setImageData] = useState<string[]>([]);

  const { handleSubmit } = useForm();

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-6 text-metal-700"
    >
      <AddProductHeader />
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
        <div className="grid grid-cols-1 gap-6">
          <GeneralInformation />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <ProductImage imageData={imageData} setImageData={setImageData} />
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
