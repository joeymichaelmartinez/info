import React, {useState, useEffect} from 'react';
import Headshot from '../../assets/images/Headshot.jpg';
import "../../style/Bio.css";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/JosephMartinezResume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Bio() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div id="About">
      <div id="Above-Banner" />
      <Row id="About-Row">
        <Col xs={5} id="Headshot">
          <img src={Headshot} alt="Headshot"/>
        </Col>
        <Col xs={isDesktop ? 7 : 12} id="Bio-Text">
          <p>
            Hello, I'm Joey! I am a graduate of Loyola Marymount with a B.S. in computer science. 
            I work as a contractor for Vero as a full stack developer. My work involves blockchain development,
            creating apps in react, and maintaining web APIs.
          </p>
          <p>
            I love furthering my understanding of full stack development and growing as a software engineer.
          </p>
          <p>
            In my free time I like to program small video games and continue learning programming through game design. 
            I also enjoy music, and play drums, and I am currently learning guitar and piano.
          </p>
          <div id="Personal-Links">
            <Button id="Resume-Button" size="md" href={Resume}> Resume </Button> 
            <div id="Social-Links">
              <a href="https://github.com/joeymichaelmartinez">
                <FontAwesomeIcon icon={faGithub} className="Social-Icon"/>
              </a>
              <a href="https://www.linkedin.com/in/joeymichaelmartinez/">
                <FontAwesomeIcon icon={faLinkedin} className="Social-Icon"/>
              </a>
              <a href="mailto:joeymichaelmartinez@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="Social-Icon"/>
              </a>
            </div>
          </div>
          </Col>
      </Row>
      <div id="Below-Banner" />
    </div>
  )
}

export default Bio;