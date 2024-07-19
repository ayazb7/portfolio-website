import React, { useState } from 'react';
import './ProjectCard.css';
import { MdArrowOutward } from "react-icons/md";

function ProjectCard({ image, title, url }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="project-card" 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDragStart={handleDragStart}
    >
      <img src={image} alt={title} className="project-image" onDragStart={handleDragStart} />
      <div className="project-info">
        <h3>{title}</h3>
        <MdArrowOutward className="arrow" />
      </div>
    </div>
  );
}

export default ProjectCard;
