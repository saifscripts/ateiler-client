import { Button } from 'keep-react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import SectionDescription from '../ui/SectionDescription';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery(
    { limit: 12 },
    { pollingInterval: 30000 }
  );

  return (
    <section id="products" className="container">
      <div className="py-4 bg-white rounded-xl">
        <SectionTitle>Featured Products</SectionTitle>
        <SectionDescription>
          Discover the season's top picks from premium gear to must-have sports
          equipment!
        </SectionDescription>

        {/* Skeleton */}
        {isLoading && <ProductSkeleton />}

        {/* Products */}
        {products?.data && products?.data?.length > 0 && (
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-max mx-auto">
            {products?.data?.map((item: IProduct) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        )}

        {/* No products found */}
        {products?.data && products?.data?.length === 0 && (
          <div className="text-center text-2xl text-error-900 p-6">
            No products found
          </div>
        )}

        {/* View More Button */}
        {products?.data?.length > 0 && (
          <div className="flex justify-center">
            <Link to="/products">
              <Button
                color="primary"
                variant="link"
                className="mt-4 hover:bg-primary-50"
              >
                View More
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
