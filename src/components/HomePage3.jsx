import React from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage3 = () => {
  useGSAP(() => {
    // Correct SplitText usage
    const headingSplit = new SplitText(".stats-heading", {
      type: "lines, words",
      linesClass: "split-line"
    });

    const paragraphSplit = new SplitText(".stats-paragraph", {
      type: "lines, words",
      linesClass: "split-line"
    });

    // Allow GSAP to handle layout naturally
    gsap.set(".split-line", { overflow: "hidden" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".theme-blue",
        start: "20% 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate logo
    tl.from(".stats-logo", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate heading lines
    tl.from(
      headingSplit.lines,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      },
      "-=0.8"
    );

    // Animate paragraph lines
    tl.from(
      paragraphSplit.lines,
      {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
      },
      "-=0.7"
    );

    // Animate stats items
    tl.from(
      ".stat-item",
      {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.6"
    );
  }, []);

  return (
    <div className="min-h-dvh w-full theme-blue">
      <div className="my-container">
        <div className="flex w-full h-full justify-between items-center py-[7vw]">
          {/* Left Side */}
          <div className="flex flex-col items-start gap-[3vw] w-[45%]">
            <img
              src="/images/logo-golden.png"
              alt="Azes Logo"
              className="w-[30vw] stats-logo"
            />
            <div className="pt-[6vw] max-w-[70%]">
              <h3 className="text-gradient font-bold mb-[1vw] text-[2.2vw] stats-heading leading-tight">
                PROJECTS NUMBERS
              </h3>
              <p className="text-gradient font-regular text-[1.2vw] stats-paragraph leading-normal">
                This modern art gallery and cultural hub, situated on a 2-acre plot (87,120 sqft),
                aims to create an immersive experience by blending architecture with curated art installations.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex flex-col gap-[4vw] w-[25%]">
            <div className="stat-item">
              <h2 className="text-gradient font-medium text-[6vw] leading-tight">
                <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="text-gradient font-medium mt-[0.2vw] text-[1.7vw]">
                PROJECTS
              </p>
            </div>

            <div className="stat-item">
              <h2 className="text-gradient font-medium text-[6vw] leading-tight">
                <CountUp end={500} duration={3} suffix="M" enableScrollSpy scrollSpyOnce />
              </h2>
              <p className="text-gradient font-medium mt-[0.2vw] text-[1.7vw] leading-tight">
                TOTAL PROJECT VALUE
              </p>
            </div>

            <div className="stat-item">
              <h2 className="text-gradient font-medium text-[6vw]">
                <CountUp end={24} duration={3} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="text-gradient font-medium mt-[0.2vw] text-[1.7vw]">
                CLIENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;