import React from "react";
import "./Navber.css";
import logo from "../../../assets/images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <Navbar bg="whate" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <NavLink to="/home">
              <img
                className="nova"
                style={{ width: "80%" }}
                src={logo}
                alt=""
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-black" to="/cartItems">
                <div className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="horizental-line"></div>
    </>
  );
};

export default Navber;
