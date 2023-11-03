import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default class Menu extends Component {
  render() {
    // Note: You can uncomment and use 'token' and 'authorized' if needed.
    // const token = localStorage.getItem('Bearer');
    // const authorized = token !== null && token !== '';

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /> Warehouse APP </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Our Place" id="basic-nav-dropdown" style={{ margin: '0 20px' }}>
                <NavDropdown.Item as={Link} to="/warehouse">
                  Warehouse
                </NavDropdown.Item>                                                 
              </NavDropdown>
              <Nav.Link target="_blank" href="/swagger/index.html">API documentation</Nav.Link>
            </Nav>   
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    );
  }
}