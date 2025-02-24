"use client";

import { SearchIcon } from "@/_components/icon";
import useDebounce from "@/hook/useDebounce";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Debounced search value: ", debouncedSearch);
    }
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative text-secondary focus-within:text-secondary">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="block w-full max-w-0 rounded-full border border-secondary bg-transparent py-2 pl-4 pr-7 text-sm font-normal leading-relaxed text-secondary placeholder-secondary outline-none transition-all duration-1000 ease-in-out hover:md:max-w-sm focus:md:max-w-sm focus:outline-none hover:max-w-xs focus:max-w-xs"
        value={search}
        onChange={handleChange}
        name="search"
      />
    </div>
  );
};

export default SearchInput;
