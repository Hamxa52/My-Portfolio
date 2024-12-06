import React, { useState,useEffect } from "react";
import MouseDotEffect from "./MouseDotEffect";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Typing effect for "Frontend Developer"
  useEffect(() => {
    const element = document.querySelector(".heading-1");
    const text = "Frontend Developer";
    let index = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting && index <= text.length) {
        element.textContent = text.substring(0, index);
        index++;
      } else if (isDeleting && index >= 0) {
        element.textContent = text.substring(0, index);
        index--;
      }

      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause after completing
        return;
      } else if (index === 0) {
        isDeleting = false;
      }

      setTimeout(typeEffect, isDeleting ? 150 : 150); // Typing and deleting speed
    };

    typeEffect();
  }, []);

  return (
    <div>
      <MouseDotEffect />
      <div className="gradient-container">
      <nav>
      <div className="sidemenu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa fa-bars" href=" "></i>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <i className="fa fa-times" onClick={() => setMenuOpen(!menuOpen)}></i>
        </li>
        <li className="home">
          <NavLink to="Header">
          <span className="initial">Home</span>
          <span className="new">Home</span>
          </NavLink>
        </li>
        <li className="home">
          <NavLink to="About">
          <span className="initial">About</span>
          <span className="new">About</span>
          </NavLink>
        </li>
        <li className="home">
          <NavLink to="Services">
          <span className="initial">Services</span>
          <span className="new">Services</span>
          </NavLink>
        </li>
        <li className="home">
          <NavLink to="/SkillSection" >
          <span className="initial">Skills</span>
          <span className="new">Skills</span>
          </NavLink>
        </li>
        <li className="home">
          <NavLink to="/PortfolioSection">
          <span className="initial">Portfolio</span>
          <span className="new">Portfolio</span>
          </NavLink>
        </li>
        <li className="home">
          <NavLink to="/Footer">
          <span className="initial">Contact</span>
          <span className="new">Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
        <div className="intro">
          <h1>Hi, It's Hamza</h1>
          <h3 className="heading-3">
            And I'm a <span className="heading-1"> Frontend Developer</span>
          </h3>
          <div className="buttons">
            <a href="/My Resume.pdf" className="btn">
              Download CV
            </a>
          </div>
          <div className="side-icon flex  mt-4">
            <a href="https://www.facebook.com/m.hamza.rao1608">
              <i className="fab fa-facebook flex-wrap"></i>
            </a>
            <a href="https://www.instagram.com/m.hamza.rao1608/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/rao-hamza-920a04246/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Hamxa52">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
