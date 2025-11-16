import React from 'react';

const CEOMessage = () => {
    return (
        <div className="w-full py-[6vw]">

            {/* FLEX ROW */}
            <div className="flex flex-col lg:flex-row  items-end lg:items-end">

                {/* LEFT SIDE */}
                <div className="lg:w-[45%] w-full bg-[#bcd3d3] min-h-[35vw] pl-[6vw] p-[3vw] flex flex-col">
                    <img
                        src="/images/logo-1.png"
                        alt="Azes Logo"
                        className="w-[4vw] h-auto mb-[2.5vw]"
                    />

                    <h2 className="text-[2.4vw] text-black mb-[1.8vw] font-medium">
                        CEO Message
                    </h2>

                    <p className="text-[#0C131B] leading-[1.7] text-[1vw] font-light max-w-[80%]">
                        Greetings from Azes. As the CEO, I am privileged to lead a team
                        of passionate individuals dedicated to redefining interior design.
                        At Azes, our commitment goes beyond creating beautiful spaces; it
                        extends to enriching lives through creativity, innovation, and
                        impeccable craftsmanship. We believe in forging lasting connections
                        with our clients, understanding their unique visions, and translating
                        them into reality. Join us on this journey of transformation, where
                        every project becomes an opportunity to inspire and create enduring
                        legacies together.
                    </p>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="lg:w-[55%] w-full relative h-[65vw]  overflow-hidden mt-[4vw] lg:mt-0">
                    <img
                        src="/images/About1.png"
                        alt="CEO Office Interior"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default CEOMessage;
