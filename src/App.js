import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ScrollSnap from 'scroll-snap';
import  { scrollSpy } from 'react-scroll';
import './style/App.css';

import Header from './Pages/Home';
import About from './Pages/AboutSection/About';
import SideNavbar from './SideNavbar';  
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';

const snapConfig = {
  snapDestinationX: '0%',
  snapDestinationY: '100%',
  timeout: 10,
  duration: 100,
  threshold: 0.1,
}

class AppRouter extends React.Component {

  componentDidMount() {
    scrollSpy.update();
    this.bindScrollSnap();
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
            <Col xs={10} id="container" ref={this.container}>
              <section name="section-1" id="section-1" className="section-1 page">
                <Header />  
              </section>
              <section name="section-2" id="section-2" className="section-2 page">
                <About />  
              </section>
              <section name="section-3" id="section-3" className="section-3 page">
                <OtherProjects />
              </section>
              <section name="section-4" id="section-4" className="section-4 page">
                <GameDesign />  
              </section>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default AppRouter;