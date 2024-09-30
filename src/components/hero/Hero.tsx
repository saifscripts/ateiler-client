import autoPlay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/images/buy-one-get-three.webp';
import banner3 from '../../assets/images/last-minute-offer.webp';
import banner2 from '../../assets/images/mega-sale.webp';

const slides = [
  {
    id: 1,
    image: banner1,
  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3,
  },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
      {/* Carousel Slides */}
      <CarouselSlides>
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="p-0">
            <div
              className="flex aspect-video lg:aspect-auto lg:h-[calc(100vh-180px)] items-center justify-center bg-metal-100 dark:border-metal-900 dark:bg-metal-900 cursor-pointer"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => navigate('/products')}
            />
          </CarouselItem>
        ))}
      </CarouselSlides>

      {/* Carousel Controls */}
      <div className="container">
        <CarouselControl className="bg-white p-4 rounded-xl mt-4">
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          <CarouselIndicators />
        </CarouselControl>
      </div>
    </Carousel>
  );
}
