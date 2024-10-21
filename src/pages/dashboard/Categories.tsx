import { CategoryList, Header } from '../../components/categories';

const Categories = () => {
  return (
    <div>
      <Header />
      <div className="p-4 h-[calc(100svh-128px)] overflow-y-scroll">
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;
