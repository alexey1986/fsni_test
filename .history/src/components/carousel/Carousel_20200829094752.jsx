import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>ФСНИ – это </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <p><a href="#">Подробней &#8594;</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>ФСНИ – это </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <p><a href="#">Подробней &#8594;</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;