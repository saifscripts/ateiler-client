import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces';

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <Link
      to={`/products?category=${category._id}`}
      key={category.title}
      className="flex flex-col justify-center items-center gap-1 sm:gap-3 md:gap-4 rounded-lg bg-white p-2 sm:p-3 md:p-4 hover:shadow-md transition-all duration-150"
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-offset="0"
    >
      <div className="rounded-md w-full aspect-square overflow-hidden">
        <img
          src={category.thumbnail}
          className="w-full object-cover object-center"
        />
      </div>
      <p className="text-body-5 md:text-body-2 font-medium text-metal-600 text-center xl:text-left leading-tight">
        {category.title}
      </p>
    </Link>
  );
}
