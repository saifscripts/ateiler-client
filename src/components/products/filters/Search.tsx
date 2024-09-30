import { Input, InputIcon } from 'keep-react';
import { MagnifyingGlass } from 'phosphor-react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../../utils/debounce';

export default function Search() {
  const [params, setParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(params.get('searchTerm') || '');
  }, [params]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetParams = useCallback(
    debounce((value: string) => {
      setParams(
        (params) => {
          const currentParams = Object.fromEntries(params);
          if (!value) {
            delete currentParams.searchTerm;
          } else {
            currentParams.searchTerm = value;
          }
          return currentParams;
        },
        { replace: true }
      );
    }, 500),
    [setParams, debounce]
  );

  return (
    <fieldset className="relative w-full max-w-sm">
      <Input
        placeholder="Search Products"
        className="ps-11 placeholder:text-gray-400 focus-visible:ring-0"
        value={searchTerm}
        onChange={(e) => {
          const searchValue = e.target.value;

          debouncedSetParams(searchValue);
          setSearchTerm(searchValue);
        }}
      />
      <InputIcon>
        <MagnifyingGlass size={20} color="#AFBACA" />
      </InputIcon>
    </fieldset>
  );
}
