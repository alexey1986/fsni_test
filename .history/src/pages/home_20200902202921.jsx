import React, { Component } from 'react';
import { Container, Row, Col, Button, Table, Form, Image } from 'react-bootstrap';
import CarouselComponent from '../components/carousel/Carousel';
import { Link } from "react-router-dom";
import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('204141cf2b5443618d7531afb82b6bac', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: [],
            isLoading: true
        };
    }

    errorHandler(error) {
        throw new Error(error);
    }

    componentDidMount() {
        newsapi.v2.topHeadlines({            
            q: '',
            category: '',
            language: 'en',
            country: 'us',
            pageSize: 4
        }).then(response => {
            console.log(response)
            this.setState({
                articles: response.articles
            });
            this.setState({isLoading: false});
        })
    }

    render() {

        const { articles, isLoading } = this.state;

        const articleslist = articles.map((item, index) =>
            <Col key={`${item.source.id}_${index}`} xs={12} md={6}>
                {/* <Row>
                    <Col>
                        <Image src={item.urlToImage} alt={item.title} thumbnail />
                    </Col>
                    <Col>
                        <h4><a href={item.url}>{item.title}</a></h4>
                        <p>{item.description}</p>
                    </Col>
                </Row> */}
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={item.urlToImage}
                        alt={item.title}
                    />
                    <Media.Body>
                        <h5><a href={item.url}>{item.title}</a></h5>
                        <p>{item.description}</p>
                    </Media.Body>
                    </Media>
            </Col>
        );

        return (
            <Container>
                <section>
                    <Row>
                        <Col xs={12} md={8}>
                            <CarouselComponent />
                        </Col>
                        <Col xs={6} md={4}>
                            <p>T9A the Ocho</p>
                            <p>ФСНИ – это ...</p>
                            <p>THE SCRAMBLE</p>
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
                    {isLoading && 'loading...'}  
                    <Row>
                        {articleslist}                   
                    </Row>
                    <Link to='/'>Посмотреть все новости</Link>                                   
                </section>
            </Container>
        )
    }
    
    
}

export default Home;