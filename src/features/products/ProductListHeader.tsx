import { Badge, Button } from 'keep-react';
import { Plus } from 'phosphor-react';
import { BiStore } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/features/products/productApi';

const ProductListHeader = () => {
  const { data } = useGetProductsQuery({});
  const totalProduct = data?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white h-[64px] px-3 z-10 border-b border-gray-100 gap-4">
      <div className="flex items-center gap-5">
        <div className="hidden min-[400px]:flex items-center gap-2">
          <BiStore className="text-base sm:text-lg text-metal-500" />
          <h2 className="text-lg md:text-xl font-semibold text-metal-900 dark:text-white">
            Products
          </h2>
        </div>
        <Badge
          color="secondary"
          variant="base"
          className="dark:bg-metal-800 dark:text-white h-auto rounded-md"
        >
          {totalProduct || 0} product{totalProduct > 1 ? 's' : ''}
        </Badge>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/manage-products/add-product">
          <Button size="sm">
            <Plus className="mr-2" />
            Add Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductListHeader;
