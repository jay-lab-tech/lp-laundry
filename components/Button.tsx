
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'whatsapp';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center inline-block";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-green-200"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
