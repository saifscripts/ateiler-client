import { Link } from 'react-router-dom';
import categoryItems from './categoryItems';

const Categories = () => {
  return (
    <div className="bg-white rounded-xl p-2 space-y-2 h-[440px] overflow-hidden">
      <p className="text-body-2 font-semibold text-metal-600 px-2 pb-1">
        CATEGORIES
      </p>
      <div className="h-full hide-scrollbar overflow-y-scroll">
        {categoryItems.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className="flex gap-2 hover:bg-primary-25 px-2 py-1 rounded-lg items-center text-metal-500"
          >
            <span className="rounded-full p-1 bg-primary-25">{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
