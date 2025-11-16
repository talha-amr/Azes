import React from 'react'

const About3 = () => {
    const values = [
        {
            id: 1,
            title: "Integrity",
            description: "Acting with honesty, transparency, and ethical behavior in all interactions."
        },
        {
            id: 2,
            title: "Customer-centric:",
            description: "Prioritizing the needs and satisfaction of customers above all else."
        },
        {
            id: 3,
            title: "Innovation",
            description: "Prioritizing the needs and satisfaction of customers above all else."
        },
        {
            id: 4,
            title: "Teamwork",
            description: "Collaborating effectively, respecting diversity, and fostering a supportive work environment."
        },
        {
            id: 5,
            title: "Excellence",
            description: "Striving for the highest quality in products, services, and client relationships."
        },
        {
            id: 6,
            title: "Accountability",
            description: "Taking responsibility for actions, decisions, and outcomes."
        },
        {
            id: 7,
            title: "Respect",
            description: "Valuing individuals, treating everyone with dignity, and promoting inclusivity."
        },
        {
            id: 8,
            title: "Sustainability",
            description: "Committing to environmental responsibility and sustainable practices."
        },
        {
            id: 9,
            title: "Adaptability",
            description: "Being flexible and responsive to change, embracing innovation and growth."
        }
    ];
    return (
        <>
            <div className='my-[6vw]'>
                <div className="my-container">
                    <div className="flex items-start justify-between w-full">
                        <p className='w-[50%] text-[1.5vw]'>CORE VALUES</p>
                        <div className="space-y-8 w-[60%]">
                            <p className='text-[2.5vw] font-medium' >Our Guiding Principles</p>
                            <p className='text-[#0C131B] text-[1vw]'>At Azes, our core values form the bedrock of everything we do. Integrity, innovation, and excellence define our commitment to delivering exceptional service and exceeding expectations. We embrace teamwork, respect diversity, and uphold sustainability, striving to make a positive impact on our community and environment. Accountability and customer-centricity drive us to continually improve and adapt, ensuring we always deliver the highest standard of quality and service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-container">
                <div className="grid grid-cols-3">
                    {values.map((value, index) => {
                        const isNotLastColumn = (index + 1) % 3 !== 0;
                        const isNotLastRow = index < values.length - 3;
                        return (
                            <div
                                key={value.id}
                                className={`p-[3vw] relative ${isNotLastRow ? 'border-b border-[#72767B]' : ''}`}
                                style={{
                                    borderBottomWidth: isNotLastRow ? '0.05vw' : '0'
                                }}
                            >
                                {isNotLastColumn && (
                                    <div
                                        className="absolute right-0 top-[2vw] bottom-[2vw] bg-[#72767B]"
                                        style={{ width: '0.05vw' }}
                                    />
                                )}
                                <h3 className='text-[1.6vw] font-semibold text-[#1a1a1a] mb-[1vw]'>
                                    {value.title}
                                </h3>
                                <p className='text-[1vw] text-[#666] leading-[1.6]'>
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </>
    )
}

export default About3
