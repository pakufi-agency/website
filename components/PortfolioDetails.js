import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PortfolioSidebar from './PortfolioSidebar';

const PortfolioDetails = () => {
    return (
        <section className="portfolio__details p-relative pt-120 pb-250">
                <div className="portfolio__details-shape">
                    <img className="p-details-1" src="assets/images/shape/portfolio/p-s-2.png" alt=""/>
                    <img className="p-details-2 d-none d-sm-block" src="assets/images/shape/portfolio/p-s-5.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-40">                        
                        <Col xl={8} lg={8} md={8}>                            
                            <div className="portfolio__details-thumb">
                                <img src="assets/images/portfolio/p-d-1.jpg" alt=""/>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} className="d-none d-md-block">                            
                            <div className="portfolio__details-thumb-2">
                                <img src="assets/images/portfolio/p-d-2.jpg" alt=""/>
                                <img src="assets/images/portfolio/p-d-3.jpg" alt=""/>
                            </div>
                        </Col>                        
                    </Row>
                    <Row> 
                        <Col xl={4} lg={5} md={{span: 5, order:'first'}} xs={{order:'last'}}>
                            <PortfolioSidebar/>
                        </Col>                           
                        <Col xl={{span:7, offset:1}} lg={7} md={7}>
                            <div className="portfolio__details-content">
                                <h2>Creative website design</h2>
                                <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  We&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                                <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                                <div className="values">                                        
                                    <div className="values__content d-flex align-items-center">
                                        <div className="values__content-icon">
                                            <i className="fa-solid fa-screwdriver-wrench"></i>                                            
                                        </div>
                                        <div className="values__content-text">
                                            <h3>Best Solutions Provider</h3>
                                            <p>Energy only home we&apos;ve ever known radio telescope decipherment descended from rogue.</p>
                                        </div>
                                    </div>
                                    <div className="values__content d-flex align-items-center">
                                        <div className="values__content-icon">
                                            <i className="fa-solid fa-screwdriver-wrench blue"></i>                                            
                                        </div>
                                        <div className="values__content-text">
                                            <h3>Creative UI/UX Design</h3>
                                            <p>Energy only home we&apos;ve ever known radio telescope decipherment descended from rogue.</p>
                                        </div>
                                    </div>
                                    <div className="values__content d-flex align-items-center">
                                        <div className="values__content-icon">
                                            <i className="fa-solid fa-screwdriver-wrench green"></i>                                            
                                        </div>
                                        <div className="values__content-text">
                                            <h3>Professional Services</h3>
                                            <p>Energy only home we&apos;ve ever known radio telescope decipherment descended from rogue.</p>
                                        </div>
                                    </div>
                                </div>                                    
                                <p>Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment desc.</p>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </section>
    );
};

export default PortfolioDetails;