import React, { Component } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import CarouselComponent from '../components/carousel/Carousel';
import { Link } from "react-router-dom";
import NewsAPI from 'newsapi';

const API_KEY = new NewsAPI('204141cf2b5443618d7531afb82b6bac');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            isLoading: true
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    getNews = (q) => (
        API_KEY.v2.topHeadlines({
            country: 'us',
            q: q || '' // keywords or a phrase to search for
        })
            .then(response => {
                //this.rewriteData(response.articles)
                console.log(response.json())
            })
            .catch((this.errorHandler))
    )

    errorHandler(error) {
        throw new Error(error);
    }

    componentDidMount() {
        this.getNews()
            .then(() => {
                this.setState({ isLoading: false });
            })
            .catch((this.errorHandler));
    }

    render() {
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
    
                    <Table responsive striped hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    <Form.Control type="text" placeholder="Название турнира" />                                
                                </th>
                                <th><Button variant="link" size="sm">Место проведения</Button></th>
                                <th><Button variant="link" size="sm">Дата проведения</Button></th>
                                <th><Button variant="link" size="sm">Тип турнира</Button></th>
                                <th>
                                    <Form.Control as="select">
                                        <option>Все игровые системы</option>
                                        <option>WH40k</option>
                                        <option>Age of Sigmar</option>
                                    </Form.Control>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>T9A the Ocho</td>
                                <td>(Г) Скала</td>
                                <td>06 июня</td>
                                <td>Парник</td>
                                <td>WH40k</td>
                            </tr>
                            <tr>
                                <td>
                                    THE SCRAMBLE 2020 <sup>*</sup></td>
                                <td>М) Минск. Д6</td>
                                <td>18 июня</td>
                                <td>Одиночный</td>
                                <td>WH40k</td>
                            </tr>
                            <tr>
                                <td>FSC Coupe </td>
                                <td>Парник</td>
                                <td>10 августа</td>
                                <td>Командный</td>
                                <td>Age of Sigmar</td>
                            </tr>
                        </tbody>
                    </Table>
    
                    <Link to='/'>Посмотреть все турниры (5)</Link>
                </section>
    
                <section>
                    <h3>Новости и блоги</h3>
                    <Row>
                        <Col xs={12} md={6}>1</Col>
                        <Col xs={12} md={6}>2</Col>
                    </Row>
                </section>
            </Container>
        )
    }
    
    
}

export default Home;