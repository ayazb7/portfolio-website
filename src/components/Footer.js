import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Ayaz Baig | Portfolio</h2>
        <p>Full Stack Software Developer with years of hands-on experience in designing and implementing robust, scalable, and innovative solutions.</p>
        <div className="email">
          <FaEnvelope className="icon" />
          <a href="mailto:ayazbaig@hotmail.co.uk" className="email-link">ayazbaig@hotmail.co.uk</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/ayazb7" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ayazbaig7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
