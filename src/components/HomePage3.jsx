import React from "react";
import CountUp from "react-countup";

const HomePage3 = () => {
  return (
    <div className="min-h-dvh w-full theme-blue">
      <div className="my-container">
        <div className="flex w-full h-full justify-between items-center py-[7vw]">
          {/* Left Side */}
          <div className="flex flex-col items-start gap-[3vw] w-[45%]">
            <img src="/images/logo-golden.png" alt="Azes Logo" className="w-[30vw]" />

            <div className="pt-[6vw]">
              <h3 className="text-gradient font-bold mb-[1vw] text-[2.2vw]">
                PROJECTS NUMBERS
              </h3>
              <p className="text-gradient font-regular text-[1.2vw] w-[70%]">
                This modern art gallery and cultural hub, situated on a 2-acre plot (87,120 sqft),
                aims to create an immersive experience by blending architecture with curated art installations.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex flex-col gap-[4vw] w-[25%]">
            {/* 50+ Projects */}
            <div>
              <h2 className="text-gradient font-medium text-[6vw] leading-tight">
                <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="text-gradient font-medium mt-[0.2vw] text-[1.7vw]">
                PROJECTS
              </p>
            </div>

            {/* 500M Total Project Value */}
            <div>
              <h2 className="text-gradient font-medium text-[6vw] leading-tight">
                <CountUp end={500} duration={3} suffix="M" enableScrollSpy scrollSpyOnce />
              </h2>
              <p className="text-gradient font-medium mt-[0.2vw] text-[1.7vw] leading-tight">
                TOTAL PROJECT VALUE
              </p>
            </div>

            {/* 24+ Clients */}
            <div>
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
