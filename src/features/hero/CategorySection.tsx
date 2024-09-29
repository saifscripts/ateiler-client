import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

const CategorySection = () => {
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <div className="xl:bg-white rounded-xl p-2 space-y-2 overflow-hidden order-2 xl:order-1 h-max xl:h-96">
      <p className="hidden xl:block text-heading-6 font-semibold text-metal-600 px-2 pb-1 text-center">
        CATEGORIES
      </p>
      <div className="h-full overflow-y-scroll grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-1 gap-4 xl:gap-2 xl:pb-10">
        {categories?.data?.map((item: ICategory) => (
          <Link
            to={`/products?category=${item._id}`}
            key={item.title}
            className="aspect-square xl:aspect-auto flex flex-col xl:flex-row justify-center xl:justify-start gap-2 sm:gap-3 md:gap-4 xl:gap-2 hover:bg-primary-25 rounded-lg items-center text-metal-500 bg-white p-4 xl:px-2 xl:py-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex-shrink-0"
          >
            <img src={item.thumbnail} className="rounded-md size-8" />
            <p className="text-body-2 font-medium text-metal-600 text-center xl:text-left">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
