
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Contact</p>
      <p>Email: <a href="mailto:ayazbaig@hotmail.co.uk">ayazbaig@hotmail.co.uk</a></p>
      <div className="social-icons">
        <a href="link_to_social_media"><img src="path_to_icon" alt="Social Icon" /></a>
        <a href="link_to_social_media"><img src="path_to_icon" alt="Social Icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
