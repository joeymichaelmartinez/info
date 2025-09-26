import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ScrollSnap from 'scroll-snap';
import  { scrollSpy } from 'react-scroll';
import './App.css';

import Header from './components/pages/home/Home';
import Bio from './components/pages/AboutSection/Bio';
import Projects from './components/pages/ProjectsSection/Projects';
import SideNavbar from './components/navigation/sideNavbar/SideNavbar';
import { projectInfo } from './data/projectInfo';
import { gameDesignInfo } from './data/gameDesignInfo';

const projectsStyle = {
  backgroundColor: "Lighter-Blue"
}

const gameDesignStyle = {
  backgroundColor: "Darker-Blue"
}

const snapConfig = {
  snapDestinationX: '0%',
  snapDestinationY: '101%',
  timeout: 50,
  duration: 200,
  threshold: 0.2,
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