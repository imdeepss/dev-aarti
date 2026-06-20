import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
};
const Button = ({ text, onClick, active = false }: ButtonProps) => {
  return (
    <button
      className={`relative overflow-hidden rounded-full px-6 py-2.5 font-gotu text-lg font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 glass-panel
        ${active ? 'text-white border-accent shadow-[0_0_15px_rgba(255,153,51,0.5)]' : 'text-secondary border-secondary/20 bg-primary/50'}
      `}
      onClick={onClick}
    >
      <span className={`absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-dark transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 hover:opacity-10'}`}></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
