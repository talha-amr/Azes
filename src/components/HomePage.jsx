import React, { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const videoRef = useRef();

  // GSAP animation
  useGSAP(() => {
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
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className='my-container pt-[9.5vw]'>
        <div className="space-y-[1vw] mb-[3vw]">
          <h1 className='text-[4vw] font-bold tracking-tight'>
            Explore the Digital Horizon
          </h1>
          <p className='font-regular text-[2vw] w-[30%]'>
            Elevate Your Experience with Our Architectural Vision
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="overflow-hidden">
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
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden h-[13vw] flex items-center marquee-wrapper">
        <div className="flex whitespace-nowrap marquee-container">
          {/* First set */}
          <span className="flex items-center text-[3vw] theme-torquoise">
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Interior Design
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Visual Communication
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Architecture
          </span>

          {/* Second set for seamless loop */}
          <span className="flex items-center text-[3vw] theme-torquoise">
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Interior Design
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Visual Communication
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Architecture
          </span>
          <span className="flex items-center text-[3vw] theme-torquoise">
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Interior Design
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Visual Communication
            <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">■</span>
            Architecture
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
