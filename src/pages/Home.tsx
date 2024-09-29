import { Categories } from '../features/categories';
import { ContactUs } from '../features/contact-us';
import { Hero } from '../features/hero';
import { FeaturedProducts } from '../features/products';

const Home = () => {
  return (
    <main className="space-y-4">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <ContactUs />
    </main>
  );
};

export default Home;
