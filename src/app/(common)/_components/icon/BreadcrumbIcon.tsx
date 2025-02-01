import { IconProps } from "@/type/index";
import React from "react";

const BreadcrumbIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width || "22"}
      height={height || "16"}
      viewBox="0 0 22 16"
      fill="rgba(0, 43, 53, 1)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M0.5 14H21.5V11.6667H0.5V14ZM0.5 8.16667H21.5V5.83333H0.5V8.16667ZM0.5 0V2.33333H21.5V0H0.5Z"
        fill={color || "rgba(0, 43, 53, 1)"}
      />
    </svg>
  );
};

export default React.memo(BreadcrumbIcon);
