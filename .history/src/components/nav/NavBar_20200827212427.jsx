import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
import { Container, Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap';
import SocialButtons from './SocialButtons'
import Home from '../home/home';
import logo from './logo.png';

const NavBarComponent = () => {
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
                    <SocialButtons />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to='/calendar'>Календарь Событий</Nav.Link>
                            <Nav.Link as={NavLink} to='/news'>Новости</Nav.Link>
                            <Nav.Link as={NavLink} to='/blogs'>Блоги</Nav.Link>
                        </Nav>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Left</Button>
                            <Button variant="secondary">Middle</Button>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Route path="/" exact component={Home} />
            {/* <Route path="/news" exact component={News} />
            <Route path="/articles" exact component={Articles} /> */}
        </Router>
    )
}

export default NavBarComponent;