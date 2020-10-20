import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import { Document, Page, pdfjs } from "react-pdf";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/About.css";

import Bio from "./Sections/Bio";
import OtherProjects from "../../OtherProjects";

import PDF from "../../assets/JosephMartinezResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: false,
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

function About() {
  return (
    <Carousel className="carousel" {...getConfigurableProps()}>
        <div key="1" id="About">
          <Bio/>
        </div>
        <div key="2" id="page-2">
        <Document file={PDF}>
      <Page pageNumber={1} />
        </Document>
          <OtherProjects/>
        </div>
        <div key="3" id="page-3">
          <OtherProjects/>
        </div>
      </Carousel> 
  )
}

export default About;