import React from 'react';
import Headshot from '../../assets/images/Headshot.jpg';
import Pdf from '../../assets/JosephMartinezResume.pdf';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="header">
      <h1>Joseph Martinez</h1>
      <img src={Headshot} className="Headshot" alt="Headshot"/>
      <p>
        Hello, I'm Joey! I am a graduate of Loyola Marymount with a B.S. in computer science. 
        I love learning and continuing full stack development! In my free time I like to develop games, 
        play music, and create art.
      </p>
      <div className="header-links"> 
        <div className="info-link col-sm-4">
          <a href ={Pdf} target="_blank" rel="noopener noreferrer">Download Pdf</a>
        </div>
        <div className="info-link col-sm-4">
          <Link to="/game-design/">GameDesign</Link>
        </div>
        <div className="info-link col-sm-4">
          <Link to="/other-projects/">Other Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default About;