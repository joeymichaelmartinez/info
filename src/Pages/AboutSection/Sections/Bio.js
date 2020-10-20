import React from 'react';
import Headshot from '../../../assets/images/Headshot.jpg';
import Pdf from '../../../assets/JosephMartinezResume.pdf';
import "../../../style/Bio.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Bio() {
  return (
    <div id="About">
      <Row>
        <Col xs={5}>
          <img src={Headshot} className="Headshot" alt="Headshot"/>
        </Col>
        <Col xs={7} id="Bio-Text">
          <p>
            Hello, I'm Joey! I am a graduate of Loyola Marymount with a B.S. in computer science. 
            I love learning and continuing full stack development! In my free time I like to develop games, 
            play music, and create art.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum ex enim, vitae egestas sem porttitor mollis. Vestibulum gravida, urna in finibus luctus, mi ante commodo massa, sed sagittis libero metus ut leo. Integer luctus ligula nibh, vel lacinia quam maximus sit amet. Proin non magna tortor. Nam luctus ligula lectus, in interdum nulla feugiat nec. Cras sem eros, bibendum at quam consequat, elementum tempor eros. Duis tincidunt ac nisi et aliquet. Aliquam maximus aliquet dolor, consectetur laoreet odio.
          </p>
          <p>
            Donec convallis, dui ut faucibus venenatis, nibh dui placerat ligula, gravida condimentum quam est eu ante. Praesent a enim non elit hendrerit ultrices. Maecenas sit amet vehicula magna. Curabitur massa ante, finibus vel malesuada non, accumsan ut est. Vivamus quis arcu vestibulum, elementum augue lacinia, fermentum risus. Mauris diam ex, placerat in quam in, placerat lobortis velit. Curabitur nec velit interdum, eleifend odio vel, venenatis sapien.
          </p>
          <p>
          Proin placerat tellus eget bibendum lacinia. Aliquam faucibus urna vulputate rhoncus porttitor. Suspendisse velit nisi, pulvinar sit amet imperdiet non, gravida a urna. Pellentesque lobortis nibh quis magna auctor, a convallis metus maximus. Maecenas id sapien eros. Ut eget metus non nibh semper consequat. Vestibulum vel elit in sapien aliquet tincidunt. Phasellus congue, leo ac feugiat luctus, quam ante tempus lacus, vehicula vulputate justo lacus non metus. Vestibulum non mauris luctus, ultrices risus sit amet, tempus tellus. Proin feugiat erat vitae elit eleifend pretium. Sed at pretium arcu. Nullam vitae lobortis est. Donec non scelerisque elit. Aliquam sagittis nisl et nulla faucibus commodo.
          </p>
        </Col>
        {/* <div className="header-links">  */}
          {/* <div className="info-link col-sm-4"> */}
            {/* <a href ={Pdf} target="_blank" rel="noopener noreferrer">Download Pdf</a> */}
          {/* </div> */}
          {/* <div className="info-link col-sm-4"> */}
            {/* <Link to="/game-design/">GameDesign</Link> */}
          {/* </div> */}
          {/* <div className="info-link col-sm-4"> */}
            {/* <Link to="/other-projects/">Other Projects</Link> */}
          {/* </div> */}
        {/* </div> */}
      </Row>
    </div>
  )
}

export default Bio;