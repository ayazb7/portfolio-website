import React from 'react';
import './ProjectCard.css';
import { MdArrowOutward } from "react-icons/md";

function ProjectCard({ image, title, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <MdArrowOutward className="arrow" />
      </div>
    </a>
  );
}

export default ProjectCard;