import React from 'react'
import Button from './Button';
const HomePage5 = () => {
    const newsItems = [
        { title: "The Guardian Arts", year: "2024" },
        { title: "Architectural Review", year: "2020" },
        { title: "Art & Culture Today", year: "2014" }
    ];

    return (
        <div className="min-h-screen">
            {/* News Section */}

            <div className="bg-[#E6EEEE] " >
                <div className="my-container">
                    <div className="flex w-full  min-h-[70vh] justify-between items-center ">
                        <h2 className="font-regular text-[2.5vw] w-[40%]" >
                            AZES NEWS
                        </h2>
                        <div className="flex-1 ">
                            {newsItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b"
                                    style={{ paddingTop: '2vw', paddingBottom: '2vw' }}
                                >
                                    <h3 className="font-normal" style={{ fontSize: '2vw' }}>
                                        {item.title}
                                    </h3>
                                    <span className="text-black font-regular text-[1.3vw]" >
                                        {item.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* CTA Section */}
            <div className="h-[80vh] flex flex-col justify-center items-center">
                <div className="flex flex-col items-center text-center">
                    <p className="font-regular mb-[3vw] text-[4.7vw] leading-none ">
                        Inspiring Possibilities,<br />
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
}

export default HomePage5
