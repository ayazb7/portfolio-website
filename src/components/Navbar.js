import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="about" smooth={true} duration={500}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="experience" smooth={true} duration={500}>Career</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;