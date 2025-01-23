import { SearchIcon } from "@/_components/icon";

const SearchInput = () => {
  return (
    <div className="relative text-secondary focus-within:text-secondary">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="block w-full max-w-0 rounded-full border border-secondary bg-transparent py-2 pl-4 pr-7 text-sm font-normal leading-relaxed text-secondary placeholder-secondary outline-none transition-all duration-1000 ease-in-out hover:max-w-sm focus:max-w-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
