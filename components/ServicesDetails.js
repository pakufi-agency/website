import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';

const ServicesDetails = () => {
    return (
        <section className="services__details p-relative pt-120 pb-230">
                <div className="services__details-shape">
                    <img className="s-details-s-1" src="assets/images/shape/services/s-details-s-1.png" alt=""/>
                    <img className="s-details-s-2 d-none d-sm-block" src="assets/images/shape/services/s-details-s-2.png" alt=""/>
                    <img className="s-details-s-3" src="assets/images/shape/services/s-details-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row> 
                        <Col xl={4} lg={{span:4, order:'first'}} xs={{order:'last'}}>
                            <ServiceSidebar/>
                        </Col>                           
                        <Col xl={8} lg={8}>
                            <div className="services__details-thumb mb-60">
                                <img src="assets/images/services-details/s-details-img.jpg" alt=""/>
                            </div>
                            <div className="services__details-content">
                                <h2>Web Development</h2>
                                <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  We&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                                <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                                <div className="key__factors">    
                                    <div className="key__factors-title">
                                        <h3>Key Factors</h3>
                                    </div>                                     
                                    <div className="key__factors-wrapper d-flex">
                                        <div className="key__factors-content mb-40 d-sm-flex">
                                            <div className="key__factors-icon">
                                                <i className="fa-solid fa-briefcase"></i>                                            
                                            </div>
                                            <div className="key__factors-text">
                                                <h5>Business Automation</h5>
                                                <p>Energy only home we&apos;ve ever known deciphe scended from rogue.</p>
                                            </div>
                                        </div>
                                        <div className="key__factors-content mb-40 d-sm-flex">
                                            <div className="key__factors-icon">
                                                <i className="fa-solid fa-chart-bar"></i>                                            
                                            </div>
                                            <div className="key__factors-text">
                                                <h5>Critical Analysis</h5>
                                                <p>Energy only home we&apos;ve ever known deciphe scended from rogue.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="key__factors-wrapper d-flex">
                                        <div className="key__factors-content mb-40 d-sm-flex">
                                            <div className="key__factors-icon">
                                                <i className="fa-solid fa-unlock-keyhole"></i>                                            
                                            </div>
                                            <div className="key__factors-text">
                                                <h5>Risk Protection</h5>
                                                <p>Energy only home we&apos;ve ever known deciphe scended from rogue.</p>
                                            </div>
                                        </div>
                                        <div className="key__factors-content mb-40 d-sm-flex">
                                            <div className="key__factors-icon">
                                                <i className="fa-solid fa-file-lines"></i>                                            
                                            </div>
                                            <div className="key__factors-text">
                                                <h5>Annual Report</h5>
                                                <p>Energy only home we&apos;ve ever known deciphe scended from rogue.</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>                                     
                                <div className="key__benefits">            
                                    <div className="key__benefits-title">
                                        <h3>Key Benefits</h3>
                                    </div>
                                    <div className="key__benefits-content">
                                        <ul>
                                            <li>Sea of Tranquility dispassionate observer dream.</li>
                                            <li>Muse about as a patch of light brain is the seed of intelligence.</li>
                                            <li>The only home we&apos;ve ever known dream of the mind&apos;s eye.</li>
                                        </ul>
                                    </div>                                   
                                </div>
                                <p>Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we&apos;ve ever known radio telescope decipherment descended.</p>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </section>
    );
};

export default ServicesDetails;