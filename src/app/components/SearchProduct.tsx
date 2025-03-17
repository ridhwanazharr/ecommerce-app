'use client'

import { debounce } from 'lodash';

interface SearchProductProps {
  onSearch: (query: string) => void;
}

const SearchProduct = ({ onSearch }: SearchProductProps) => {

  const debounceSearch = debounce((val: string) => {
    onSearch(val);
  }, 700);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debounceSearch(value);
  };

  return (
      <input
        className="drop-shadow-md outline-1 text-base outline-zinc-500 rounded-lg px-2 py-1"
        placeholder="Search products..."
        type="text"
        onChange={handleSearch}
      />
  );
};

export default SearchProduct;
