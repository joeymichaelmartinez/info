"use client";
import React, { useState, useEffect, useRef } from 'react';

import ProjectCards from './projectCard/ProjectCard';
import './Projects.css';
import { projectInfo } from '@/data/projectInfo';

function Projects() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="Projects-Container">
      <div className="Projects">
        {projectInfo.map((project, index) => (
          <ProjectCards
            key={index}
            isDesktop={isDesktop}
            title={project.title}
            fullDescription={project.fullDescription}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;