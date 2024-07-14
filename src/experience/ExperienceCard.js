import React from 'react';
import './ExperienceCard.css';
import { MdArrowOutward } from 'react-icons/md';

function ExperienceCard({ image, jobTitle, companyName, dateRange, description, websiteUrl }) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <img src={image} alt={`${companyName} logo`} className="company-logo" />
        <div className="experience-card-header-content">
          <h3>{jobTitle}</h3>
          <p className="experience-card-header-date">{dateRange}</p>
        </div>
      </div>
      <div className="experience-card-body">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="experience-card-footer">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-website-button">
          Visit Website <MdArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
