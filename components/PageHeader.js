import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

const PageHeader = ({title, crumbTitle}) => {
    return (
        <section className="page__title-area page__title-height fix d-flex align-items-center p-relative">
                <div className="page__title-shape">
                    <img className="page-title-s-1 d-none d-md-block" src="/assets/images/shape/page-title/page-title-s-1.png" alt=""/>
                    <img className="page-title-s-2" src="/assets/images/shape/page-title/page-title-s-2.png" alt=""/>
                    <img className="page-title-s-3" src="/assets/images/shape/page-title/page-title-s-3.png" alt=""/>
                    <img className="page-title-s-4" src="/assets/images/shape/page-title/page-title-s-4.png" alt=""/>
                    <img className="page-title-s-5" src="/assets/images/shape/page-title/page-title-s-5.png" alt=""/>
                    <img className="page-title-s-6" src="/assets/images/shape/page-title/page-title-s-6.png" alt=""/>
                    <img className="page-title-s-7 d-none d-md-block" src="/assets/images/shape/page-title/page-title-s-7.png" alt=""/>
                </div>
                <Container>
                    <Row className="align-items-center">                        
                        <Col xl={6} lg={6} md={6} sm={10}>                            
                            <div className="page__title-wrapper">
                                <h2 className="page__title-heading">
                                    {title}
                                </h2>  
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={10}>               
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                        <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{crumbTitle}</li>
                                </ol>
                            </nav> 
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default PageHeader;