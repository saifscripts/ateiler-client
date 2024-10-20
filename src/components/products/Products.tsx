import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

export default function Products() {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const { data: products, isLoading } = useGetProductsQuery(params, {
    pollingInterval: 30000,
  });

  if (isLoading) {
    0;
    return <ProductSkeleton />;
  }

  return (
    <div className="bg-white rounded-lg">
      {products?.data?.length > 0 ? (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.data?.map((item: IProduct) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500 p-6 bg-primary-25">
          No products found
        </div>
      )}
    </div>
  );
}
