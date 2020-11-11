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
import UsabilityStudy from './assets/images/Usability-Test.svg';
import Search from './assets/images/search.svg';
import J4Icon from './assets/images/J4-Icon.png';
import BallBreaking from './assets/images/BallBreaking.png';

import CardGameIcon from './assets/images/CardGame.png';
import MusicVisualizer from './assets/images/MusicVisualizer.png';
import Beggar from './assets/images/beggar.png';
import Minotaur from './assets/images/Minotaur.jpg';
import InterrobangLogo from './assets/images/InterrobangLogo.png';
import KawaiiKick from './assets/images/KawaiiKickMenu.png';

const projectInfo = {
  project1: {
    title: `Web Front-end API`,
    description: `A front-end design integrated with a pre-existing API`,
    fullDescription: `Constructed front-end web apps that used a pre-existing web 
                      service API to learn best practices for UI design`,
    image: Pokeball,
    link: "https://github.com/joeymichaelmartinez/Web-Front-end-Design"
  },
  project2: {
    title: `AudiophyleDB`,
    description: `A MySQL database used to store audio files and related info`,
    fullDescription: `A database project meant to demonstrate how to store audio files and related 
                      information in a normalized MySQL database with CRUD functionality. Set up a 
                      simple front-end to handle accessing and manipulating this information`,
    image: DatabaseIcon,
    link: "https://github.com/joeymichaelmartinez/AudiophyleDB/"
  },
  project3: {
    title: `Usability Study`,
    description: `A study that scores mobile apps on user experience metrics`,
    fullDescription: `A study meant to gather statistics that would inform the overall effectiveness of 
                      various mobile apps based on certain usability metrics`,
    image: UsabilityStudy,
    link: "https://github.com/joeymichaelmartinez/Usability-Study"
  },
  project4: {
    title: `Direct Manipulation UI`,
    description: `A ball breaker game using gyroscope movement`,
    fullDescription: `A simple ball breaker game meant to demonstrate UI design that uses direct manipulation. 
                      Users can drag or create more balls, create walls for the balls to break, or delete anything 
                      they've created so far. All of these actions use various different gestures that are all 
                      some form of direct manipulation.`,
    image: BallBreaking,
    link: "https://github.com/joeymichaelmartinez/Direct-Manipulation"
  },
  project5: {
    title: `Autocomplete`,
    description: `An implementation of autocomplete using ternary trees`,
    fullDescription: `While learning Java and Data Structures, I put together a project that would demonstrate how 
                      ternary trees are the perfect candidate to implement the common tasks necessary to perform autocomplete`,
    image: Search,
    link: "https://github.com/joeymichaelmartinez/Autocompleter"
  },
  project6: {
    title: `J4 Lang`,
    description: `A scripting language that emphasizes readability`,
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
    image: InterrobangLogo,
    link: "https://github.com/joeymichaelmartinez/Interrobang-JM"
  },
  project2: {
    title: `Chromophony`,
    description: `A VR music visualizer built in Unity`,
    fullDescription: `My second semester Senior year project at LMU. This project was meant to both demonstrate 
                      the power Unity has in turning music into a visual experience, but also to showcase how 
                      engaging those visuals can be through Virtual Reality`,
    image: MusicVisualizer,
    link: "https://github.com/joeymichaelmartinez/Chromophony"
  },
  project3: {
    title: `Kawaii Kick`,
    description: `A 2D Survival platformer`,
    fullDescription: `Kawaii Kick is a 2D platformer where the player must survive against a horde of enemies that chase the player as 
                      they make their way around the map. The longer the player stays alive, the higher their score. However, the amount 
                      of enemies that spawn increases the longer the player survives, making it difficult the longer the player continues the game.`,
    image: KawaiiKick,
    link: "https://github.com/joeymichaelmartinez/KawaiiKick"
  },
  project4: {
    title: `Fighting Chance`,
    description: `A resource management card game`,
    fullDescription: `Fighting chance is a card game that has players manage resources and outwit opponents to win the game. Players must survive 
                      elimination by holding on to civilian game pieces by using resources carefully. Random chance also plays a key role in how 
                      resources are distributed, and players must try their best to play through the random chance to succeed. Game ends when one 
                      player is left standing.`,
    image: CardGameIcon,
    link: "https://github.com/joeymichaelmartinez/FightingChance"
  },
  project5: {
    title: `Homeless Simulator Game`,
    description: `A simulation game based on life as a homeless person`,
    fullDescription: `Homeless Survivor is a game that lets the player take the role of a homeless person as they attempt to find places to sleep 
                      at night and find food during the day. Homeless survivor is meant to show the difficulty of life without a stable home and 
                      draw sympathy for those who are in such a situation`,
    image: Beggar,
    link: "https://github.com/joeymichaelmartinez/Homeless-Survival-Game"
  },
  project6: {
    title: `The Dungeon's Jewel`,
    description: `A chance game based dungeon crawler`,
    fullDescription: `The Dungeon's Jewel is a pysical game based on Rogue like video games. It has players explore a dungeon and gain items used to 
                      fight toward the center of the board. Players who defeat the monster at the center of the board and make their way back to their 
                      starting position will win the game. The board is randomized every time to add to replayability.`,
    image: Minotaur,
    link: "https://github.com/joeymichaelmartinez/The-Dungeons-Jewel"
  },
}

const gameDesignStyle = {
  backgroundColor: "Darker-Blue"
}

const snapConfig = {
  snapDestinationX: '0%',
  snapDestinationY: '100%',
  timeout: 50,
  duration: 200,
  threshold: 0.4,
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
    if(this.state.isDesktop) {
      this.bindScrollSnap();
    }
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