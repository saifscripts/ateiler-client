import { IProduct } from '../../interfaces';
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import ProductCard from './ProductCard';
import Title from './Title';

const Products = () => {
  const { data: products } = useGetProductsQuery(
    { limit: 12 },
    { pollingInterval: 30000 }
  );

  return (
    <section id="products" className="">
      <div className="py-6 bg-white rounded-lg">
        <Title title="All Products" />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {products?.data?.map((item: IProduct) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
