import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ProjectCarousel } from "./ProjectCarousel";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
    {
      image: "/images/home-feature-2.png",
      title: "Commercial Space Design",
      subtitle: "Work start date 2023 / End date 2024",
      onDetailClick: (project) => console.log("More details clicked", project),
    },
    {
      image: "/images/home-feature-2.png",
      title: "Commercial Space Design",
      subtitle: "Work start date 2023 / End date 2024",
      onDetailClick: (project) => console.log("More details clicked", project),
    }
  ];

  // --- GSAP Animation with Timeline + SplitText ---
  useGSAP(() => {
    // Split text
    const headingSplit = new SplitText(".heading-text", { type: "lines" });
    const subheadingSplit = new SplitText(".subheading-text", { type: "lines" });
    const paragraphSplit = new SplitText(".paragraph-text", { type: "lines" });

    // Main timeline controlled by ScrollTrigger
 const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#featured-section",
    start: "30% 85%",
    toggleActions: "play none none none",
    markers: true,
  }
});

// Heading – very quick
tl.from(headingSplit.lines, {
  y: 40,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
  stagger: 0.08
})

// Button – almost instant after heading
.from(".animate-button", {
  y: 30,
  opacity: 0,
  duration: 0.35,
  ease: "power3.out",
}, "-=0.25")

// Subheading – fast and smooth
.from(subheadingSplit.lines, {
  y: 30,
  opacity: 0,
  duration: 0.45,
  ease: "power3.out",
  stagger: 0.07
}, "-=0.15")

// Paragraph – quick, clean stagger
.from(paragraphSplit.lines, {
  y: 25,
  opacity: 0,
  duration: 0.45,
  ease: "power3.out",
  stagger: 0.04
}, "-=0.25");

    // Carousel animation (separate but same scroll trigger)
    gsap.from(".animate-carousel", {
      y: 60,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#carousel",
        start: "50% 85%",
        toggleActions: "play none none none",
        markers: true
      }
    });

  }, []);

  return (
    <div className="min-h-screen" id="featured-section">
      {/* Header Section */}
      <div className="my-container">
        <div className="mt-[16vw] mb-[8vw]">
          <h1 className="text-[8vw] font-light mb-[4.9vw] tracking-wide heading-text">
            Featured Project
          </h1>
          <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto items-start md:items-center">
            <div className="animate-button">
              <Button
                variant="outline"
                className="text-[1.2vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white "
              >
                VIEW ALL PROJECTS
              </Button>
            </div>
            <div className="max-w-[45vw] w-[50%]">
              <h2 className="text-[2vw] font-medium mb-[1.5vw] subheading-text">
                Azes can be trusted to deliver residential and commercial
                groundworks projects,
              </h2>
              <p className="text-[1.3vw] paragraph-text">
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
      <div className="animate-carousel" id="carousel">
        <ProjectCarousel projects={projectsData} />
      </div>

      <div className="pb-[6vw]"></div>
    </div>
  );
};

export default HomePage4;
