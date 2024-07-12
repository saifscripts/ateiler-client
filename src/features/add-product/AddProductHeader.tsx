import { Button } from 'keep-react';
import { BiCheck, BiStore } from 'react-icons/bi';

const AddProductHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg">
      <div className="flex gap-4 items-center">
        <BiStore className="text-2xl" />
        <h2 className="text-heading-6 font-semibold">Add New Product</h2>
      </div>
      <Button size="sm">
        <BiCheck className="text-xl mr-2" />
        Save Product
      </Button>
    </div>
  );
};

export default AddProductHeader;
