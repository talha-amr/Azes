import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectCarousel } from "./ProjectCarousel";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const HomePage4 = () => {
  const projectsData = [
    {
      image: "/images/home-feature-1.png",
      title: "3 Canal House Bedroom design",
      subtitle: "Work start date 2022 / End date 2022",
      onDetailClick: (project) => console.log("More details clicked", project),
    },
    {
      image: "/images/home-feature-1.png",
      title: "Modern Villa Interior",
      subtitle: "Work start date 2023 / End date 2023",
      onDetailClick: (project) => console.log("More details clicked", project),
    },
    {
      image: "/images/home-feature-2.png",
      title: "Commercial Space Design",
      subtitle: "Work start date 2023 / End date 2024",
      onDetailClick: (project) => console.log("More details clicked", project),
    },
  ];

  // --- GSAP Animation - Applied to parent container ---
  useGSAP(() => {
    gsap.from(".animate-section", {
      y: 60,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#featured-section",
        start: "20% 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="min-h-screen" id="featured-section">
      {/* Header Section - Single animated container */}
      <div className="my-container">
        <div className="my-[6vw] animate-section">
          <h1 className="text-[8vw] font-light mb-[4vw] tracking-wide">
            Featured Project
          </h1>
          <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto items-start md:items-center">
            <Button
              variant="outline"
              className="text-[1.2vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white"
            >
              VIEW ALL PROJECTS
            </Button>
            <div className="max-w-[45vw] w-[50%]">
              <h2 className="text-[2vw] font-medium mb-[1.5vw]">
                Azes can be trusted to deliver residential and commercial
                groundworks projects,
              </h2>
              <p className="text-[1.3vw]">
                This modern art gallery and cultural hub, situated on a 2-acre
                plot (87,120 sqft), aim to create an immersive experience by
                seamlessly blending contemporary architecture with curated art
                installations, fostering dynamic cultural interactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectCarousel projects={projectsData} />
      <div className="pb-[6vw]"></div>
    </div>
  );
};

export default HomePage4;