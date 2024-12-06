import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false }); // Initialize AOS
    }, []);

    return (
        <div
            className="flex flex-col justify-center items-center text-center px-5 py-24 max-w-screen-lg mx-auto"
            data-aos="fade-right"
        >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 leading-snug">
                I specialize in building responsive, user-friendly web applications with modern tools
                like React and CSS.
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl mt-2 leading-snug text-gray-400">
                Hire me for my attention to detail, innovative problem-solving, and commitment to delivering
                exceptional user experiences.
            </h3>
        </div>
    );
};

export default Introduction;
