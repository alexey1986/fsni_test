import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import './styles.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>ФСНИ – это </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <p>
                        <Nav.Link as={NavLink} to='/'>Подробней &#8594;</Nav.Link>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>ФСНИ – это </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <p>
                        <Nav.Link as={NavLink} to='/'>Подробней &#8594;</Nav.Link>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;