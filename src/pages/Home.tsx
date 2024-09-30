import { Categories } from '../components/categories';
import { ContactUs } from '../components/contact-us';
import { Hero } from '../components/hero';
import { FeaturedProducts } from '../components/products';

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
