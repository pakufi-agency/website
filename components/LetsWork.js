import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const LetsWork = () => {
    return (
        <section className="lets-work__area p-relative pt-165 pb-160">
            <div className="lets-work__shape">
                <img className="lets-work-shape-1" src="assets/images/shape/lets-work/lets-work-s-1.png" alt=""/>
                <img className="lets-work-shape-2" src="assets/images/shape/lets-work/lets-work-s-2.png" alt=""/>
                <img className="lets-work-shape-3 d-none d-sm-block" src="assets/images/shape/lets-work/lets-work-s-3.png" alt=""/>
                <img className="lets-work-shape-4 d-none d-sm-block" src="assets/images/shape/lets-work/lets-work-s-4.png" alt=""/>
            </div>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="lets-work__title text-center">
                            <SectionTitle subTitle="Let’s Work Together"
                            titleFirst="Need a successful"
                            titleSecond="project?"
                            /> 
                            <Link href="/contact">
                            <a className="m-btn mt-35">Estimate Project</a>
                            </Link>
                        </div>
                    </Col>
                </Row>                      
            </Container>
        </section>
    );
};

export default LetsWork;