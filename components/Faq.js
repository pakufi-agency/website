import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from './SectionTitle';

const Faq = () => {
    return (
        <section className="faq__area fix p-relative pt-105 pb-60 faq__rs">
                <div className="faq__shape">
                    <img className="faq-shape-1 d-none d-lg-block" src="/assets/images/shape/faq/faq-s-1.png" alt=""/>
                    <img className="faq-shape-2" src="/assets/images/shape/faq/faq-s-2.png" alt=""/>
                    <img className="faq-shape-3 d-none d-lg-block" src="/assets/images/shape/faq/faq-s-3.png" alt=""/>
                    <img className="faq-shape-4 d-none d-lg-block" src="/assets/images/shape/faq/faq-s-4.png" alt=""/>
                </div>
                <Container>
                    <div className="faq__bg">
                        <Row className="align-items-center">
                            <Col xl={6} lg={5}>
                                <div className="faq__thumb">
                                    <div className="faq__thumb-image">
                                        <img src="/assets/images/faq/faq-img.jpg" alt=""/>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} lg={7} md={10}>
                                <div className="faq__content">
                                    <SectionTitle subTitle="Faq"
                                    titleFirst="Frequently asked" titleSecond="questions"
                                    />                                     
                                    <div className="faq__wrapper">
                                        <Accordion defaultActiveKey="0" flush>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>How To Gain Knowledge About SEO?</Accordion.Header>
                                                <Accordion.Body>
                                                Code market-facing out of scope, yet power but inside yet
                                                performance review up the flagpole bazooka that run it past
                                                thright in and they its all greek.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Benefit Of Digital Marketing?</Accordion.Header>
                                                <Accordion.Body>
                                                Code market-facing out of scope, yet power but inside yet
                                                performance review up the flagpole bazooka that run it past
                                                thright in and they its all greek.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Business Development Most Reasons?</Accordion.Header>
                                                <Accordion.Body>
                                                Code market-facing out of scope, yet power but inside yet
                                                performance review up the flagpole bazooka that run it past
                                                thright in and they its all greek.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Improve Performance and Efficiency</Accordion.Header>
                                                <Accordion.Body>
                                                Code market-facing out of scope, yet power but inside yet
                                                performance review up the flagpole bazooka that run it past
                                                thright in and they its all greek.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </Col>                        
                        </Row>
                    </div>
                </Container>                              
            </section>
    );
};

export default Faq;