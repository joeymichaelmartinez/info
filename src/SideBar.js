import React, {useState, useEffect} from 'react';

import Menu from './Menu';
import Hamburger from './Hamburger';

function SideBar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
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

export default SideBar