import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles.css';


class CarouselComponent extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    slide 1
                </Carousel.Item>
                <Carousel.Item>
                    slide 2
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselComponent;