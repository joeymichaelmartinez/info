import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, Carousel } from "react-bootstrap";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';
import Scrollspy from 'react-scrollspy';
import ScrollSnap from 'scroll-snap';
import './style/App.css';  
import './style/style.css'; 
// import './style/Home.css';
// import './style/styles.css';

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
  

  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
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
        <div id="container" ref={this.container}>
          <section id="section-1" className="first-page page">
            <Home />  
          </section>
          <section id="section-2" className="second-page page">
            <OtherProjects />
          </section>
          <section id="section-3" className="third-page page">
            <GameDesign />  
          </section>
          </div> 
          <Scrollspy 
            className="scrollspy" items={ ['section-1', 'section-2', 'section-3'] } 
            currentClassName="isCurrent">
            <li><a href="#section-1">section 1</a></li>
            <li><a href="#section-2">section 2</a></li>
            <li><a href="#section-3">section 3</a></li>
          </Scrollspy>
        </div>
    </Router>
  );
  }
}

export default AppRouter;