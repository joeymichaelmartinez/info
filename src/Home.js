import React from 'react';
import headshot  from './assets/images/Headshot.jpg';
// import lookingAtComputerStock from './assets/images/lookingAtComputerStock.jpg';
// import './style/App.css';
import './style/Home.css';
import Pdf from './assets/JosephMartinezResume.pdf'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameDesign from './GameDesign';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Joseph Martinez</h1>
        {/* <img src={headshot} className="headshot" alt="headshot"/> */}
        <p>
          Hello, I'm Joey! I am a graduate of Loyola Marymount with a B.S. in computer science. 
          I love learning and continuing full stack development! In my free time I like to develop games, 
          play music, and create art.
        </p>
          <div className="header-links"> 
            <div className="info-link col-sm-4">
              <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Pdf</a>
            </div>
            <div className="info-link col-sm-4">
              <Link to="/game-design/">GameDesign</Link>
            </div>
            <div className="info-link col-sm-4">
              <Link to="/other-projects/">Other Projects</Link>
            </div>
          </div>
      </div>
      <div className="projects-container">
        <div className="project col-sm-3 mr-2">
          d
        </div>
        <div className="project col-sm-3 mr-2 ml-2">
          d
        </div>
        <div className="project col-sm-3 ml-2">
          d
        </div>
      </div>
    </div>
  );
}

export default Home;
