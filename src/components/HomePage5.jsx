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
    gsap.from(".news-section", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".news-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".cta-section", {
      opacity: 0,
      scale: 0.9,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* News Section */}
      <div className="news-section bg-[#E6EEEE]">
        <div className="my-container">
          <div className="flex w-full min-h-[70vh] justify-between items-center">
            <h2 className="font-regular text-[2.5vw] w-[40%]">AZES NEWS</h2>
            <div className="flex-1">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b"
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
          <p className="font-regular mb-[3vw] text-[4.7vw] leading-none">
            Inspiring Possibilities,
            <br />
            Defining Spaces.
          </p>
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
  );
};

export default HomePage5;
