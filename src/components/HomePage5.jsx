import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const HomePage5 = () => {
  const newsItems = [
    { title: "The Guardian Arts", year: "2024", link: "#" },
    { title: "Architectural Review", year: "2020", link: "#" },
    { title: "Art & Culture Today", year: "2014", link: "#" },
  ];

  useGSAP(() => {
    // News Section Timeline
    const newsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".news-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // First animate the heading
    newsTl.from(".news-heading", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // Then animate each news item with stagger
    newsTl.from(
      ".news-item",
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.5" // Start slightly before heading finishes
    );

    // CTA Section Timeline
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-section",
        start: "43% 85%",
        toggleActions: "play none none none",
      },
    });

    // Animate text first
    ctaTl.from(".cta-text", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    // Then animate button
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

  return (
    <div className="min-h-screen">
      {/* News Section */}
      <div className="news-section bg-[#E6EEEE]">
        <div className="my-container">
          <div className="flex w-full min-h-[70vh] justify-between items-center">
            <h2 className="news-heading font-regular text-[2.5vw] w-[40%]">
              AZES NEWS
            </h2>
            <div className="flex-1">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="news-item flex justify-between items-center border-b"
                  style={{ paddingTop: "2vw", paddingBottom: "2vw" }}
                >
                  {/* Flip effect link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden block font-normal text-black"
                    style={{
                      fontSize: "2vw",
                      textDecoration: "none",
                      lineHeight: "1.2",
                    }}
                  >
                    <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                      {item.title}
                    </p>
                    <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                      {item.title}
                    </p>
                  </a>

                  <span className="text-black font-regular text-[1.3vw]">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
    </div>
  );
};

export default HomePage5;