import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, onClick, variant = 'outline', className = '' }) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 flex items-center";
  const variants = {
    outline: "border-1 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white",
    filled: "bg-teal-700 text-white hover:bg-teal-800"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        padding: '0.9vw 1.99vw',
        gap: '0.4vw',
      }}
    >
      {children}
      <ArrowRight style={{ width: '1.5vw', height: '1.2vw' }} />
    </button>
  );
};

export default Button;