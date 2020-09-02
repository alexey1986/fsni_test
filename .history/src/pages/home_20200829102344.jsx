import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            </section>
        </Container>
    )
}

export default Home;