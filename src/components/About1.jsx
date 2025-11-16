import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About1 = () => {
    const videoRef = useRef(null);

    // GSAP animation
    useGSAP(() => {
        if (!videoRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                videoRef.current,
                { scaleX: 0.9, scaleY: 0.95 }, // start slightly smaller
                {
                    scaleX: 1,
                    scaleY: 1,
                    transformOrigin: "center center", // expand from center
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        }, videoRef); // context scoped to videoRef

        return () => ctx.revert();
    }, []);

    return (
        <div className='w-full'>
            <div className="my-container pt-[13vw]">
                <p className='text-[3.7vw] w-[50%] mx-auto leading-none text-center font-medium'>
                    Transforming Spaces with Timeless Elegance and Innovation
                </p>
                <p className='text-[1.1vw] w-[60%] mx-auto text-center mt-[4vw]'>
                    Welcome to Azes, where creativity meets functionality to redefine interior design. With a passion for crafting spaces that inspire and elevate, we blend timeless elegance with innovative solutions. Whether it's revitalizing homes, offices, or commercial spaces, our expert team is dedicated to exceeding expectations, one project at a time. Discover the art of interior design with us, where every detail tells a story of craftsmanship and style.
                </p>
            </div>

            <div className="overflow-hidden mt-[5vw]">
                <video
                    ref={videoRef}
                    src="/images/video.mp4"
                    className="w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
                <div className="min-h-screen bg-[#085859] flex justify-between items-center">
                    <div className="my-container flex justify-between items-start">
                        <p className='w-[50%] text-[#FFFFFF] text-[1.3vw] font-light'>OUR MISSION</p>
                        <div className="space-y-4 w-[50%]">
                            <p className='text-[2.8vw] font-medium text-[#FFFFFF]'>Unveiling Tomorrow's Spaces:
                                Our Mission & Vision</p>
                            <p className='text-[1.2vw] text-white'>At Azes, we envision a world where every space tells a unique story of beauty, functionality, and personalization. Our mission is to pioneer innovative designs that harmonize aesthetics with practicality, transforming environments into seamless reflections of our clients' aspirations. With a commitment to excellence and sustainability, we strive to inspire and empower through visionary interior solutions that transcend expectations and leave a lasting impression on every soul we touch.</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default About1;
