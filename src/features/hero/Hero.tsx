import Categories from '../categories/Categories';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <div className="container w-full grid grid-cols-[1fr_4fr] py-4 gap-2">
      <Categories />
      <Carousel />
    </div>
  );
};

export default Hero;
