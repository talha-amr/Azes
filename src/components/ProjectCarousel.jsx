import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button'


export const ProjectCarousel = ({ projects }) => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pl-[2vw]">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex gap-[2vw]" style={{ width: 'max-content' }}>
          {projects.map((project, index) => (
            <div key={index} className="group" style={{ width: '51vw', flexShrink: 0 }}>
              <div className="relative overflow-hidden mb-[2vw] h-[32vw]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[2vw] right-[2vw]">
                  <Button 
                    variant="outline" 
                    className='text-[1.2vw] border-white text-white hover:bg-white/50 ' 
                    onClick={() => project.onDetailClick?.(project)}
                  >
                    VIEW PROJECT
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-[2vw]">
                <div className="flex items-center theme-torquoise justify-center w-[3.5vw] h-[3.5vw] rounded-full border-1 border-[#085859] text-[1.4vw] font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[2vw] font-medium mb-[0.5vw]">
                    {project.title}
                  </h3>
                  <p className="text-[1.3vw] text-gray-500">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single Arrow Button on Right Side */}
      <button
        onClick={scrollRight}
        className="absolute  top-[50%] right-[1vw] transform -translate-y-1/2  flex items-center justify-center w-[4vw] h-[4vw] rounded-full bg-[#085859] text-white transition-colors z-10"
      >
        <ChevronRight className="w-[2vw] h-[2vw] text-white" />
      </button>
    </div>
  );
};

