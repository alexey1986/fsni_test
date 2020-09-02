import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  NavItem
} from 'react-bootstrap';
import logo from './logo.png';


import { Route, RouteHandler, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <RouteHandler>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Forged Alliance Forever
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
              <LinkContainer to="/news">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#articles">Articles</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#actions">Actions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </RouteHandler>
  );
}

export default App;
