import { Button } from 'keep-react';
import { FloppyDisk } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { IoAddSharp } from 'react-icons/io5';

export default function AddProductHeader() {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div className="flex justify-between items-center bg-white h-[64px] px-3 sticky top-0 z-10 border-b border-gray-100">
      {/* Title and Icon */}
      <div className="flex gap-4 items-center">
        <IoAddSharp className="text-base sm:text-lg" />
        <h2 className="text-lg sm:text-xl font-semibold">New Product</h2>
      </div>

      {/* Save Button */}
      <Button disabled={isSubmitting} size="sm">
        <FloppyDisk size={20} className="mr-2" />
        Save
      </Button>
    </div>
  );
}
