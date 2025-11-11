import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full bg-transparent border-b">
            <div className="px-[2vw] py-[0.9vw]">
                <div className="flex items-center justify-between">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 w-[55%]">
                        <img
                            src="/images/logo-original.png"
                            alt="Logo"
                            className="h-[2.7vw] w-auto"
                        />
                    </div>

                    {/* Center + Right */}
                    <div className="flex-1 flex justify-between items-baseline text-[1.2vw]">

                        {/* Center: Navigation Links */}
                        <div className="flex-1 flex justify-between items-center">

                            {/* Center: Navigation Links */}
                            <div className="flex justify-center items-center gap-[1.9vw]">

                                {/* Active link (no bullet, but reserve space) */}
                                <a href="#home" className=" flex items-center">

                                    Home
                                </a>
                                <span className=" text-[2.5vw] leading-none flex items-center">•</span>
                                {/* Inactive links (with bullet) */}
                                <a href="#about" className=" flex items-center">

                                    About
                                </a>
                                <span className=" text-[2.5vw] leading-none flex items-center">•</span>
                                <a href="#contact" className=" flex items-center">

                                    Contact
                                </a>

                            </div>
                        </div>

                        {/* Right: Menu Text + Icon */}
                        <div className="flex items-center  gap-[1.9vw] cursor-pointer flex-shrink-0">
                            <div className=" font-regular">Menu</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                              
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black w-[3.1vw]"
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
