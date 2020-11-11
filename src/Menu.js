import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import  { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCode, faGamepad, faHome } from '@fortawesome/free-solid-svg-icons';

const StyledMenu = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  padding-right: 10px;
  padding-left: 10px;

  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 5px 0;
    font-weight: bold;
    letter-spacing: 5px;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`
  
const Menu = ({ open, setOpen }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpen(!open));

  return (
    <StyledMenu open={open} id="side-navbar" ref={wrapperRef}>
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

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              // callback();
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

export default Menu;