import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ScrollSnap from 'scroll-snap';
import  { scrollSpy } from 'react-scroll';
import './style/App.css';

import Header from './Pages/Home';
import Bio from './Pages/AboutSection/Bio';
import SideNavbar from './SideNavbar';  
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';
import Projects from './Pages/ProjectsSection/Projects';
import SideBar from './SideBar';

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
      isDesktop: window.innerWidth > 768
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
    this.setState({ isDesktop: window.innerWidth > 768 });
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
              <SideBar />
              {/* <SideNavbar /> */}
            </Col>
            {this.state.isDesktop ? (
            <Col xs={10} id="container" ref={this.container}>
              <section name="section-1" id="section-1" className="section-1 page">
                <Header />  
              </section>
              <section name="section-2" id="section-2" className="section-2 page">
                <Bio />
              </section>
              <section name="section-3" id="section-3" className="section-3 page">
                <Projects />
              </section>
              <section name="section-4" id="section-4" className="section-4 page">
                <GameDesign />  
              </section>
            </Col>
            ) : ( 
              <Col xs={12} id="container" ref={this.container}>
              <section name="section-1" id="section-1" className="section-1 page">
                <Header />  
              </section>
              <section name="section-2" id="section-2" className="section-2 page">
                <Bio />
              </section>
              <section name="section-3" id="section-3" className="section-3 page">
                <Projects />
              </section>
              <section name="section-4" id="section-4" className="section-4 page">
                <GameDesign />  
              </section>
              </Col>
            )
            }
          </Row>
        </div>
      </Router>
    );
  }
}

export default AppRouter;