import React from "react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage2 = () => {
  useGSAP(() => {
    // Split text elements into lines
    const aboutLabelSplit = new SplitText(".about-label", { type: "lines" });
    const headingSplit = new SplitText(".about-heading", { type: "lines" });
    const paragraphSplit = new SplitText(".about-paragraph", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "20% 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate "ABOUT" label
    tl.from(aboutLabelSplit.lines, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate heading lines with stagger
    tl.from(
      headingSplit.lines,
      {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
      },
      "-=0.7"
    );

    // Animate paragraph lines with stagger
    tl.from(
      paragraphSplit.lines,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.06,
      },
      "-=0.8"
    );

    // Animate button container
    tl.from(
      ".about-button-container",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Animate right side image
    tl.from(
      ".animate-right",
      {
        y: 80,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      },
      "-=1.5"
    );
  }, []);

  return (
    <>
      <div className="py-[9vw]">
        <div className="my-container" id="about">
          <div className="flex flex-row gap-[2vw] items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2">
              <p className="text-[#9B9EA2] font-light text-[2vw] uppercase mb-[1.9vw] about-label">
                ABOUT
              </p>
              <h2 className="text-[1.8vw] font-medium text-gray-900 mb-[2vw] leading-tight about-heading">
                Azes can be trusted to deliver residential and commercial
                groundworks projects, concrete substructures and superstructures
                to the highest quality standards, on time and to budget, no
                matter how technically demanding or logistically complicated.
              </h2>
              <p className="text-[1.4vw] pb-[8vw] about-paragraph">
                This modern art gallery and cultural hub, situated on a 2-acre
                plot (87,120 sqft), aim to create an immersive experience by
                seamlessly blending contemporary architecture with curated art
                installations, fostering dynamic cultural interactions.
              </p>
              <div className="about-button-container">
                <Button
                  variant="outline"
                  className="text-[1.2vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white"
                  onClick={() => console.log("More details clicked")}
                >
                  MORE DETAIL
                </Button>
              </div>
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