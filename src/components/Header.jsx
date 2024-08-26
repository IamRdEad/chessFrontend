import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css'; 
import logo from '../assets/logo.png'

function Header(){
    return(
        <Navbar expand="lg" className="custom-navbar p-1">
        <Container>
          <Navbar.Brand>
          <img
            src={logo}
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-center"
            style={{ marginRight: '15px' }}
          />
          RdEad Chess</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Discord</Nav.Link>
              <Nav.Link href="#link">Club</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;