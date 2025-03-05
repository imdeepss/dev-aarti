import { IconProps } from "@/type/index";
import React from "react";

const SearchIcon: React.FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="m17 17 4 4M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      ></path>
    </svg>
  );
};

export default React.memo(SearchIcon);
