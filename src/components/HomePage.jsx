import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className='my-container pt-[9.5vw]'>
                <div className="space-y-[1vw] ">
                    <h1 className='text-[4vw] font-bold tracking-tight '>Explore the Digital Horizon</h1>
                    <p className='font-regular text-[2vw] w-[30%]'>Elevate Your Experience with Our Architectural Vision</p>
                </div>
            </div>
            <img src="/images/home-1.png" alt="" className='w-full pt-[3.5vw]' />
            <div className=" w-full overflow-hidden  h-[13vw]  flex items-center marquee-wrapper  ">
                <div className="flex whitespace-nowrap marquee-container">
                    {/* First set */}
                    <span className="flex items-center text-[3vw] theme-torquoise">
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Interior Design
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Visual Communication
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Architecture


                    </span>

                    {/* Second set for seamless loop */}

                    <span className="flex items-center text-[3vw] theme-torquoise">
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Interior Design
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Visual Communication
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Architecture
                    </span>
                    <span className="flex items-center text-[3vw] theme-torquoise">
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Interior Design
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Visual Communication
                        <span className="font-black text-[0.8vw] mx-[4vw] leading-none relative top-0.5">
                            ■
                        </span>
                        Architecture
                    </span>

                </div>
            </div>
        </>
    )
}

export default HomePage
