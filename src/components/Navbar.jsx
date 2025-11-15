import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme = "main" }) => {
  const isMain = theme === "main";

  return (
    <nav className={`w-full ${isMain ? "bg-transparent border-b border-b-gray-400" : "theme-blue text-white"} absolute z-[9999]`}>
      <div className="px-[2vw] py-[0.9vw]">
        <div className="flex items-center justify-between">

          {/* Left: Logo */}
          <div className="flex-shrink-0 w-[55%]">
            <img
              src={isMain ? "/images/logo-original.png" : "/images/main-logo-golden.png"}
              alt="Logo"
              className="h-[2.3vw] w-auto"
            />
          </div>

          {/* Center + Right */}
          <div className="flex-1 flex justify-between items-baseline text-[1vw]">

            {/* Center: Navigation Links */}
            <div className="flex justify-center items-center gap-[1.9vw]">
              {/* Active link (Home) */}
              <Link to="/" className="group flex items-center relative overflow-hidden">
                <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                  Home
                </p>
                <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                  Home
                </p>
              </Link>
              <span className="text-[2.5vw] leading-none flex items-center">•</span>

              {/* Inactive link (About) */}
              <Link to="/about" className="group flex items-center relative overflow-hidden">
                <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                  About
                </p>
                <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                  About
                </p>
              </Link>
              <span className="text-[2.5vw] leading-none flex items-center">•</span>

              {/* Inactive link (Contact) */}
              <Link to="/contact" className="group flex items-center relative overflow-hidden">
                <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                  Contact
                </p>
                <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                  Contact
                </p>
              </Link>
            </div>

            <Link to="/" className="group flex items-center relative overflow-hidden">
              <p className="block transition-transform font-semibold duration-500 group-hover:-translate-y-full">
                Download Company Profile
              </p>
              <p className="absolute top-0 left-0 font-semibold transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                Download Company Profile
              </p>
            </Link>

            {/* Right: Menu Text + Icon */}
            <div className="flex items-center gap-[1.9vw] cursor-pointer flex-shrink-0">
              <div className="text-[1vw] font-regular">Menu</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${isMain?"text-black":"text-white"} w-[2vw]`}
              >
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
