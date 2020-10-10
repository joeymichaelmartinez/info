import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, Carousel } from "react-bootstrap";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';
import ScrollSnap from 'scroll-snap';
import './style/App.css';
import  { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ResponsiveMenu from 'react-responsive-navbar';

function callback() {
  console.log('snapped');
}

const snapConfig = {
  /**
   * snap-destination for x and y axes
   * should be a valid css value expressed as px|%|vw|vh
   **/
  snapDestinationX: '0%',
  snapDestinationY: '100%',
  /**
   * time in ms after which scrolling is considered finished
   * [default: 100]
   **/
  timeout: 10,
  /**
   * duration in ms for the smooth snap
   * [default: 300]
   **/
  duration: 100,
  /**
   * threshold to reach before scrolling to next/prev element, expressed as a percentage in the range [0, 1]
   * [default: 0.2]
   **/
  threshold: 0.1,
  /**
   * custom easing function
   * [default: easeInOutQuad]
   * for reference: https://gist.github.com/gre/1650294
   * @param t normalized time typically in the range [0, 1]
   **/
  // easing: easeInOutQuad,
}

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    // console.log(element)
    const snapElement = new ScrollSnap(element, 
      snapConfig
    )

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
  return (
    <Router>
      <div className="App">
      <Row>
      <Col xs={2} id="sidebar-wrapper">
      <Link activeClass="active" to="section-1" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
        About Me    
      </Link>

        <Link activeClass="active" to="section-2" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
          Personal Projects
        </Link>

        <Link activeClass="active" to="section-3" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
          Game Design Projects
        </Link>
        </Col>
        {/* <Col xs={10} id="page-content-wrapper"> */}
       <div name="test7" className="element" id="container" ref={this.container} style={{
          // position: 'relative',
          // height: '200px',
          // overflow: 'scroll',
          // marginBottom: '100px'
        }}>
      {/* <div className="App"> */}
        {/* <div id="container" ref={this.container}> */}
          <section name="section-1" id="section-1" className="first-page page">
            <Home />  
          </section>
          <section name="section-2" id="section-2" className="second-page page">
            <OtherProjects />
          </section>
          <section name="section-3" id="section-3" className="third-page page">
            <GameDesign />  
          </section>
          {/* </div> */}
        {/* </div> */}
        </div>
        {/* </Col> */}
        </Row>
        </div>
    </Router>
  );
  }
}

export default AppRouter;