"use client";

import { SearchIcon } from "@/_components/icon";
import { BhagwanContext } from "@/app/context/bhagwanContext";
import useDebounce from "@/hook/useDebounce";
import { useContext, useEffect, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  const { searchData } = useContext(BhagwanContext) || { searchData: () => {} };

  useEffect(() => {
    if (debouncedSearch) {
      searchData(debouncedSearch);
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
        className="block w-full max-w-0 rounded-full border border-secondary bg-transparent py-2 pl-4 pr-7 text-sm font-normal leading-relaxed text-secondary placeholder-secondary outline-none transition-all duration-1000 ease-in-out hover:max-w-[calc(100vw_-_130px)] focus:max-w-[calc(100vw_-_130px)] focus:outline-none hover:md:max-w-sm focus:md:max-w-sm"
        value={search}
        onChange={handleChange}
        name="search"
        placeholder="भगवान का नाम"
      />
    </div>
  );
};

export default SearchInput;
