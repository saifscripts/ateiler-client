import { CategorySection } from '../category-section';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <div className="container w-full grid grid-cols-[1fr_4fr] py-6 gap-6">
      <CategorySection />
      <Carousel />
    </div>
  );
};

export default Hero;
