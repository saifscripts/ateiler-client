import { SubmitHandler, useForm } from 'react-hook-form';
import { AddProductBody, AddProductHeader } from '../../features/add-product';

const AddProduct = () => {
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
      <AddProductBody />
    </form>
  );
};

export default AddProduct;
