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

  const debouncedSetParams = useCallback(
    debounce((value: string) => {
      setParams((params) => {
        const currentParams = Object.fromEntries(params);
        if (!value) {
          delete currentParams.searchTerm;
        } else {
          currentParams.searchTerm = value;
        }
        return currentParams;
      });
    }, 500),
    []
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
