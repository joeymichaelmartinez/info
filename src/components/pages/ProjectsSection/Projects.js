import React, { useState, useEffect } from 'react';

import ProjectCards from './projectCard/ProjectCard';
import './Projects.css';

function Projects(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div id="Projects-Container">
      <div id="Projects" className={props.projectStyle.backgroundColor}>
      {props.projectInfo.map((project) => (
        <ProjectCards
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