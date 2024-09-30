import { Star } from 'phosphor-react';
import Rating from 'react-rating';

const RatingComponent = ({ value }: { value: number }) => {
  return (
    // @ts-expect-error there is a version miss-match in the source
    <Rating
      readonly
      emptySymbol={<Star className="text-metal-100" weight="fill" />}
      fullSymbol={<Star className="text-yellow-500" weight="fill" />}
      initialRating={value}
    />
  );
};

export default RatingComponent;
