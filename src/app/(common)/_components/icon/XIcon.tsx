import * as React from "react";
import { IconProps } from "../../types";

const XIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      fill={color || "rgba(0, 43, 53, 1)"}
      id="Capa_1"
      data-name="Capa 1"
      viewBox="0 0 24 24"
    >
      <path d="M18.9 1.153h3.682l-8.042 9.189L24 22.848h-7.405l-5.804-7.583-6.634 7.583H.469l8.6-9.831L0 1.153h7.593l5.241 6.931zm-1.293 19.494h2.039L6.482 3.239h-2.19z"></path>
    </svg>
  );
};
export default React.memo(XIcon);
