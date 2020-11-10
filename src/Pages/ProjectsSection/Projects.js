import React, { useState, useEffect } from 'react';

import ProjectCards from './ProjectCard';
import '../../style/Projects.css';

import Pokeball from '../../assets/images/Pokeball.svg';
import DatabaseIcon from '../../assets/images/DatabaseIcon.png';
import MazeIcon from '../../assets/images/block-maze.svg';
import UsabilityStudy from '../../assets/images/Usability-Test.svg';
import Search from '../../assets/images/search.svg';
import J4Icon from '../../assets/images/J4-Icon.png';

const projectInfo = {
  project1: {
    title: `Web Front-end API`,
    description: `A front-end design used to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: Pokeball,
  },
  project2: {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files`,
    fullDescription: `A database project meant to demonstrate how to store audio files and related 
                      information in a normalized MySQL database with CRUD functionality. Set up a 
                      simple front-end to handle accessing and manipulating this information`,
    image: DatabaseIcon,
  },
  project3: {
    title: `Usability Study`,
    description: `A study that weighs how well mobile apps handle user experience and interface design`,
    fullDescription: `A study meant to gather statistics that would inform the overall effectiveness of 
                      various mobile apps based on certain usability metrics`,
    image: UsabilityStudy,
  },
  project4: {
    title: `Chromophony`,
    description: `A VR music visualizer built in Unity`,
    fullDescription: `My second semester Senior year project at LMU. This project was meant to both demonstrate 
                      the power Unity has in turning music into a visual experience, but also to showcase how 
                      engaging those visuals can be wgeb experienced through Virtual Reality`,
    image: MazeIcon,
  },
  project5: {
    title: `Autocomplete`,
    description: `A demonstration of how autocomplete is implemented using ternary trees`,
    fullDescription: `While learning Java and Data Structures, I put together a project that would demonstrate how 
                      ternary trees are the perfect candidate to implement the common tasks necessary to perform autocomplete`,
    image: Search,
  },
  project6: {
    title: `J4 Lang`,
    description: `A scripting language meant to emphasize readability and understandability`,
    fullDescription: `J4 is a scripting language built for LMU's compilers course. It is meant to simplify basic coding constructs 
                      so that they are more readable and more easily understood. It is a statically and strongly typed language based
                      on Python and Javascript`,
    image: J4Icon,
  }
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
    <div id="Projects-Container">
      <div id="Projects">
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project1.title} fullDescription={projectInfo.project1.fullDescription} description={projectInfo.project1.description} image={projectInfo.project1.image}/>
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project2.title} fullDescription={projectInfo.project2.fullDescription} description={projectInfo.project2.description} image={projectInfo.project2.image}/>
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project3.title} fullDescription={projectInfo.project3.fullDescription} description={projectInfo.project3.description} image={projectInfo.project3.image}/>
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project4.title} fullDescription={projectInfo.project4.fullDescription} description={projectInfo.project4.description} image={projectInfo.project4.image}/>
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project5.title} fullDescription={projectInfo.project5.fullDescription} description={projectInfo.project5.description} image={projectInfo.project5.image}/>
        <ProjectCards isDesktop={isDesktop} title={projectInfo.project6.title} fullDescription={projectInfo.project6.fullDescription} description={projectInfo.project6.description} image={projectInfo.project6.image}/>
      </div>
    </div>
  )
}

export default Projects;