import React, {useState, useEffect, FC} from 'react';
import Headshot from '../../../assets/images/Headshot.jpg';
import "./Bio.css";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import resumePdf from "../../../assets/resume/JosephMartinezResume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Bio: FC = () => {
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
      <Row id="About-Row">
        <Col xs={5} id="Headshot">
          <img src={Headshot} alt="Headshot"/>
        </Col>
        <Col xs={isDesktop ? 7 : 12} id="Bio-Text">
          <p>
            Hello, I'm Joey! I am a graduate of Loyola Marymount University with a B.S. in Computer Science. 
            I work as a contractor for Vero as a full stack developer. My work involves blockchain development,
            apps creation in react, and web APIs maintenance.
          </p>
          <p>
            I love furthering my understanding of full stack development and growing as a software engineer.
          </p>
          <p>
            In my free time I like to program video games and learn programming through game design. 
            I also enjoy music, playing drums, and am currently learning guitar and piano.
          </p>
          <div id="Personal-Links">
            <Button
              id="Resume-Button"
              size="lg"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
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
    </div>
  );
}

export default Bio;