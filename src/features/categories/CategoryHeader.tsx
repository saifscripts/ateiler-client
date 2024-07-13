import { BiCategory } from 'react-icons/bi';
import CategoryModal from './CategoryModal';

const CategoryHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white p-3 sticky top-0 z-10 border-b border-metal-100">
      <div className="flex gap-4 items-center">
        <BiCategory className="text-lg" />
        <h2 className="text-body-1 font-semibold">Categories</h2>
      </div>
      <CategoryModal />
    </div>
  );
};

export default CategoryHeader;
