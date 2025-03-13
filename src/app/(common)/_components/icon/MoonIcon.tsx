import { IconProps } from "@/type/index";
import * as React from "react";

const MoonIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "24"}
    height={height || "24"}
    fill={color || "rgba(0, 43, 53, 1)"}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"></path>
  </svg>
);

export default React.memo(MoonIcon);
