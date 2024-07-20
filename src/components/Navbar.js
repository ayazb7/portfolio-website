import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={navbarVariants}
    >
      <div className="navbar-logo">
        <Link to="about" smooth={true} duration={500}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="experience" smooth={true} duration={500}>Career</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
