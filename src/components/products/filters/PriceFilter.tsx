import { Input, InputIcon } from 'keep-react';
import { useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

export default function PriceFilter() {
  const [params, setParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(params.get('price[gte]') || '');
  const [maxPrice, setMaxPrice] = useState(params.get('price[lte]') || '');

  useEffect(() => {
    setMinPrice(params.get('price[gte]') || '');
    setMaxPrice(params.get('price[lte]') || '');
  }, [params]);

  return (
    <div className="flex flex-col gap-2 px-3 py-2 border rounded-md">
      <label htmlFor="">Price Range</label>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
        <fieldset className="relative w-full max-w-sm">
          <Input
            type="number"
            placeholder="Min Price"
            className="ps-11 placeholder:text-gray-400 focus-visible:ring-0"
            value={minPrice}
            onChange={(e) => {
              setParams(
                (params) => {
                  const currentParams = Object.fromEntries(params);
                  if (!e.target.value) {
                    delete currentParams['price[gte]'];
                  } else {
                    currentParams['price[gte]'] = e.target.value;
                  }
                  return currentParams;
                },
                { replace: true }
              );
            }}
          />
          <InputIcon>
            <FaDollarSign size={16} color="#AFBACA" />
          </InputIcon>
        </fieldset>
        <fieldset className="relative w-full max-w-sm">
          <Input
            type="number"
            placeholder="Max Price"
            className="ps-11 placeholder:text-gray-400 focus-visible:ring-0"
            value={maxPrice}
            onChange={(e) => {
              setParams(
                (params) => {
                  const currentParams = Object.fromEntries(params);
                  if (!e.target.value) {
                    delete currentParams['price[lte]'];
                  } else {
                    currentParams['price[lte]'] = e.target.value;
                  }
                  return currentParams;
                },
                { replace: true }
              );
            }}
          />
          <InputIcon>
            <FaDollarSign size={16} color="#AFBACA" />
          </InputIcon>
        </fieldset>
      </div>
    </div>
  );
}
