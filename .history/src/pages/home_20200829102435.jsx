import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import CarouselComponent from '../components/carousel/Carousel';

const Home = () => {
    return (
        <Container>
            <section>
                <Row>
                    <Col xs={12} md={8}>
                        <CarouselComponent />
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                </Col>
                </Row>
            </section>

            <section>
                <Row>
                    <Col md="auto">
                        <h3>Будующие события</h3>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" size="sm">Создать Событие</Button>{' '}
                    </Col>
                </Row>

                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </Container>
    )
}

export default Home;