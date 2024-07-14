
import React from 'react';
import './About.css';

import javaLogo from './logos/java.png';
import pythonLogo from './logos/python.png';
import flutterLogo from './logos/flutter.png';
import jsLogo from './logos/javascript.png';
import reactLogo from './logos/react.png';
import swiftLogo from './logos/swift.png';
import nodejsLogo from './logos/nodejs.png';

function About() {
  return (
    <div className="about">
      <img src="/me.png" alt="Profile" className="profile-picture" />
      <h3>hi, I'm</h3>
      <h1>ayaz baig</h1>
      <h3>software developer // computer science student</h3>
      <p>Specializing in Machine Learning, Mobile App Development, and Web Development, I bring a wealth of practical experience and a strong academic background. My passion for technology drives me to excel in developing innovative solutions, demonstrated through my successful projects in mobile application development and research initiatives in Machine Learning.</p>
      <div className="buttons">
        <a href="#contact" className="button">Get In Touch</a>
        <a href="/cv.pdf" className="button button-outline" download>Download CV</a>
      </div>
      <div className="experience-with">
        <h3>EXPERIENCE WITH</h3>
        <div className="logos">
          <img src={javaLogo} alt="Java" />
          <img src={pythonLogo} alt="Python" />
          <img src={flutterLogo} alt="Flutter" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
          <img src={swiftLogo} alt="Swift" />
          <img src={nodejsLogo} alt="Node.js" />
        </div>
      </div>
    </div>
  );
}

export default About;
