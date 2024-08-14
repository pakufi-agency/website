import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const Project = ({extraClass, subTitle}) => {
    return (
        <section className={`project__area ${extraClass} p-relative pt-130`}>
            <div className="project__shape">
                <img className="project-s-1" src="/assets/images/shape/project/p-s-1.png" alt=""/>
                <img className="project-s-2" src="/assets/images/shape/project/p-s-2.png" alt=""/>
                <img className="project-s-3" src="/assets/images/shape/project/p-s-3.png" alt=""/>
                <img className="project-s-4 d-none d-lg-block" src="/assets/images/shape/project/p-s-4.png" alt=""/>
            </div>
            <Container>
                <Row>
                    <Col xl={9} lg={10}>
                        <div className="project__thumb d-sm-flex">
                            <div className="project__thumb-1">
                                <img src="/assets/images/project/project-img-1.jpg" alt=""/>
                            </div>
                            <div className="project__thumb-2">
                                <img src="/assets/images/project/project-img-2.jpg" alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 7, offset: 5 }} lg={{ span: 9, offset: 3 }}  md={{ span: 10, offset: 2 }} sm={11}>
                        <div className="project__wrapper">
                            <div className="project__content">
                                <div className="project__title">
                                    <SectionTitle subTitle={subTitle}
                                    titleFirst="Like what you see with"
                                    titleSecond="our online products?"
                                    />
                                    <p>That&apos;s not on the roadmap losing these latest prospects is like putting socks on an octopus to give you a heads-up.</p> 
                                    <Link href="/contact">
                                        <a className="m-btn mt-35">Start a Project</a>
                                    </Link>
                                </div>                                    
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>     
        </section>
    );
};

export default Project;