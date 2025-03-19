import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onCLick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onCLick, className }) => {
  return (
    <button
      onClick={onCLick}
      className={`bg-red-600 rounded-3xl px-4 py-2 font-semibold hover:bg-red-400 transition cursor-pointer text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button