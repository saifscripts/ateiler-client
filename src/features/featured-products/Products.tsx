import { useGetProductsQuery } from '../../redux/features/products/productApi';
import { IProduct } from './interface';
import ProductCard from './ProductCard';

const Products = () => {
  const { data: products } = useGetProductsQuery(
    { limit: 12 },
    { pollingInterval: 30000 }
  );

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.data?.map((item: IProduct) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
};

export default Products;
