import { Button } from 'keep-react';
import { useFormContext } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { GrUpdate } from 'react-icons/gr';

const UpdateProductHeader = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div className="flex justify-between items-center bg-white h-16 px-3 sticky top-0 z-10 border-b border-metal-100">
      <div className="flex gap-4 items-center">
        <GrUpdate className="text-lg" />
        <h2 className="text-body-1 font-semibold">Update Your Product</h2>
      </div>
      <Button disabled={isSubmitting} type="submit" size="xs" color="success">
        <BiCheck className="text-xl mr-2" />
        Update Product
      </Button>
    </div>
  );
};

export default UpdateProductHeader;
