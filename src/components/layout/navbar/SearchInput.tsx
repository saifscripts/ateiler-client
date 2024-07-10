import { Input, InputIcon } from 'keep-react';
import { MagnifyingGlass } from 'phosphor-react';

const SearchInput = () => {
  return (
    <fieldset className="relative max-w-md w-96 mr-4">
      <Input
        placeholder="Search Products"
        className="ps-11  placeholder:text-gray-400 focus-visible:ring-0"
      />
      <InputIcon>
        <MagnifyingGlass size={19} color="#AFBACA" />
      </InputIcon>
    </fieldset>
  );
};

export default SearchInput;
