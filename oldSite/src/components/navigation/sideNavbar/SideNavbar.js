import React, {useState, useEffect} from 'react';

import './SideNavbar.css';
import Menu from '../menu/Menu';
import Hamburger from '../mobileHamburger/Hamburger';

function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      ({isDesktop ? (
        <Menu open={true} setOpen={setOpen} />
      ) : (
        <>
          <Hamburger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </>
      )
    }
    </>
  );
}

export default SideNavbar