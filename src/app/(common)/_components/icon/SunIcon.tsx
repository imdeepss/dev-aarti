import { IconProps } from "@/type/index";
import React from "react";

const SunIcon: React.FC<IconProps> = ({
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
    className={className}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
  </svg>
);

export default React.memo(SunIcon);
