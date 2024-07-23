import React from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import './Navbar.css';

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 }
};

const itemVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

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
      <div className="burger-menu" onClick={cycleOpen}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className="sidebar"
          >
            <motion.div
              className="sidebar-container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                Career
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
