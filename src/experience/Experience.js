
import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

import sotonLogo from './logos/soton.png';
import armLogo from './logos/arm2.jpeg';
import classifyLogo from './logos/classify.png';

function Experience() {

  const experiences = [
    {
      id: 1,
      companyLogo: sotonLogo,
      jobTitle: 'Mobile Developer Research Intern',
      companyName: 'University of Southampton',
      dateRange: 'February 2024 - Present',
      description: [
        'Designing and developing a mobile application to improve routing for electric vehicle users',
        'Working alongside research fellows to develop a routing algorithm catered for improving journey and charging times for electric vehicles',
        'Developed a mobile application using Flutter for cross-platform use, alongside a Django REST API framework backend to communicate with the routing algorithm',
        'Designed a modern, intuitive UI using Figma following Google Material design',
      ],
      websiteUrl:"https://www.linkedin.com/company/evtonomy/" 
    },
    {
      id: 2,
      companyLogo: armLogo,
      jobTitle: 'App Developer Intern',
      companyName: 'ARM Environments',
      dateRange: 'August 2023 - February 2024',
      description: [
        'Lead the development of a fully functioning cross-platform mobile application using Flutter and Google Cloud backend functions',
        'Designed a modern mobile UI using Figma based on client requirements, alongside an Agile development approach',
        'Integrated several cloud technologies including Google Firebase and Cloud Functions, to serve as a backend for the application',
        'Collaborated with industry-leading air quality monitor manufacturers to integrate their REST APIs within the app'
      ],
      websiteUrl:"https://www.f-air.org/" 
    },
    {
      id: 3,
      companyLogo: classifyLogo,
      jobTitle: 'Software Developer',
      companyName: 'Principal Technologies',
      dateRange: 'October 2022 - October 2023',
      description: [
        'Engineered and designed new features for an intuitive mobile application using Flutter alongside Google Cloud & Firebase to create a popular application compatible on iOS and Android, used by students worldwide',
        'Took charge and collaborated with a group of developers across the world to release vital major updates which have majorly increased the userbase and user retention',
        'Released major updates to take the app to the top 5% of the Education category on the Apple App Store and the Google Play Store',
      ],
      websiteUrl:"https://classify.org.uk/" 
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <div className="experience-container">
        <div className="experience-list">
          {experiences.map((exp) => (
            <h4
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className={exp.id === selectedExperience.id ? 'active' : ''}
            >
              {exp.companyName}
            </h4>
          ))}
        </div>
        <ExperienceCard
          image={selectedExperience.companyLogo}
          jobTitle={selectedExperience.jobTitle}
          companyName={selectedExperience.companyName}
          dateRange={selectedExperience.dateRange}
          description={selectedExperience.description}
          websiteUrl={selectedExperience.websiteUrl}
        />
      </div>
    </div>
  );
}

export default Experience;
