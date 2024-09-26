import { Badge, Button } from 'keep-react';
import { Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/features/products/productApi';

const ProductListHeader = () => {
  const { data } = useGetProductsQuery({});
  const totalProduct = data?.data?.length;

  return (
    <div className="flex justify-between items-center bg-white h-[64px] px-3 z-10 border-b border-metal-100">
      <div className="flex items-center gap-5">
        <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">
          Total Products
        </h2>
        <Badge color="secondary" className="dark:bg-metal-800 dark:text-white">
          {totalProduct || 0} product{totalProduct > 1 ? 's' : ''}
        </Badge>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/manage-products/add-product">
          <Button color="primary" size="xs" className="flex gap-1.5">
            <Plus className="size-4 fill-metal-900 dark:fill-white" />
            Add Product
          </Button>
        </Link>
        {/* <Button
          variant="outline"
          color="secondary"
          size="xs"
          className="flex gap-1.5"
        >
          <Funnel className="size-4 fill-metal-900 dark:fill-white" />
          Filter Product
        </Button> */}
      </div>
    </div>
  );
};

export default ProductListHeader;
