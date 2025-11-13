import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Button from './Button';

export const ProjectCarousel = ({ projects }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
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
        <div className="flex gap-[2vw] pl-[2vw] pr-[2vw]" style={{ width: 'max-content' }}>
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

      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className={`absolute top-[50%] left-[1vw] transform -translate-y-1/2 flex items-center justify-center w-[4vw] h-[4vw] rounded-full bg-[#085859] text-white transition-all duration-200 ease-in-out z-10 ${
          showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronLeft className="w-[2vw] h-[2vw] text-white" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className={`absolute top-[50%] right-[1vw] transform -translate-y-1/2 flex items-center justify-center w-[4vw] h-[4vw] rounded-full bg-[#085859] text-white transition-all duration-200 ease-in-out z-10 ${
          showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronRight className="w-[2vw] h-[2vw] text-white" />
      </button>
    </div>
  );
};