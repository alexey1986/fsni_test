import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from '../components/carousel/Carousel';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <CarouselComponent />
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>

            <div>
                <h2>Будующие события</h2>
            </div>
        </Container>
    )
}

export default Home;