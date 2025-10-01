import { useRef, useState, useEffect } from "react";

import "./InfoPageWrapper.css";

import { Row, Col } from "react-bootstrap";
import ScrollSnap from 'scroll-snap';
import { scrollSpy } from 'react-scroll';

import Header from '../home/Home';
import Bio from '../AboutSection/Bio';
import Projects from '../ProjectsSection/Projects';
import SideNavbar from '../../navigation/sideNavbar/SideNavbar';
import { projectInfo } from '../../../data/projectInfo';
import { gameDesignInfo } from '../../../data/gameDesignInfo';

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

export default function InfoPageWrapper() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isDesktop = width > 768;

  useEffect(() => {
    scrollSpy.update();
    if (isDesktop && container.current) {
      bindScrollSnap();
    }
  }, [isDesktop]);

  const bindScrollSnap = () => {
    const element = container.current;
    const snapElement = new ScrollSnap(element, snapConfig);
    snapElement.bind();
  }

  const container = useRef(null);

  return (
    <Row>
      <Col xs={2} id="SideNavbar-wrapper" className="align-self-center">
        <SideNavbar />
      </Col>
      <Col xs={isDesktop ? 10 : 12} id="container" ref={container}>
        <section id="section-1" className="section-1 page">
          <Header />
        </section>
        <section id="section-2" className="section-2 page">
          <Bio />
        </section>
        <section id="section-3" className="section-3 page">
          <Projects projectStyle={projectsStyle} projectInfo={projectInfo} />
        </section>
        <section id="section-4" className="section-4 page">
          <Projects projectStyle={gameDesignStyle} projectInfo={gameDesignInfo} />
        </section>
      </Col>
    </Row>
  );
}