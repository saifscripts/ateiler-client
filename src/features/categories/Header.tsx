import { Badge } from 'keep-react';
import { BiCategory } from 'react-icons/bi';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';
import AddCategoryModal from './AddCategoryModal';

export default function Header() {
  const { data: categories } = useGetCategoriesQuery('');
  const totalCategories = categories?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 sticky top-0 z-10 border-b border-metal-100">
      <div className="flex gap-4 items-center">
        <BiCategory className="text-lg" />
        <h2 className="text-body-1 font-semibold">Categories</h2>
        <Badge color="secondary" className="dark:bg-metal-800 dark:text-white">
          {totalCategories || 0} category{totalCategories > 1 ? 's' : ''}
        </Badge>
      </div>
      <AddCategoryModal />
    </div>
  );
}
