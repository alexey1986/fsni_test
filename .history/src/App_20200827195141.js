import React, {Fragment } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from './logo.png';

function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
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
