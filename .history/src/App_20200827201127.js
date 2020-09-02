import React, {Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import logo from './logo.png';

function App() {
  return (
    <Fragment>
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
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#articles">Articles</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Actions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
