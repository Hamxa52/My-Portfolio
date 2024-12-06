import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillSection.css";

const SkillSection = () => {
  const skills = useMemo(
    () => [
      { name: "HTML - 5", percentage: 70 },
      { name: "CSS - 3", percentage: 50 },
      { name: "Tailwind", percentage: 40 },
      { name: "JavaScript", percentage: 25 },
      { name: "React", percentage: 10},
      { name: "MongoDB", percentage: 25},
    ],
    []
  );

  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // Initialize AOS for animation
    skills.forEach((skill, index) => {
      let currentPercent = 0;
      const interval = setInterval(() => {
        if (currentPercent <= skill.percentage) {
          setAnimatedPercentages((prev) => {
            const newPercentages = [...prev];
            newPercentages[index] = currentPercent;
            return newPercentages;
          });
          currentPercent++;
        } else {
          clearInterval(interval);
        }
      }, 15);
    });
  }, [skills]);

  return (
    <section className="skill-section" data-aos="fade-up">
      <h2 className="skill-heading" data-aos="fade-up">
        My Skills
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill"
            data-aos="flip-left"
            data-aos-delay={`${index * 100}`} // Staggering animation for each skill
          >
            <div
              className="progress-bar"
              style={{
                background: `conic-gradient(#FF520E ${animatedPercentages[index] * 3.6}deg, #333 0deg)`,
              }}
            >
              <div className="inner-content">
                <span className="percentage">{animatedPercentages[index]}%</span>
              </div>
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
