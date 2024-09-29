import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

export default function Categories() {
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <div className="container">
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories?.data?.map((item: ICategory) => (
          <Link
            to={`/products?category=${item._id}`}
            key={item.title}
            className="aspect-square flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 rounded-lg bg-white p-4 hover:scale-95 transition-all duration-150"
            data-aos="zoom-in"
            data-aos-duration="300"
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
}
