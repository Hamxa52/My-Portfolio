import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Logo and Call-to-Action */}
        <div className="footer-left">
          <h2 className="logo">LogoFolio.</h2>
          <a
            href="images/My Resume.pdf"
            download
            className="btn"
            style={{ marginTop: '20px' }}
          >
            <span className="initial">Download CV</span>
            <span className="new">Download CV</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="footer-center">
          <ul className="footer-links">
            {['Home', 'About', 'Services', 'Skills', 'Portfolio'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="foot">
                  <span className="initial">{item}</span>
                  <span className="new">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Links */}
        <div className="footer-right">
          <ul className="additional-links">
            <li className="links">
              <p>
                <span className="initial">raohamza1608@gmail.com</span>
                <span className="new">raohamza1608@gmail.com</span>
                <a href="https://mail.google.com/">
                  <i className="fa fa-envelope"></i>
                </a>
              </p>
            </li>
            <li className="links">
              <p>
                <span className="initial">mhamzarao@outlook.com</span>
                <span className="new">mhamzarao@outlook.com</span>
                <a href="https://outlook.live.com/">
                  <i className="fa fa-envelope"></i>
                </a>
              </p>
            </li>
            <li className="links">
              <p>
                <span className="initial">0315-8168145</span>
                <span className="new">0315-8168145</span>
                <a href="tel:03158168145">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="https://web.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </p>
            </li>
            <li className="links">
              <a href=" ">
                <span className="initial">Built in Framer</span>
                <span className="new">Built in Framer</span>
              </a>
            </li>
            <li className="links">
              <a href=" ">
                <img
                  src="/images/unnamed.jpg"
                  alt=" "
                />
                <span className="initial">Created by Hamza Rao</span>
                <span className="new">Created by Hamza Rao</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
