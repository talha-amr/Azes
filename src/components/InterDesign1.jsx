import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const InterDesign1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".interior-section",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    // Animate heading - scale down and move up
    tl.to(".interior-heading", {
      fontSize: "6vw",
      top: "6vw",
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate paragraph - fade in and move up
    tl.from(
      ".interior-paragraph",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animate image
    tl.from(
      ".interior-image",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animate solutions section
    tl.from(
      ".solutions-section",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className='min-h-screen theme-blue'>
      
      
      <div className="interior-section relative flex w-full justify-start flex-col items-center min-h-screen pt-[10vw] pb-[6vw] border-b-[1px] border-[#FFFFFF]/30">
        <p className='interior-heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] text-gradient text-center whitespace-nowrap'>
          Interior Design
        </p>
        
        <p className='interior-paragraph text-gradient text-center text-[1vw] w-[40%] mt-[2vw]'>
          Step into a world where interiors are not just functional but works of art. Our innovative interior design concepts breathe life into new and existing spaces. Collaborate with us to create interiors that are both aesthetically pleasing and ergonomically sound, transforming your surroundings into a reflection of your style.
        </p>
        
        <div className="my-container interior-image mt-[4vw]">
          <img src="/images/inter-design.png" alt="Interior Design" className='w-full object-contain' />
        </div>
        
        <div className="solutions-section pt-[5vw] w-full">
          <div className="my-container flex justify-between items-start w-full">
            <p className='text-[#E7E7E8]/50 w-[50%] text-[1vw]'>SOLUTIONS</p>
            <div className='space-y-[1vw] w-[50%]'>
              <p className='text-gradient text-[1.5vw] font-semibold'>
                Azes, we go beyond blueprints. Our architectural services are a symphony of creativity and precision.
              </p>
              <p className='text-gradient text-[1vw]'>
                Whether it's designing iconic landmarks or creating serene residential havens, we bring your vision to life with unparalleled expertise. Discover how we elevate architectural possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterDesign1;