import { Badge, Button } from 'keep-react';
import { Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';

const ProductListHeader = ({ totalProduct }: { totalProduct: number }) => {
  return (
    <div className="flex justify-between items-center bg-white h-[64px] px-3 z-10 border-b border-metal-100">
      <div className="flex items-center gap-5">
        <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">
          Total Products
        </h2>
        <Badge color="secondary" className="dark:bg-metal-800 dark:text-white">
          {totalProduct} Products
        </Badge>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/manage-products/add-product">
          <Button
            variant="outline"
            color="secondary"
            size="xs"
            className="flex gap-1.5"
          >
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
