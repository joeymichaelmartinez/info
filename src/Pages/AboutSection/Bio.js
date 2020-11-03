import React from 'react';
import Headshot from '../../assets/images/Headshot.jpg';
import "../../style/Bio.css";
import { Row, Col } from "react-bootstrap";

function Bio() {
  return (
    <div id="About">
      <Row id="About-Row">
        <Col xs={5} id="Headshot">
          <img src={Headshot} alt="Headshot"/>
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
          </Col>
      </Row>
    </div>
  )
}

export default Bio;