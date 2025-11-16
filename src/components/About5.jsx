import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from './Button';
const About5 = () => {
      useGSAP(() => {
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-section",
        start: "43% 85%",
        toggleActions: "play none none none",
      },
    });

    ctaTl.from(".cta-text", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    ctaTl.from(
      ".cta-button",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );
  }, []);
    const teamMembers = [
        {
            id: 1,
            name: "Saadullah Khan",
            role: "Principal Architect",
            image: "/images/person-1.png"
        },
        {
            id: 2,
            name: "Kiran Asalam",
            role: "Senior Interior Designer",
            image: "/images/person-2.png"
        },
        {
            id: 3,
            name: "Zahra Riaz",
            role: "Principal Architect",
            image: "/images/person-3.png"
        },
        {
            id: 4,
            name: "Amjad Ali",
            role: "Senior Interior Designer",
            image: "/images/person-4.png"
        }
    ];

    return (
        <>
        <div className="w-full bg-[#808080] py-[8vw]">
            <div className="my-container">
                {/* Title Row */}
                <div className="grid grid-cols-2 gap-[2vw]">
                    <div></div>
                    <h2 className="text-white text-[3.5vw] font-normal tracking-wide mb-[4vw]">
                        OUR TEAM
                    </h2>
                </div>
                
                {/* First Row - Top 2 Members */}
                <div className="grid grid-cols-2 gap-[2vw] mb-[2vw]">
                    <div></div>
                    <div className="grid grid-cols-2 gap-[2vw]">
                        {teamMembers.slice(0, 2).map((member) => (
                            <div key={member.id} className="flex flex-col">
                                <div className="w-full aspect-[4/5] mb-[1vw] overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white text-[1.8vw] font-medium mb-[0.3vw]">
                                    {member.name}
                                </h3>
                                <p className="text-white text-[1.2vw] font-light pb-[1vw] border-b">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Description and Last 2 Members with Flex */}
                <div className="flex justify-between items-start gap-[2vw]">
                    {/* Left - Description */}
                    <div className="flex-1">
                        <p className="text-white text-[1.1vw] leading-[1.8] font-light w-[70%]">
                            Meet the Minds Behind Nilsson's Brilliance. Our diverse team of visionary architects and designers is united by a passion for sustainable innovation, shaping a greener architectural landscape.
                        </p>
                    </div>
                    
                    {/* Right - Last 2 Members */}
                    <div className="flex-1 grid grid-cols-2 gap-[2vw]">
                        {teamMembers.slice(2, 4).map((member) => (
                            <div key={member.id} className="flex flex-col">
                                <div className="w-full aspect-[4/5] mb-[1vw] overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white text-[1.8vw] font-medium mb-[0.3vw]">
                                    {member.name}
                                </h3>
                                <p className="text-white text-[1.2vw] font-light pb-[1vw] border-b">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
         <div className="cta-section h-[80vh] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <p className="cta-text font-regular mb-[3vw] text-[4.7vw] leading-none">
            Inspiring Possibilities,
            <br />
            Defining Spaces.
          </p>
          <div className="cta-button">
            <Button
              variant="outline"
              className="text-[1.4vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white"
              onClick={() => console.log("Let's work together clicked")}
            >
              LET'S WORK TOGETHER
            </Button>
          </div>
        </div>
      </div>
        </>
    );
};

export default About5;