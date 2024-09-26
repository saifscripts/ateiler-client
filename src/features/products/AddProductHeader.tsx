import { Button } from 'keep-react';
import { useFormContext } from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { IoAddSharp } from 'react-icons/io5';

export default function AddProductHeader() {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div className="flex justify-between items-center bg-white h-16 px-3 sticky top-0 z-10 border-b border-metal-100">
      <div className="flex gap-4 items-center">
        <IoAddSharp className="text-lg" />
        <h2 className="text-body-1 font-semibold">Add New Product</h2>
      </div>
      <Button disabled={isSubmitting} size="xs">
        <BiCheck className="text-xl mr-2" />
        Save Product
      </Button>
    </div>
  );
}
