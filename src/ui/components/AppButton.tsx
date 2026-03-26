import React from 'react';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button",
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full flex items-center justify-between py-4 px-8 group text-left transition-colors hover:bg-black/[0.02] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
