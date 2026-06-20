import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};
const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="group relative inline-block px-4 py-2 font-medium"
      onClick={onClick}
    >
      <span
        className={`duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-secondary transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0`}
      ></span>
      <span
        className={`group-hover:bg-secondary-50 absolute inset-0 h-full w-full border border-secondary bg-primary`}
      ></span>
      <span className="relative text-secondary text-lg font-gotu">{text}</span>
    </button>
  );
};

export default Button;
