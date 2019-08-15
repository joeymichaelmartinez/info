import React from 'react';
import headshot from './assets/images/Headshot.jpg';
import './App.css';
import Pdf from './assets/JosephMartinezResume.pdf'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameDesign from './GameDesign';


function Home() {
  return (
    <div className="App">
      <div className="header">
        <h1>Joseph Martinez</h1>
        <img src={headshot} className="headshot" alt="headshot"/>
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
              <Link to="/GameDesign/">GameDesign</Link>
            </div>
            <div className="info-link col-sm-4">
              <Link to="/OtherProjects/">Other Projects</Link>
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
