import { CategoryList } from '../../features/categories';
import CategoryHeader from '../../features/categories/CategoryHeader';

const Categories = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="p-6">
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;
