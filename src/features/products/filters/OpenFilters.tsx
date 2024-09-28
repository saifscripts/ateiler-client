import { Button } from 'keep-react';
import { PiFunnelX } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

export default function OpenFilters() {
  const [, setParams] = useSearchParams();

  return (
    <div className="bg-white px-2 py-4 rounded-lg hidden 2xl:block h-max space-y-2">
      <h2 className="text-xl font-semibold px-1 mb-3">Filters</h2>

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
        <CategoryFilter />
        <BrandFilter />
      </div>

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
        <PriceFilter />
        <RatingFilter />
      </div>
      <div className="flex justify-end">
        <Button
          className="gap-2"
          color="secondary"
          size="sm"
          variant="link"
          onClick={() => {
            setParams({});
          }}
        >
          <PiFunnelX size={19} />
          Clear Filter
        </Button>
      </div>
    </div>
  );
}
