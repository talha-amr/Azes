import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectCarousel } from './ProjectCarousel';
import Button from './Button';

const HomePage4 = () => {
    const projectsData = [
        {
            image: "/images/home-feature-1.png",
            title: "3 Canal House Bedroom design",
            subtitle: "Work start date 2022 / End date 2022",
            onDetailClick: (project) => console.log('More details clicked', project)
        },
        {
            image: "/images/home-feature-2.png",
            title: "Residential area / 5 canal house re-design",
            subtitle: "Work start date 2022 / End date 2022",
            onDetailClick: (project) => console.log('More details clicked', project)
        },
        {
            image: "/images/home-feature-1.png",
            title: "Modern Villa Interior",
            subtitle: "Work start date 2023 / End date 2023",
            onDetailClick: (project) => console.log('More details clicked', project)
        },
        {
            image: "/images/home-feature-2.png",
            title: "Commercial Space Design",
            subtitle: "Work start date 2023 / End date 2024",
            onDetailClick: (project) => console.log('More details clicked', project)
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="my-container">
                <div className="my-[6vw]">
                    <h1 className="text-[8vw] font-light mb-[4vw] tracking-wide">Featured Project</h1>
                    <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto items-start md:items-center">
                        <Button variant="outline" className="text-[1.2vw] border-[#085859] text-[#085859] hover:bg-[#085859] hover:text-white ">
                            VIEW ALL PROJECTS
                        </Button>
                        <div className="max-w-[45vw] w-[50%]">
                            <h2 className="text-[2vw] font-medium mb-[1.5vw]">
                                Azes can be trusted to deliver residential and commercial groundworks projects,
                            </h2>
                            <p className="text-[1.3vw]">
                                This modern art gallery and cultural hub, situated on a 2-acre plot (87,120 sqft),
                                aim to create an immersive experience by seamlessly blending contemporary architecture
                                with curated art installations, fostering dynamic cultural interactions.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Projects Grid */}
            </div>
            <ProjectCarousel projects={projectsData} />
            <div className="pb-[6vw]"></div>
        </div>
    );
};

export default HomePage4;