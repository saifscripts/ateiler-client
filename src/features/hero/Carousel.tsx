import autoPlay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react';

const CarouselComponent = () => {
  return (
    <Carousel
      options={{ loop: true }}
      plugins={[autoPlay()]}
      className="order-1 xl:order-2"
    >
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide} className="pl-0">
            <div className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-primary-200 dark:border-metal-900 dark:bg-metal-900">
              <CarouselPrevButton />
              <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">
                {slide}
              </h1>
              <CarouselNextButton />
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
    </Carousel>
  );
};

export default CarouselComponent;
