import React from 'react'
import Button from './Button'
const HomePage2 = () => {
    return (
        <>
            <div className='py-[9vw]'>
                <div className="my-container ">
                    <div className="flex flex-row gap-[2vw] items-center justify-between ">
                        {/* Left Content - 50% */}
                        <div className="w-1/2">
                            <p className="text-gray-400 text-[2vw] uppercase tracking-wider mb-[1.9vw]">ABOUT</p>

                            <h2 className="text-[1.8vw]  font-medium text-gray-900 mb-[2vw] leading-tight">
                                Azes can be trusted to deliver residential and commercial groundworks projects, concrete substructures and superstructures to the highest quality standards, on time and to budget, no matter how technically demanding or logistically complicated.
                            </h2>

                            <p className="text-[1.4vw] pb-[8vw]">
                                This modern art gallery and cultural hub, situated on a 2-acre plot (87,120 sqft),
                                aim to create an immersive experience by seamlessly blending contemporary architecture
                                with curated art installations, fostering dynamic cultural interactions.
                            </p>

                            <Button variant="outline" className='text-[1.2vw]' onClick={() => console.log('More details clicked')}>
                                MORE DETAIL
                            </Button>
                        </div>

                        {/* Right Content - 50% */}
                        {/* Right Content - 50% */}
                        <div className="w-[40%] relative ">
                        <div className="relative">
                            <img
                                src="/images/Home-2.png"
                                alt="Team collaboration"
                                className="w-full h-auto  "
                            />
                            {/* Since 2008 Badge - Top Right */}
                            <div className="absolute top-[11%] right-[10%] ">
                                <p className="text-[1.4vw] font-regular text-black">Since 2008</p>
                            </div>

                            {/* Logo Overlay - Bottom Right */}
                            <div className="absolute -bottom-0.5 right-0 w-[16vw]">
                                <img
                                    src="/images/logo-overlay.png"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
        

                    </div>
                </div>
            </div>
        </div >
    </>
  )
}

export default HomePage2
