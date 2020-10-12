import React from "react";
import './style/SideNavbar.css'
import  { Link } from 'react-scroll';


const SideNavbar = props => {
  return (
    <div id="sidebar-wrapper">
      <Link activeClass="active" to="section-1" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
        About Me    
      </Link>
      <Link activeClass="active" to="section-2" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
        Personal Projects
      </Link>
      <Link activeClass="active" to="section-3" spy={true} smooth={true} duration={250} containerId="container" style={{ display: 'block', margin: '15px' }}>
        Game Design Projects
      </Link>
    </div>
  );
};
  

export default SideNavbar