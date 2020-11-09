import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../style/ProjectCard.css";
import StockPhoto from '../../assets/images/lookingAtComputerStock.jpg'

function ProjectCard(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="card" variant="primary" onClick={handleShow}>
        <div id="Card-Image">
          <img src={props.image} />
        </div>
        <div>
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
          <img src={props.image} id="Modal-Image"/>
          {props.fullDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;