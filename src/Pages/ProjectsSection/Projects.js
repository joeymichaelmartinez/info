import React, { useState, useEffect } from 'react';

import ProjectCards from './ProjectCard';
import '../../style/Projects.css';

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
      {Object.keys(props.projectInfo).map((keyName, i) => (
        <ProjectCards
          isDesktop={isDesktop}
          title={props.projectInfo[keyName].title} 
          fullDescription={props.projectInfo[keyName].fullDescription} 
          description={props.projectInfo[keyName].description} 
          image={props.projectInfo[keyName].image}
          link={props.projectInfo[keyName].link}
        />
      ))}
      </div>
    </div>
  )
}

export default Projects;