import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../style/ProjectCard.css";

function ProjectCard(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="card" variant="primary" onClick={handleShow}>
        <div id="Card-Image">
          <img src={props.image} alt="Project"/>
        </div>
        <div id="Card-Text">
          <h3 id="Card-Title"> {props.title} </h3>  
          {props.isDesktop &&
          <p id="Card-Description">
            {props.description}
          </p>
          }        
        </div>
      </div>

      <Modal id="Modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="Modal-Body">
          <img src={props.image} id="Modal-Image" alt="Modal"/>
          {props.fullDescription}
        </Modal.Body>
        <Modal.Footer>
          <div id="Modal-Link">
            <a href={props.link}>Link to GitHub</a>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;