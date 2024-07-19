import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import ProjectCard from './ProjectCard';

import researchProjImage from './images/researchproj.png';
import qwizImage from './images/qwiz.png'; 
import virtualLabImage from './images/virtuallab.png';
import salamHealthImage from './images/salamhealth.png';
import portfolioImage from './images/portfolio.png';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function Projects() {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState(0);

  const slideMarginRight = 20;
  const totalSlidesMarginRight = slideMarginRight * 4;

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth);
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes;
      const slidesArr = Array.from(slidesNode);
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth + slideMarginRight,
        0
      );
      setSlidesWidths(slidesSumWidth);
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener('resize', measureSliderWidth);
    window.addEventListener('resize', measureSlidesWidth);

    return () => {
      window.removeEventListener('resize', measureSliderWidth);
      window.removeEventListener('resize', measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);

  return (
    <div className="projects">
      <motion.h2 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        PROJECTS
      </motion.h2>
      <div ref={sliderRef} className="carousel-container">
        <motion.div
          ref={slidesRef}
          drag="x"
          dragConstraints={{
            left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
            right: 0,
          }}
          className="slides"
        >
          <ProjectCard 
            image={researchProjImage} 
            title="Dementia ML Research Project" 
            url="https://github.com/ayazb7/individual-project" 
          />
          <ProjectCard 
            image={qwizImage} 
            title="Qwiz - AI Revision Tool" 
            url="https://github.com/Cloud-Team-F/Qwiz" 
          />
          <ProjectCard 
            image={portfolioImage} 
            title="Portfolio" 
            url="https://github.com/ayazb7/portfolio-website" 
          />
          <ProjectCard 
            image={virtualLabImage} 
            title="Virtual Lab" 
            url="https://github.com/ayazb7/Virtual-Lab" 
          />
          <ProjectCard 
            image={salamHealthImage} 
            title="Salam Health" 
            url="https://github.com/ayazb7/salam-health-website" 
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
