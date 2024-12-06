import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // Initialize AOS
  }, []);

  const [modalImage, setModalImage] = useState(null);

  const works = [
    {
      title: "Interactive Quiz Application",
      description: "This website is for tech-based quizzes fetching data from APIs.",
      img: `${process.env.PUBLIC_URL}/images/image-1.png`,
      codeLink: "https://github.com/Hamxa52/Multiple-choice.github.io",
    },
    {
      title: "Portfolio Website",
      description: "This website showcases my skills, education, and ongoing projects.",
      img: `${process.env.PUBLIC_URL}/images/image-2.png`,
      codeLink: "https://github.com/Hamxa52/Portfolio.github.io",
    },
    {
      title: "Weather Application on React",
      description: "This weather page shows current weather status using an API.",
      img: `${process.env.PUBLIC_URL}/images/image-3.png`,
      codeLink: "https://github.com/Hamxa52/weather-app.github.io",
    },
  ];
  

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <section className="py-10 bg-black-100 text-white">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-12 text-white"
          data-aos="fade-down"
        >
          My Work
        </h2>
        <div className="flex flex-wrap justify-center gap-8 work">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative bg-black-800 w-80 rounded-lg overflow-hidden shadow-lg border border-[#333] transition-transform transform hover:-translate-y-3 hover:bg-gradient-to-b hover:from-black hover:via-black hover:to-orange-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Add delay for each item
            >
              <div className="relative">
                <img
                  src={work.img}
                  alt={`Preview of ${work.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(work.img)}
                />
                <h2 className="absolute top-2 left-2 text-orange-500 text-xl font-semibold bg-black bg-opacity-50 px-2 py-1 rounded-md">
                  {`Work ${index + 1}.`}
                </h2>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-400">{work.description}</p>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 text-white border border-orange-500 rounded-lg transition-all hover:bg-orange-500"
                >
                  Download Code
                  <i className="ml-2 fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Work Preview"
            className="max-w-4xl max-h-[80%] rounded-lg"
            data-aos="zoom-in"
          />
          <button
            className="absolute top-4 right-4 text-3xl text-white hover:text-orange-500"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
