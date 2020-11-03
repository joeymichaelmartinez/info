import React from 'react';

import ProjectCards from './ProjectCard';
import '../../style/Projects.css';
import lookingAtComputerStock from '../../assets/images/lookingAtComputerStock.jpg';

const projectText = {
  project1: `Constructed front-end web apps that used a pre-existing web 
            service API to learn best practices for UI design. Added a 
            reusable slider component from scratch using JavaScript and 
            jQuery to control various features of the user interface`
}

const projectImage = {
  project1: lookingAtComputerStock
}

function Projects() {
  return (
    <div id="Projects">
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
      <ProjectCards text={projectText.project1} image={projectImage.project1}/>
    </div>
  )
}

export default Projects;