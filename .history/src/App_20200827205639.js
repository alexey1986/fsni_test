import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from './components/home/home';
import logo from './logo.png';

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ФСНИ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >              
              <Nav.Link as={NavLink} to='/calendar'>Календарь Событий</Nav.Link>
              <Nav.Link as={NavLink} to='/news'>Новости</Nav.Link>
              <Nav.Link as={NavLink} to='/blogs'>Блоги</Nav.Link>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/actions'>Actions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route path="/" exact component={Home} />
      {/* <Route path="/news" exact component={News} />
      <Route path="/articles" exact component={Articles} /> */}
    </Router>
  );
}

export default App;
