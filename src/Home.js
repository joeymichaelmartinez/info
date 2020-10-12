// import React from 'react';
import headshot  from './assets/images/Headshot.jpg';
// import lookingAtComputerStock from './assets/images/lookingAtComputerStock.jpg';
// import './style/App.css';
import './style/Home.css';
import Pdf from './assets/JosephMartinezResume.pdf'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameDesign from './GameDesign';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import OtherProjects from './OtherProjects';
import Headshot from './assets/images/Headshot.jpg';

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: false,
  stopOnHover: true,
  // swipeable: true,
  dynamicHeight: false,
  // emulateTouch: true,
  selectedItem: 0,
  transitionTime: 200,
  // swipeScrollTolerance: 5,
});

function Home() {
  return (
      <Carousel className="carousel" {...getConfigurableProps()}>
        <div key="1" className="page-1">
          <img src={Headshot} className="Headshot" alt="Headshot"/>
          <h1>WORK IN PROGRESS 1</h1>
        </div>
        <div key="2" className="page-1">
          <img src={Headshot} className="Headshot" alt="Headshot"/>
          <h1>WORK IN PROGRESS 2</h1>
        </div>
        <div key="3" className="page-1">
          <img src={Headshot} className="Headshot" alt="Headshot"/>
          <h1>WORK IN PROGRESS 3</h1>
        </div>
      </Carousel> 
    // <div className="">
    //    <div className="header">
    //     <h1>Joseph Martinez</h1>
    //     <img src={headshot} className="headshot" alt="headshot"/>
    //     <p>
    //       Hello, I'm Joey! I am a graduate of Loyola Marymount with a B.S. in computer science. 
    //       I love learning and continuing full stack development! In my free time I like to develop games, 
    //       play music, and create art.
    //     </p>
    //       <div className="header-links"> 
    //         <div className="info-link col-sm-4">
    //           <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Pdf</a>
    //         </div>
    //         <div className="info-link col-sm-4">
    //           <Link to="/game-design/">GameDesign</Link>
    //         </div>
    //         <div className="info-link col-sm-4">
    //           <Link to="/other-projects/">Other Projects</Link>
    //         </div>
    //       </div>
    //   </div>
    //   <div className="projects-container">
    //     <div className="project col-sm-3 mr-2">
    //       d
    //     </div>
    //     <div className="project col-sm-3 mr-2 ml-2">
    //       d
    //     </div>
    //     <div className="project col-sm-3 ml-2">
    //       d
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
