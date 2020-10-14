import React from 'react';
import '../../style/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import OtherProjects from '../../OtherProjects';
import About from './Sections/About';

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: false,
  stopOnHover: true,
  // swipeable: true,
  dynamicHeight: false,
  // emulateTouch: true,
  selectedItem: 0,
  transitionTime: 200,
  // swipeScrollTolerance: 5,
});

function Home() {
  return (
      <Carousel className="carousel" {...getConfigurableProps()}>
        <div key="1" id="About">
          <About/>
        </div>
        <div key="2" id="page-2">
          <OtherProjects/>
        </div>
        <div key="3" id="page-3">
          <OtherProjects/>
        </div>
      </Carousel> 
  );
}

export default Home;
