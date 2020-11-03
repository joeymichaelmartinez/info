import React from 'react';
import styled from 'styled-components';
import  { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCode, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons';
import './style/Menu.css';

const StyledMenu = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  // padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      // width: 100%;
    }

  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 5px 0;
    font-weight: bold;
    letter-spacing: 5px;
    // color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    // @media (max-width: 576px) {
    //   font-size: 1.5rem;
    //   text-align: center;
    // }

    &:hover {
      // color: #343078;
    }
  }
`
  
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} id="side-navbar">
      <Link activeClass="active" to="section-1" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faHome} className="side-navbar-icon"/>
        <div className="side-navbar-text">
          Home    
        </div>
      </Link>
      <Link activeClass="active" to="section-2" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faAddressCard} className="side-navbar-icon"/>
        <div className="side-navbar-text">
          About Me
        </div>
      </Link>
      <Link activeClass="active" to="section-3" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faCode} className="side-navbar-icon"/>
        <div className="side-navbar-text">
          Personal Projects
        </div>
      </Link>
      <Link activeClass="active" to="section-4" spy={true} smooth={true} duration={250} containerId="container" className="side-navbar-link" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faGamepad} className="side-navbar-icon"/>
        <div className="side-navbar-text">
          Game Design Projects
        </div>
      </Link>
    </StyledMenu>
  )
}

export default Menu;