import { Badge } from 'keep-react';
import { BiCategory } from 'react-icons/bi';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';
import AddCategoryModal from './AddCategoryModal';

export default function Header() {
  const { data: categories } = useGetCategoriesQuery('');
  const totalCategories = categories?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 sticky top-0 z-10 border-b border-gray-100 h-[64px]">
      {/* Left Side */}
      <div className="flex gap-4 items-center">
        <div className="hidden min-[400px]:flex items-center gap-2">
          <BiCategory className="text-base sm:text-lg text-metal-500" />
          <h2 className="text-body-1 font-semibold">Categories</h2>
        </div>
        <Badge
          color="secondary"
          variant="base"
          className="dark:bg-metal-800 dark:text-white h-auto rounded-md"
        >
          {totalCategories || 0} category{totalCategories > 1 ? 's' : ''}
        </Badge>
      </div>

      {/* Right Side */}
      <AddCategoryModal />
    </div>
  );
}
