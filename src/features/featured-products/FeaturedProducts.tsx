import Products from './Products';
import Title from './Title';

const FeaturedProducts = () => {
  return (
    <section className="container">
      <div className="py-6 bg-white rounded-lg">
        <Title />
        <Products />
      </div>
    </section>
  );
};

export default FeaturedProducts;
