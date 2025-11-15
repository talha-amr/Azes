import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InterDesign2 = () => {
    const containerRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const sections = [
        {
            id: 1,
            image: "/images/1.jpg",
            title: "Initial Assessment and Space Planning",
            desc1: "Visit the site to assess the existing space, taking measurements and noting structural elements",
            desc2: "Develop a space plan that optimizes layout for functionality and flow."
        },
        {
            id: 2,
            image: "/images/2.jpg",
            title: "Concept Development and Design",
            desc1: "Create mood boards and design concepts that reflect the client's vision",
            desc2: "Select materials, colors, and furnishings that complement the overall aesthetic."
        },
        {
            id: 3,
            image: "/images/5.jpg",
            title: "3D Visualization and Approval",
            desc1: "Present 3D renderings to help visualize the final design",
            desc2: "Make adjustments based on client feedback before finalizing the plan."
        },
        {
            id: 4,
            image: "/images/3.jpg",
            title: "Procurement and Coordination",
            desc1: "Source and procure all necessary materials and furnishings",
            desc2: "Coordinate with contractors and vendors to ensure timely delivery."
        },
        {
            id: 5,
            image: "/images/4.jpg",
            title: "Installation and Final Touches",
            desc1: "Oversee the installation of all design elements",
            desc2: "Add final touches and styling to complete the transformation."
        }
    ];

    // Preload all images
    useEffect(() => {
        const imagePromises = sections.map((section) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = section.image;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setImagesLoaded(true);
                // Refresh ScrollTrigger after images load
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 100);
            })
            .catch((error) => {
                console.error("Error loading images:", error);
                setImagesLoaded(true); // Continue anyway
            });
    }, []);

    useGSAP(() => {
        if (!imagesLoaded) return;

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".section-card");

            cards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "-100% 80%",
                    end: "bottom 20%",
                    onEnter: () => setActiveIndex(i),
                    onEnterBack: () => setActiveIndex(i),
                
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, { scope: containerRef, dependencies: [imagesLoaded] });

    return (
        <div className='theme-blue relative' ref={containerRef}>
            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen">
                <div className="flex w-full h-full gap-[7vw]">
                    {/* LEFT SIDE - STICKY IMAGE */}
                    <div className='w-[50%] h-full flex items-center justify-center'>
                        <div className="relative w-full h-full">
                            {sections.map((section, index) => (
                                <img
                                    key={section.id}
                                    src={section.image}
                                    alt=""
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                        activeIndex === index 
                                            ? 'opacity-100 translate-y-0 scale-100' 
                                            : activeIndex > index 
                                                ? 'opacity-0 -translate-y-12 scale-98'
                                                : 'opacity-0 translate-y-12 scale-98'
                                    }`}
                                    style={{
                                        zIndex: activeIndex === index ? 10 : index,
                                        willChange: 'transform, opacity'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - STICKY CONTENT */}
                    <div className='w-[50%] h-full flex flex-col justify-center relative pr-[8vw]'>
                        {/* STICKY HOW IT WORKS */}
                        <div className="absolute top-[7vw] left-0 z-30">
                            <p className='text-white/50 text-[1.3vw] tracking-wide'>HOW IT WORKS</p>
                        </div>

                        {/* STACKED CONTENT WITH FADE EFFECT */}
                        <div className="relative w-full">
                            {sections.map((section, index) => (
                                <div 
                                    key={section.id}
                                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-in-out ${
                                        activeIndex === index 
                                            ? 'opacity-100 translate-y-0' 
                                            : activeIndex > index 
                                                ? 'opacity-0 -translate-y-12'
                                                : 'opacity-0 translate-y-12'
                                    }`}
                                    style={{
                                        zIndex: activeIndex === index ? 10 : index,
                                        willChange: 'transform, opacity'
                                    }}
                                >
                                    <p className='text-gradient text-[3.5vw] leading-[1.1] font-semibold w-[70%]'>
                                        {section.title}
                                    </p>
                                    <p className='text-gradient w-[70%] text-[1.1vw] mt-[2vw]'>
                                        {section.desc1}
                                    </p>
                                    <p className='text-gradient mt-[1vw] text-[1.1vw] w-[70%]'>
                                        {section.desc2}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* STICKY VERTICAL SLIDER */}
                        <div className="absolute right-[2vw] top-1/2 -translate-y-1/2 z-30 flex flex-col gap-[0.5vw]">
                            {sections.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-[1.9vw] h-[0.2vw] rounded-full transition-all duration-500 ease-in-out ${activeIndex === i ? 'bg-white' : 'bg-white/30'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL SPACER - Creates scrollable height */}
            {sections.map((section) => (
                <div 
                    key={section.id}
                    className='section-card h-[70vh]'
                />
            ))}
        </div>
    );
};

export default InterDesign2;