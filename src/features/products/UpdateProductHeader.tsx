import { Button } from 'keep-react';
import { FloppyDisk } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { GrUpdate } from 'react-icons/gr';

const UpdateProductHeader = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div className="flex justify-between items-center bg-white h-[64px] px-3 sticky top-0 z-10 border-b border-gray-100">
      <div className="flex gap-4 items-center">
        <GrUpdate className="text-base sm:text-lg" />
        <h2 className="text-lg sm:text-xl font-semibold">Update Product</h2>
      </div>
      <Button disabled={isSubmitting} size="sm">
        <FloppyDisk size={20} className="mr-2" />
        Save
      </Button>
    </div>
  );
};

export default UpdateProductHeader;
