import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
import { Container, Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap';
import SocialButtons from './SocialButtons';
import logo from './logo.png';

const NavBarComponent = () => {
    return (
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
                    <SocialButtons />
                    <Nav>
                        <Nav.Link as={NavLink} to='/calendar'>Календарь Событий</Nav.Link>
                        <Nav.Link as={NavLink} to='/news'>Новости</Nav.Link>
                        <Nav.Link as={NavLink} to='/blogs'>Блоги</Nav.Link>
                    </Nav>
                    <ButtonGroup size="sm" aria-label="login/registration">
                        <Button variant="primary">Вход</Button>
                        <Button variant="light">Регистрация</Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent;