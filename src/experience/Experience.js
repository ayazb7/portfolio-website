import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
      dateRange: 'February 2024 - August 2024',
      description: [
        'Designing and developing a mobile application to improve routing for electric vehicle users',
        'Working alongside research fellows to develop a routing algorithm catered for improving journey and charging times for electric vehicles',
        'Developed a mobile application using Flutter for cross-platform use, alongside a Django REST API framework backend to communicate with the routing algorithm',
        'Designed a modern, intuitive UI using Figma following Google Material design',
      ],
      websiteUrl: "https://evsatnav.com/"
    },
    {
      id: 2,
      companyLogo: armLogo,
      jobTitle: 'App Developer Intern',
      companyName: 'ARM Environments',
      dateRange: 'August 2023 - February 2024',
      description: [
        'Lead the development of a fully functioning cross-platform mobile application using Flutter and Google Cloud backend functions',
        'Designed a modern mobile UI using Figma following a CI/CD flow alongside agile development to gauge client requirements and improve designs',
        'Integrated several cloud technologies including Google Firebase and Cloud Functions, to serve as a backend for the application',
        'Collaborated with industry-leading air quality monitor manufacturers to integrate their external devices within the app using REST APIs and network analysis'
      ],
      websiteUrl: "https://www.f-air.org/"
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
        'Released major updates and several minor updates to take the app to the top 5% of the Education category on the Apple App Store and the Google Play Store',
      ],
      websiteUrl: "https://classify.org.uk/"
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="experience"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2 variants={headingVariants}>CAREER</motion.h2>
      <div className="experience-container">
        <div className="experience-list">
          {experiences.map((exp) => (
            <motion.h4
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className={exp.id === selectedExperience.id ? 'active' : ''}
              variants={listItemVariants}
            >
              {exp.companyName}
            </motion.h4>
          ))}
        </div>
        <motion.div layout>
          <ExperienceCard
            key={selectedExperience.id}
            image={selectedExperience.companyLogo}
            jobTitle={selectedExperience.jobTitle}
            companyName={selectedExperience.companyName}
            dateRange={selectedExperience.dateRange}
            description={selectedExperience.description}
            websiteUrl={selectedExperience.websiteUrl}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
