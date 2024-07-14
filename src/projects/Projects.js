import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

import researchProjImage from './images/researchproj.png';
import qwizImage from './images/qwiz.png'; 
import virtualLabImage from './images/virtuallab.png';
import salamHealthImage from './images/salamhealth.png';

function Projects() {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollLeft = current.offsetWidth; 
    }
  }, []);

  const startDragging = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDown(false);
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    const { current } = scrollRef;
    if (current.scrollLeft >= current.scrollWidth - current.offsetWidth) {
      current.scrollLeft = current.offsetWidth;
    } else if (current.scrollLeft <= 0) {
      current.scrollLeft = current.scrollWidth - (2 * current.offsetWidth);
    }
  };

  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div 
        className="carousel-container" 
        ref={scrollRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onMouseMove}
        onScroll={handleScroll}
      >
        <ProjectCard 
          image={salamHealthImage} 
          title="Salam Health" 
          url="https://github.com/ayazb7/salam-health-website" 
        />
        <ProjectCard 
          image={researchProjImage} 
          title="Dementia Research Project" 
          url="https://github.com/ayazb7/salam-health-website" 
        />
        <ProjectCard 
          image={qwizImage} 
          title="Qwiz - AI Revision Tool" 
          url="https://github.com/Cloud-Team-F/Qwiz" 
        />
        <ProjectCard 
          image={virtualLabImage} 
          title="Virtual Lab" 
          url="https://github.com/ayazb7/Virtual-Lab" 
        />
        
      </div>
    </div>
  );
}

export default Projects;
