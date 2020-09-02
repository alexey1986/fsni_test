import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './styles.css';


class CarouselComponent extends React.Component {
    render() {
        return (
            <Carousel interval={null} indicators={false}>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h2>ФСНИ – это </h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p>
                            <Link to='/'>Подробней &#8594;</Link>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h2>ФСНИ – это </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        <p>
                            <Link to='/'>Подробней &#8594;</Link>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h2>ФСНИ – это </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        <p>
                            <Link to='/'>Подробней &#8594;</Link>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselComponent;