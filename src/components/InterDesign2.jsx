import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react"; // you can keep it, but we use useEffect for creating ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InterDesign2 = () => {
    const containerRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const sections = [
        {
            id: 1, image: "/images/1.jpg", title: "Initial Assessment and Space Planning",
            desc1: "Visit the site to assess the existing space, taking measurements and noting structural elements",
            desc2: "Develop a space plan that optimizes layout for functionality and flow."
        },
        {
            id: 2, image: "/images/2.jpg", title: "Concept Development and Design",
            desc1: "Create mood boards and design concepts that reflect the client's vision",
            desc2: "Select materials, colors, and furnishings that complement the overall aesthetic."
        },
        {
            id: 3, image: "/images/5.jpg", title: "3D Visualization and Approval",
            desc1: "Present 3D renderings to help visualize the final design",
            desc2: "Make adjustments based on client feedback before finalizing the plan."
        },
        {
            id: 4, image: "/images/3.jpg", title: "Procurement and Coordination",
            desc1: "Source and procure all necessary materials and furnishings",
            desc2: "Coordinate with contractors and vendors to ensure timely delivery."
        },
        {
            id: 5, image: "/images/4.jpg", title: "Installation and Final Touches",
            desc1: "Oversee the installation of all design elements",
            desc2: "Add final touches and styling to complete the transformation."
        }
    ];

    // --- Preload images ---
    useEffect(() => {
        let mounted = true;
        const promises = sections.map(sec => new Promise((resolve) => {
            const img = new Image();
            img.src = sec.image;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // resolve on error so app still runs
        }));

        Promise.all(promises).then(() => {
            if (!mounted) return;
            setImagesLoaded(true);
            // allow layout to settle then refresh ScrollTrigger
            setTimeout(() => ScrollTrigger.refresh(), 80);
        });

        return () => { mounted = false; };
    }, []);


    // --- Create single ScrollTrigger that drives progress ---
    useEffect(() => {
        if (!imagesLoaded) return;

        const container = containerRef.current;
        if (!container) return;

        const total = sections.length;
        // total scroll distance: transitions count * viewport height
        const totalScroll = Math.max((total - 1) * window.innerHeight, window.innerHeight);

        // create ScrollTrigger that drives progress (scrub true for smooth)
        const st = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: true,
            pin: true,
            onUpdate: (self) => {
                // use progress to compute index 0..total-1
                // multiply by (total-1) so last progress maps to last index
                const index = Math.round(self.progress * (total - 1));
                setActiveIndex(prev => (prev === index ? prev : index));
            }
        });

        // safety refresh
        ScrollTrigger.refresh();

        return () => {
            if (st) st.kill();
            // also kill any ScrollTrigger created by gsap
            // ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [imagesLoaded, sections.length]);


    return (
        <div className='theme-blue relative h-screen overflow-hidden' ref={containerRef}>
            <div className="flex w-full h-full gap-[7vw]">

                {/* LEFT IMAGE SLIDES */}
                <div className='w-[50%] h-full flex items-center justify-center'>
                    <div className="relative w-full h-full">
                        {sections.map((section, index) => (
                            <img
                                key={section.id}
                                src={section.image}
                                alt=""
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-900 ease-in-out
                                    ${activeIndex === index
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : 'opacity-0 scale-95 translate-y-6'}
                                `}
                                style={{ zIndex: activeIndex === index ? 10 : 1, willChange: 'transform, opacity' }}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT TEXT SLIDES */}
                <div className='w-[50%] h-full flex flex-col justify-center relative pr-[8vw]'>

                    <p className='absolute top-[7vw] left-0 text-white/50 text-[1.3vw] tracking-wide'>
                        HOW IT WORKS
                    </p>

                    <div className="relative w-full flex items-center">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-900 ease-in-out
                ${activeIndex === index
                                        ? 'opacity-100 translate-y-[-50%]'
                                        : 'opacity-0 translate-y-[calc(-50%+20px)]'}
            `}
                                style={{ zIndex: activeIndex === index ? 10 : 1 }}
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

                    {/* SLIDER BARS */}
                    <div className="absolute right-[2vw] top-1/2 -translate-y-1/2 flex flex-col gap-[0.5vw]">
                        {sections.map((_, i) => (
                            <div
                                key={i}
                                className={`w-[1.9vw] h-[0.2vw] rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-white' : 'bg-white/30'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterDesign2;
