import React, { useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#footer",
                start: "30% 50%",
                toggleActions: "play none none none",
            },
        });

        // Animate heading
        tl.from(".animate-heading", {
            y: 50,
            opacity: 0,
            duration: 1.2, // slower
            ease: "power3.out",
        });

        // Animate links/content
        tl.from(
            ".animate-links",
            {
                y: 20,
                opacity: 0,
                stagger: 0.3, // more space between animations
                duration: 0.8, // slower for each item
                ease: "power3.out",
            },
            "-=0.8" // start slightly overlapping heading animation
        );
    }, []);


    return (
        <footer
            id="footer"
            className="min-h-screen bg-[#0C131B] text-white flex flex-col justify-between w-full"
        >
            {/* Main Heading */}
            <div className="my-container py-[4vw]">
                <div className="mb-[5vw] ">
                    <h1 className="animate-heading text-[8vw]  md:text-[15vw] font-black text-[#F1EDE0] leading-tight">
                        SAY HI!
                    </h1>
                </div>

                {/* Content Section */}
                <div className="flex flex-row justify-between items-center gap-[9vw] mb-[5vw] text-left">
                    {/* Pages Column */}
                    <div className="w-[20%] animate-links">
                        <h3 className="text-[1.2vw] font-semibold mb-[1.5vw] text-white">
                            PAGES
                        </h3>
                        <ul className="space-y-[0.6vw] text-[0.99vw]">
                            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "AWARDS", "NEWS", "MORE +"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="hover:text-teal-400 transition-all duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address Column */}
                    <div className="w-[40%] animate-links">
                        <h3 className="text-[1.2vw] font-semibold mb-[1.5vw] text-white">
                            ADDRESS
                        </h3>
                        <div className="space-y-[2vw] text-[0.9vw]">
                            <div>
                                <h4 className="font-semibold mb-[0.5vw]">PAKISTAN</h4>
                                <p className="white leading-snug">
                                    63LF, DLF-III PHASE-E - RAWALPINDI PAKISTAN
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-[0.5vw]">DUBAI</h4>
                                <p className="text-white leading-snug">
                                    OFFICE NO. 338, MASH-REG BUILDING, AL SIJO AL KABEER, BUR DUBAI, UAE
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="w-[40%] animate-links">
                        <p className="text-[1.3vw] mb-[1.5vw] text-white leading-snug">
                            Tell us about your project.<br />
                            Let's collaborate and make great stuff.
                        </p>
                        <div className="flex justify-start items-center gap-[2vw] ">
                            <a
                                href="tel:+971586996635"
                                className="flex items-center gap-[1vw] text-[1vw] hover:text-teal-400 transition-all duration-300"
                            >
                                <span className="w-[3vw] h-[3vw] bg-[#085859] rounded-full flex items-center justify-center">
                                    <Phone className="w-[1.2vw] h-[1.2vw]" />
                                </span>
                                +971586996635
                            </a>
                            <a
                                href="mailto:ALI@AZES-INTL.COM"
                                className="flex items-center gap-[1vw] text-[1vw] hover:text-teal-400 transition-all duration-300"
                            >
                                <span className="w-[3vw] h-[3vw] bg-[#085859] rounded-full flex items-center justify-center">
                                    <Mail className="w-[1.2vw] h-[1.2vw]" />
                                </span>
                                ALI@AZES-INTL.COM
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative w-full animate-links">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex flex-col w-[92%]">
                            <div className="flex flex-wrap items-center gap-[4vw] text-[0.99vw] text-white mb-[0.5vw]">
                                <p>© 2024 AZES</p>
                                <p>ALL RIGHTS RESERVED</p>
                                <a href="#" className="hover:text-teal-400 transition">
                                    LINKEDIN
                                </a>
                                <a href="#" className="hover:text-teal-400 transition">
                                    FACEBOOK
                                </a>
                                <a href="#" className="hover:text-teal-400 transition">
                                    INSTAGRAM
                                </a>
                                <a href="#" className="hover:text-teal-400 transition">
                                    YOUTUBE
                                </a>
                            </div>

                            <div className="w-full">
                                <img
                                    src="/images/footer-curve.png"
                                    alt=""
                                    className="w-[90%] h-auto"
                                />
                            </div>
                        </div>

                        <button
                            className="flex items-center gap-[0.5vw] whitespace-nowrap text-[0.9vw] bg-gradient-to-r from-[#B89C56] via-[#F2D7BC] to-[#B89C56] bg-clip-text text-transparent hover:opacity-80 transition"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            BACK TO TOP
                            <svg
                                className="w-[1.7vw] h-[2vw]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="arrowStrokeGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#B89C56" />
                                        <stop offset="50%" stopColor="#F2D7BC" />
                                        <stop offset="100%" stopColor="#B89C56" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M12 19V5M5 12l7-7 7 7"
                                    stroke="url(#arrowStrokeGradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    );
}
