import { Star } from 'phosphor-react';
import Rating from 'react-rating';

const RatingComponent = ({ value }: { value: number }) => {
  return (
    // @ts-expect-error there is a version miss-match in the source
    <Rating
      readonly
      emptySymbol={<Star className="text-metal-400" />}
      fullSymbol={<Star className="text-yellow-500" />}
      initialRating={value}
    />
  );
};

export default RatingComponent;
