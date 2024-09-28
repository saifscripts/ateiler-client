import SectionDescription from '../../components/ui/SectionDescription';
import SectionTitle from '../../components/ui/SectionTitle';
import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const { data: products } = useGetProductsQuery(
    { limit: 12 },
    { pollingInterval: 30000 }
  );

  return (
    <section id="products" className="container">
      <div className="py-6 bg-white rounded-lg">
        <SectionTitle>Featured Products</SectionTitle>
        <SectionDescription>
          Discover the season's top picks! From premium gear to must-have sports
          equipment, explore the best from leading brands like Nike and Adidas.
          Shop now and elevate your game!
        </SectionDescription>
        {products?.data?.length > 0 ? (
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
