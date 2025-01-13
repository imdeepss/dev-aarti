import React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        d="m17 17 4 4M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      ></path>
    </svg>
  );
};

export default React.memo(SearchIcon);
