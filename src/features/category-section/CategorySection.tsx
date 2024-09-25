import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

const CategorySection = () => {
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <div className="bg-white rounded-xl p-2 space-y-2 h-96 overflow-hidden">
      <p className="text-body-2 font-semibold text-metal-600 px-2 pb-1">
        CATEGORIES
      </p>
      <div className="h-full hide-scrollbar overflow-y-scroll space-y-2">
        {categories?.data?.map((item: ICategory) => (
          <Link
            to={`/products/${item.slug}`}
            key={item.title}
            className="flex gap-2 hover:bg-primary-25 px-2 py-1 rounded-lg items-center text-metal-500"
          >
            <img src={item.thumbnail} className="rounded-md size-8" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
