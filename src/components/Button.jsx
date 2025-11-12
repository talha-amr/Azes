import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, onClick, className = '' }) => {
  const baseStyles = `
    rounded-full font-medium transition-all duration-500
    flex items-center border border-[#085859] text-[#085859] 
    hover:bg-[#085859] hover:text-white
    overflow-hidden
  `;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      style={{
        padding: '0.9vw 1.99vw',
        gap: '0.4vw',
      }}
    >
      <span className="relative z-10 flex items-center gap-[0.4vw]">
        {children}
        <ArrowRight style={{ width: '1.5vw', height: '1.2vw' }} />
      </span>
      {/* Optional: background fill animation */}
      <span
        className="absolute inset-0 bg-[#085859] scale-x-0 origin-left transition-transform duration-500 ease-in-out"
        style={{ zIndex: 0 }}
      ></span>
    </button>
  );
};

export default Button;
