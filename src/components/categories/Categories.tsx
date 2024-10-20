import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';
import CategoryCard from './CategoryCard';
import CategorySkeleton from './CategorySkeleton';

export default function Categories() {
  const { data: categories, isLoading } = useGetCategoriesQuery('');

  if (isLoading) return <CategorySkeleton />;

  return (
    <div className="container">
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {categories?.data?.map((category: ICategory) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </div>
  );
}
