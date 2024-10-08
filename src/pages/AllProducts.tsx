import {
  CollapsibleFilters,
  OpenFilters,
  Products,
} from '../components/products';
import Search from '../components/products/filters/Search';
import SortBy from '../components/products/filters/SortBy';

const AllProducts = () => {
  return (
    <div className="container w-full grid grid-cols-1 2xl:grid-cols-[1fr_4fr] py-4 gap-2 xl:gap-4">
      <OpenFilters />
      <CollapsibleFilters />

      <div className="flex flex-col gap-2 xl:gap-4">
        {/* Top Bar */}
        <div className="flex gap-4 justify-between items-center p-2 bg-white rounded-lg">
          <Search />
          <SortBy />
        </div>

        {/* Products */}
        <Products />
      </div>
    </div>
  );
};

export default AllProducts;
