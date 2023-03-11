import React from "react";
import "./navbar.css";
import { Navbar, Nav } from 'react-bootstrap';

function navbar() {
  return (
    <div>
      <Navbar className="Navbar" expand="lg" fixed="top">
      <Navbar.Brand href="#"><i class="bi bi-code-slash"></i>
        <span>Jesus Santos</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Acerca de</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
    </div>
  );
}

export default navbar