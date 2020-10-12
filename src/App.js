import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Row, Col, Card, Form, Button, Carousel } from "react-bootstrap";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';
import ScrollSnap from 'scroll-snap';
import  { scrollSpy } from 'react-scroll';
import SideNavbar from './SideNavbar';  
import './style/App.css';

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
            <Col xs={2} >
              <SideNavbar />
            </Col>
            {/* <Col> */}
            <div id="container" ref={this.container} >
              <section name="section-1" id="section-1" className="section-1 page">
                <Home />  
              </section>
              <section name="section-2" id="section-2" className="section-2 page">
                <GameDesign />
              </section>
              <section name="section-3" id="section-3" className="section-3 page">
                <GameDesign />  
              </section>
            </div>
            {/* </Col> */}
          </Row>
        </div>
      </Router>
    );
  }
}

export default AppRouter;