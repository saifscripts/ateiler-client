import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import ProductCard from './ProductCard';

const Products = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const { data: products } = useGetProductsQuery(
    { ...params, limit: 12 },
    { pollingInterval: 30000 }
  );

  return products?.data?.length > 0 ? (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 bg-white rounded-lg">
      {products?.data?.map((item: IProduct) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  ) : (
    <div className="text-center text-2xl text-gray-500">No products found</div>
  );
};

export default Products;
