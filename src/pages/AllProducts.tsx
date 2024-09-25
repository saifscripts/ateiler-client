import { CategorySection } from '../features/category-section';
import { Products } from '../features/products';

const AllProducts = () => {
  return (
    <div className="container w-full grid grid-cols-[1fr_4fr] py-6 gap-6">
      <CategorySection />
      <Products />
    </div>
  );
};

export default AllProducts;
