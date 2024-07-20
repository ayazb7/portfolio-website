import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './About.css';

import javaLogo from './logos/java.png';
import pythonLogo from './logos/python.png';
import flutterLogo from './logos/flutter.png';
import jsLogo from './logos/javascript.png';
import reactLogo from './logos/react.png';
import swiftLogo from './logos/swift.png';
import nodejsLogo from './logos/nodejs.png';
import figmaLogo from './logos/figma.png';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const logoVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

function About() {
  return (
    <motion.div 
      className="about"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={variants}
    >
      <motion.img 
        src="/me.png" 
        alt="Profile" 
        className="profile-picture"
        variants={variants}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      <motion.h3 
        variants={variants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        hi, I'm
      </motion.h3>
      <motion.h1 
        variants={variants}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ayaz baig
      </motion.h1>
      <motion.h3 
        variants={variants}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        software developer // computer science student
      </motion.h3>
      <motion.p 
        variants={variants}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Fourth year Computer Science student specializing in Machine Learning, Mobile App Development, and Web Development. With a strong academic background and practical experience, I'm dedicated to building smart and efficient solutions. Explore my work and let's connect!
      </motion.p>
      <motion.div 
        className="buttons"
        variants={variants}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="contact" smooth={true} duration={500} className="button">Get In Touch</Link>
        <a href="/cv.pdf" className="button button-outline" download>Download CV</a>
      </motion.div>
      <motion.div 
        className="experience-with"
        variants={variants}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h3>EXPERIENCE WITH</h3>
        <motion.div 
          className="logos"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          transition={{ staggerChildren: 0.2, delayChildren: 0.8 }}
        >
          <motion.img src={javaLogo} alt="Java" variants={logoVariants} />
          <motion.img src={pythonLogo} alt="Python" variants={logoVariants} />
          <motion.img src={flutterLogo} alt="Flutter" variants={logoVariants} />
          <motion.img src={jsLogo} alt="JavaScript" variants={logoVariants} />
          <motion.img src={reactLogo} alt="React" variants={logoVariants} />
          <motion.img src={swiftLogo} alt="Swift" variants={logoVariants} />
          <motion.img src={nodejsLogo} alt="Node.js" variants={logoVariants} />
          <motion.img src={figmaLogo} alt="Figma" variants={logoVariants} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
