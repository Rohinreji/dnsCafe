import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Dns Logo.png";
import logo1 from "../../assets/DEEP NET.png";
import logo2 from "../../assets/SOFT.png";

function CommonNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiaryNav">
        <Container fluid>
          <Navbar.Brand style={{ display: "flex", marginLeft: "100px" }}>
            <img
              className="commonNavbar_logo"
              src={logo}
              style={{
                width: "50%",
                zIndex: "1",
                position: "relative",
                top: "50px",
              }}
              alt="logo"
            />
            <img
              className="commonNavbar_logoChanges"
              src={logo}
              style={{
                zIndex: "1",
                top: "50px",
              }}
              alt="logo"
            />
            <div
              style={{
                marginLeft: "10px",
                width: "100px",
                zIndex: "1",
                position: "relative",
                top: "55px",
              }}
            >
              <span className="commonNavbar_companyname">
                <img  src={logo1} alt="" />
                <br />
                <img src={logo2} alt="" />
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"#857878"}}  />
          <Navbar.Collapse id="navbarScroll" className="commonNavber_dropdown" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="commonNav_rightPart">
              <Nav.Link className="text-white " href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#action2">
                menu
              </Nav.Link>
              <Nav.Link className="text-white" href="#action3">
                Make a reservation
              </Nav.Link>
              <Nav.Link className="text-white" href="#action4">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CommonNavbar;
