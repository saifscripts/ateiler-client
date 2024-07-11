import Categories from '../categories/Categories';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <div className="container w-full grid grid-cols-[4fr_1fr] py-6 gap-6">
      <Carousel />
      <Categories />
    </div>
  );
};

export default Hero;
