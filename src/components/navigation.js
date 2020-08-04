import React from 'react';

import {
  Navbar,
  Nav,
} from '../utils/bootstrap_imports_barrel';

import { logos } from '../images/image_barrel';

const styles = {
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
};

const Navigation = () => (
  <Navbar sticky="top" bg="white" expand="lg" style={styles}>
    <Navbar.Brand className="m-0 p-0" href="#home">
      <img src={logos.logo2} alt="Octawns Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Services</Nav.Link>
        <Nav.Link href="#link">Clients</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">Contact us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;