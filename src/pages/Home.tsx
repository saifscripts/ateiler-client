import { ContactUs } from '../features/contact-us';
import { FeaturedProducts } from '../features/featured-products';
import { Hero } from '../features/hero';

const Home = () => {
  return (
    <main className="space-y-8">
      <Hero />
      <FeaturedProducts />
      <ContactUs />
    </main>
  );
};

export default Home;
