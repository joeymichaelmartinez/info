import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button, Carousel } from "react-bootstrap";
import Home from './Home';
import GameDesign from './GameDesign';
import OtherProjects from './OtherProjects';
import Scrollspy from 'react-scrollspy';
import './style/App.css';
import './style/style.css';
import './style/Home.css';
import './style/snap.css';

function AppRouter() {
  return (
    <Router>
      <div class="container y mandatory-scroll-snapping" >
        <Container id="main-container" fluid>
                <Row>
                  <Col xs={10} id="page-content-wrapper">
                    <section id="section-1">
                      <Home />
                    </section>
                    <section id="section-2">
                      <OtherProjects />
                    </section>
                    <section id="section-3">
                      <GameDesign />
                    </section>
                  </Col> 
                  <Col xs={2} id="sidebar-wrapper">
                  <Scrollspy 
                    className="scrollspy" items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } 
                    currentClassName="isCurrent">
                    <li><a href="#section-1">section 1</a></li>
                    <li><a href="#section-2">section 2</a></li>
                    <li><a href="#section-3">section 3</a></li>
                  </Scrollspy>
                  </Col>
                  <Col xs={10} id="page-content-wrapper">

                  </Col> 
                </Row>

            </Container>
      </div>
    </Router>
  );
}

export default AppRouter;