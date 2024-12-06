import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicesSection.css";

const services = [
  {
    step: "01",
    icon: "fa-code",
    title: "Web Design",
    description: [
      "Web creative design refers to the practice of crafting visually compelling and user-centric websites, integrating aesthetics, functionality, and technical performance.",
      "It involves a mix of artistic creativity, design theory, and technical know-how, to create websites that are both visually appealing and easy to navigate.",
    ],
    detail: "Web creative design is crucial for establishing a brand’s online presence, improving user experience, and driving conversions.",
  },
  {
    step: "02",
    icon: "fa-crop",
    title: "UI/UX Design",
    description: [
      "UI (User Interface) and UX (User Experience) Design are integral components of creating digital products that are both visually appealing and highly functional.",
      "While they are closely related, they focus on different aspects of the user’s interaction with a product.",
    ],
    detail: "Together, UI and UX design play a pivotal role in shaping how users perceive and engage with websites, apps, and other digital platforms.",
  },
  {
    step: "03",
    icon: "fab fa-app-store",
    secondaryIcon: "fab fa-google-play",
    title: "App Design",
    description: [
      "App design is the process of creating visually appealing and user-friendly mobile applications.",
      "It involves both User Interface (UI) and User Experience (UX) design principles to build apps that are not only beautiful but also intuitive and easy to navigate.",
    ],
    detail: "The ultimate goal of app design is to deliver a seamless, enjoyable experience that fulfills the needs of its users while supporting the business objectives of the app creators.",
  },
  {
    step: "04",
    icon: "fas fa-file-powerpoint",
    title: "PPT Making",
    description: [
      "I can create professional and engaging presentations using MS PowerPoint, leveraging my design skills and attention to detail.",
      "Additionally, I can utilize AI-powered presentation tools to enhance creativity, streamline the process, and generate visually appealing slides efficiently.",
    ],
    detail: "Whether manual or AI-assisted, I ensure the presentations effectively communicate the intended message.",
  },
];

const ServicesSection = () => {
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetail = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // Initialize AOS for animation
  }, []);

  return (
    <div className="process-div" id="services">
      <h2 data-aos="fade-right" className="services-heading">
        My Services
      </h2>
      <p data-aos="fade-up" className="subtitle">
        Achieving Distinctiveness with Confidence.
      </p>
      <div className="process-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="process-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Animation delay based on index
          >
            <span className="step-number">{service.step}</span>
            <i className={`fa ${service.icon}`}></i>
            {service.secondaryIcon && <i className={`fa ${service.secondaryIcon}`}></i>}
            <h3>{service.title}</h3>
            <ul>
              {service.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
              <button
                className={`learn-more-${index}`}
                onClick={() => toggleDetail(index)}
              >
                <span className="initial">
                  {visibleDetails[index] ? "Learn Less" : "Learn More"}
                </span>
                <span className="new">
                  {visibleDetails[index] ? "Learn Less" : "Learn More"}
                </span>
              </button>
              {visibleDetails[index] && <li className="service-detail">{service.detail}</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
