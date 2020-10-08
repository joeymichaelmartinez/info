import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './style/Sidebar.css'

const Sidebar = props => {


    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-dark sidebar" 
                activeKey="/home" 
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/Projects">Other Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/Other Projects">Other Projects</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
        );
  };
//   const Sidebar = withRouter(Side);
  export default Sidebar