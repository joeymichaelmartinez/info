import React, { useState, useEffect } from 'react';

import ProjectCards from './ProjectCard';
import '../../style/Projects.css';
import lookingAtComputerStock from '../../assets/images/lookingAtComputerStock.jpg';
import Pokeball from '../../assets/images/Pokeball.svg';
import DatabaseIcon from '../../assets/images/DatabaseIcon.png';
import MazeIcon from '../../assets/images/block-maze.svg';
import UsabilityStudy from '../../assets/images/Usability-Test.svg';
import BinaryTree from '../../assets/images/binary-tree.svg';
import J4Icon from '../../assets/images/J4-Icon.png';

const projectInfo = {
  project1: {
    title: `Web Front-end API`,
    description: `A simple front-end design to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: UsabilityStudy,
  },
  project2: {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files`,
    fullDescription: `A MySQL database to store audio files and related information in a normalized 
                      database with CRUD functionality. Set up a simple front-end to handle 
                      accessing and manipulating this information`,
    image: DatabaseIcon,
  },
  project3: {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files`,
    fullDescription: `A MySQL database to store audio files and related information in a normalized 
                      database with CRUD functionality. Set up a simple front-end to handle 
                      accessing and manipulating this information`,
    image: Pokeball,
  },
  project4: {
    title: `Web Front-end API`,
    description: `A simple front-end design to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: MazeIcon,
  },
  project5: {
    title: `Web Front-end API`,
    description: `A simple front-end design to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: BinaryTree,
  },
  project6: {
    title: `Web Front-end API`,
    description: `A simple front-end design to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: J4Icon,
  }
}

const projectImage = {
  project1: lookingAtComputerStock
}

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
    <div id="Projects">
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project1.title} fullDescription={projectInfo.project1.fullDescription} description={projectInfo.project1.description} image={projectInfo.project1.image}/>
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project2.title} fullDescription={projectInfo.project2.fullDescription} description={projectInfo.project2.description} image={projectInfo.project2.image}/>
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project3.title} fullDescription={projectInfo.project3.fullDescription} description={projectInfo.project3.description} image={projectInfo.project3.image}/>
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project4.title} fullDescription={projectInfo.project4.fullDescription} description={projectInfo.project4.description} image={projectInfo.project4.image}/>
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project5.title} fullDescription={projectInfo.project5.fullDescription} description={projectInfo.project5.description} image={projectInfo.project5.image}/>
      <ProjectCards isDesktop={isDesktop} title={projectInfo.project6.title} fullDescription={projectInfo.project6.fullDescription} description={projectInfo.project6.description} image={projectInfo.project6.image}/>
    </div>
  )
}

export default Projects;