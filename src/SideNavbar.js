import React from "react";
import './style/SideNavbar.css'
import  { Link } from 'react-scroll';


const SideNavbar = props => {
  return (
    <div id="sidebar-wrapper">
      <Link activeClass="active" to="section-1" spy={true} smooth={true} duration={250} containerId="container" className="SideNavbar-Link">
        About Me    
      </Link>
      <Link activeClass="active" to="section-2" spy={true} smooth={true} duration={250} containerId="container" className="SideNavbar-Link">
        Personal Projects
      </Link>
      <Link activeClass="active" to="section-3" spy={true} smooth={true} duration={250} containerId="container" className="SideNavbar-Link">
        Game Design Projects
      </Link>
    </div>
  );
};
  

export default SideNavbar