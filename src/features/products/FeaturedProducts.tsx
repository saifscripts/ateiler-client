import SectionDescription from '../../components/ui/SectionDescription';
import SectionTitle from '../../components/ui/SectionTitle';
import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
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
        {isLoading ? (
          <ProductSkeleton />
        ) : products?.data?.length > 0 ? (
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-max mx-auto">
            {products?.data?.map((item: IProduct) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-2xl text-error-900">
            No products found
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
