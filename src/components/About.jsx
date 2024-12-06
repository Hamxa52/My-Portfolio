import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false }); // Initialize AOS
    }, []);

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div
            className="flex align-center flex-col items-center content-center w-auto"
            data-aos="fade-up" // AOS animation for the main section
        >
            <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
            <div
                className="flex flex-col p-6 bg-[#111] text-white rounded-lg border border-[#333] 2xl:mx-24 sm:mx-4 w-[90%]"
                data-aos="zoom-in" // AOS animation for the card
            >
                <h3 className="text-xl font-semibold mb-4 ml-[20px] text-center">
                    Frontend Developer & UI/UX Designer
                </h3>
                <ul className="space-y-4 ml-[20px]">
                    <li
                        className="text-[#b3b3b3] text-lg list-disc pl-[20px] leading-6 mb-2"
                        data-aos="fade-right" // AOS animation for each list item
                    >
                        Hello! I'm Rao Muhammad Hamza, a dedicated computer science student with a passion for technology and a keen interest in frontend web development and graphic design.
                    </li>
                    <li
                        className="text-[#b3b3b3] text-lg list-disc pl-[20px] leading-6 mb-2"
                        data-aos="fade-left" // AOS animation for each list item
                    >
                        Feel free to get in touch with me through email or phone. I am excited about the opportunities that lie ahead and look forward to making a meaningful impact in the field of computer science.
                    </li>
                    {/* Read More / Show Less Button */}
                    <div className="flex justify-center mt-4">
                    <button
                        onClick={toggleDetails}
                        className="read-more"
                    >
                        <span className="initial">
                            {showDetails ? "Read Less" : "Read More"}
                        </span>
                        <span className="new">
                            {showDetails ? "Read Less" : "Read More"}
                        </span>
                    </button>
                    </div>
                    {/* Additional Content */}
                    <li
                        className={`text-[#b3b3b3] text-lg list-disc pl-[20px] leading-6 mt-4 transition-all duration-500 ease-in-out ${
                            showDetails
                                ? "max-h-[500px] opacity-100 transform scale-100"
                                : "max-h-0 opacity-0 overflow-hidden transform scale-95"
                        }`}
                    >
                        Currently, I am pursuing my degree at NFC Institute of Engineering and Technology, where I am honing my skills in various programming languages, including C, Python, and Object-Oriented Programming (OOP).
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
