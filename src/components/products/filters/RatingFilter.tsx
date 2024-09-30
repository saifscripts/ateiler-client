import { Input, InputIcon } from 'keep-react';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

export default function RatingFilter() {
  const [params, setParams] = useSearchParams();
  const [minRating, setMinRating] = useState(params.get('rating[gte]') || '');
  const [maxRating, setMaxRating] = useState(params.get('rating[lte]') || '');

  useEffect(() => {
    setMinRating(params.get('rating[gte]') || '');
    setMaxRating(params.get('rating[lte]') || '');
  }, [params]);

  const handleMinRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams(
      (params) => {
        const currentParams = Object.fromEntries(params);
        if (!e.target.value) {
          delete currentParams['rating[gte]'];
        } else {
          currentParams['rating[gte]'] = e.target.value;
        }
        return currentParams;
      },
      { replace: true }
    );
  };

  const handleMaxRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams(
      (params) => {
        const currentParams = Object.fromEntries(params);
        if (!e.target.value) {
          delete currentParams['rating[lte]'];
        } else {
          currentParams['rating[lte]'] = e.target.value;
        }
        return currentParams;
      },
      { replace: true }
    );
  };

  return (
    <div className="flex flex-col gap-2 px-3 py-2 border rounded-md">
      <label htmlFor="">Rating</label>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
        <fieldset className="relative w-full max-w-sm">
          <Input
            type="number"
            placeholder="Min Rating"
            className="ps-11 placeholder:text-gray-400 focus-visible:ring-0"
            value={minRating}
            onChange={handleMinRatingChange}
          />
          <InputIcon>
            <FaStar size={16} color="#AFBACA" />
          </InputIcon>
        </fieldset>
        <fieldset className="relative w-full max-w-sm">
          <Input
            type="number"
            placeholder="Max Rating"
            className="ps-11 placeholder:text-gray-400 focus-visible:ring-0"
            value={maxRating}
            onChange={handleMaxRatingChange}
          />
          <InputIcon>
            <FaStar size={16} color="#AFBACA" />
          </InputIcon>
        </fieldset>
      </div>
    </div>
  );
}
