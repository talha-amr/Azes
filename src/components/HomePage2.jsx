import React from "react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HomePage2 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "20% 80%",
        toggleActions: "play none none none",
        
      },
    });

    // Animate both left + right together
    tl.from([".animate-left", ".animate-right"], {
      y: 80,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="py-[9vw]">
        <div className="my-container" id="about">
          <div className="flex flex-row gap-[2vw] items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2 animate-left">
              <p className="text-[#9B9EA2] font-light text-[2vw] uppercase mb-[1.9vw]">
                ABOUT
              </p>

              <h2 className="text-[1.8vw] font-medium text-gray-900 mb-[2vw] leading-tight">
                Azes can be trusted to deliver residential and commercial
                groundworks projects, concrete substructures and superstructures
                to the highest quality standards, on time and to budget, no
                matter how technically demanding or logistically complicated.
              </h2>

              <p className="text-[1.4vw] pb-[8vw]">
                This modern art gallery and cultural hub, situated on a 2-acre
                plot (87,120 sqft), aim to create an immersive experience by
                seamlessly blending contemporary architecture with curated art
                installations, fostering dynamic cultural interactions.
              </p>

              <Button
                variant="outline"
                className="text-[1.2vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white"
                onClick={() => console.log("More details clicked")}
              >
                MORE DETAIL
              </Button>
            </div>

            {/* Right Content */}
            <div className="w-[40%] relative animate-right">
              <div className="relative">
                <img
                  src="/images/Home-2.png"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />

                {/* Since 2008 Badge */}
                <div className="absolute top-[11%] right-[10%]">
                  <p className="text-[1.4vw] font-regular text-black">
                    Since 2008
                  </p>
                </div>

                {/* Logo Overlay */}
                <div className="absolute -bottom-0.5 right-0 w-[16vw]">
                  <img
                    src="/images/logo-overlay.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage2;
