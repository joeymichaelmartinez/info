import React from "react";
import './style/SideNavbar.css';
import  { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCode, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons';

const SideNavbar = props => {
  return (
    <div id="side-navbar">
        <Link activeClass="active" to="section-1" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link">
          <FontAwesomeIcon icon={faHome} className="side-navbar-icon"/>
          <div className="side-navbar-text">
            Home    
          </div>
        </Link>
        <Link activeClass="active" to="section-2" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link">
          <FontAwesomeIcon icon={faAddressCard} className="side-navbar-icon"/>
          <div className="side-navbar-text">
            About Me
          </div>
        </Link>
        <Link activeClass="active" to="section-3" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link">
        <FontAwesomeIcon icon={faCode} className="side-navbar-icon"/>
          <div className="side-navbar-text">
          Personal Projects
          </div>
        </Link>
        <Link activeClass="active" to="section-4" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link">
          <FontAwesomeIcon icon={faGamepad} className="side-navbar-icon"/>
          <div className="side-navbar-text">
            Game Design Projects
          </div>
        </Link>
    </div>
  );
};
  

export default SideNavbar