import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ScrollSnap from 'scroll-snap';
import  { scrollSpy } from 'react-scroll';
import './style/App.css';

import Header from './Pages/Home';
import Bio from './Pages/AboutSection/Bio';
import Projects from './Pages/ProjectsSection/Projects';
import SideNavbar from './SideNavbar';

import Pokeball from './assets/images/Pokeball.svg';
import DatabaseIcon from './assets/images/DatabaseIcon.png';
import MusicVisualizer from './assets/images/MusicVisualizer.png';
import MazeIcon from './assets/images/block-maze.svg';
import UsabilityStudy from './assets/images/Usability-Test.svg';
import Search from './assets/images/search.svg';
import J4Icon from './assets/images/J4-Icon.png';

const projectInfo = {
  project1: {
    title: `Web Front-end API`,
    description: `A front-end design used to demonstrate integration with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: Pokeball,
    link: "https://github.com/joeymichaelmartinez/Web-Front-end-Design"
  },
  project2: {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files`,
    fullDescription: `A database project meant to demonstrate how to store audio files and related 
                      information in a normalized MySQL database with CRUD functionality. Set up a 
                      simple front-end to handle accessing and manipulating this information`,
    image: DatabaseIcon,
    link: "https://github.com/joeymichaelmartinez/AudiophyleDB/"
  },
  project3: {
    title: `Usability Study`,
    description: `A study that weighs how well mobile apps handle user experience and interface design`,
    fullDescription: `A study meant to gather statistics that would inform the overall effectiveness of 
                      various mobile apps based on certain usability metrics`,
    image: UsabilityStudy,
    link: "https://github.com/joeymichaelmartinez/Usability-Study"
  },
  project4: {
    title: `Chromophony`,
    description: `A VR music visualizer built in Unity`,
    fullDescription: `My second semester Senior year project at LMU. This project was meant to both demonstrate 
                      the power Unity has in turning music into a visual experience, but also to showcase how 
                      engaging those visuals can be wgeb experienced through Virtual Reality`,
    image: MusicVisualizer,
    link: "https://github.com/joeymichaelmartinez/Chromophony"
  },
  project5: {
    title: `Autocomplete`,
    description: `A demonstration of how autocomplete is implemented using ternary trees`,
    fullDescription: `While learning Java and Data Structures, I put together a project that would demonstrate how 
                      ternary trees are the perfect candidate to implement the common tasks necessary to perform autocomplete`,
    image: Search,
    link: "https://github.com/joeymichaelmartinez/Autocompleter"
  },
  project6: {
    title: `J4 Lang`,
    description: `A scripting language meant to emphasize readability and understandability`,
    fullDescription: `J4 is a scripting language built for LMU's compilers course. It is meant to simplify basic coding constructs 
                      so that they are more readable and more easily understood. It is a statically and strongly typed language based
                      on Python and Javascript`,
    image: J4Icon,
    link: "https://github.com/joeymichaelmartinez/J4-Lang"
  }
}

const projectsStyle = {
  backgroundColor: "Lighter-Blue"
}

const gameDesignInfo = {
  project1: {
    title: `Interrobang`,
    description: `A looping 3D puzzle platformer`,
    fullDescription: `It is a 3D puzzle platformer built around a looping mechanic that adds changes to the level every time it loops. 
                      Players must either perform skilled tasks or solve puzzles to progress through the game. A built in timer also 
                      starts at the beginning of the game to allow players to time themselves to add to replayability.`,
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
  },
}

const gameDesignStyle = {
  backgroundColor: "Darker-Blue"
}

const snapConfig = {
  snapDestinationX: '0%',
  snapDestinationY: '100%',
  timeout: 10,
  duration: 100,
  threshold: 0.1,
} 

class AppRouter extends React.Component {

  constructor(props) {
    super();
    this.state = {
      isDesktop: window.innerWidth > 1024
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
    this.bindScrollSnap();
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, snapConfig);
    snapElement.bind();
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Row>
              <Col xs={2} id="SideNavbar-wrapper" className="align-self-center" >
              <SideNavbar />
            </Col>
            <Col xs={this.state.isDesktop ? 10 : 12} id="container" ref={this.container}>
              <section name="section-1" id="section-1" className="section-1 page">
                <Header />  
              </section>
              <section name="section-2" id="section-2" className="section-2 page">
                <Bio />
              </section>
              <section name="section-3" id="section-3" className="section-3 page">
                <Projects projectStyle={projectsStyle} projectInfo={projectInfo}/>
              </section>
              <section name="section-4" id="section-4" className="section-4 page">
                <Projects projectStyle={gameDesignStyle} projectInfo={gameDesignInfo}/>
              </section>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default AppRouter;