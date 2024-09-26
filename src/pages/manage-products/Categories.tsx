import { CategoryList, Header } from '../../features/categories';

const Categories = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;
