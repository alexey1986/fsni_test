import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const FooterComponent = () => {
    return (
        <div className="footer bg-dark">
            <Container>
                <Row>
                    <Col> 
                        <ul className="list-inline footer__links">
                            <li>
                                <Link to='/calendar'>Турниры</Link>
                            </li>
                            <li>
                                <Link to='/news'>Новости</Link> |
                            </li>
                            <li>
                                <Link to='/blogs'>Блоги</Link> |
                            </li>
                            <li>
                                <Link to='/'>О проекте</Link>
                            </li>
                        </ul>

                        Правила пользования сайтом   |   Информация о сайте   |   Техническая информация   |   Контакты   |   Защита персональных данных   |   Пользовательское соглашение АО «БАЙЕР»

                        <p>Информация, представленная на данном сайте, направлена на повышение осведомленности о вопросах женского здоровья. Данная информация не заменяет консультации специалиста здравоохранения. Пожалуйста, обратитесь к своему лечащему врачу в случае возникновения вопросов.</p> 
                        <p>Если Вы хотите сообщить о побочном явлении или жалобе на качество продукции, пожалуйста, свяжитесь со специалистом здравоохранения (например, врачом или фармацевтом) или обратитесь в регулярные органы. Обращения можно также направлять по следующему адресу: drugsafety.russia@bayer.com </p>
                        <p className="copyright small">© 2016 АО «БАЙЕР». Все права защищены. L.RU.MKT.09.2017.0422</p>
                    </Col>
                </Row>                
            </Container>
        </div>
    )
}

export default FooterComponent;