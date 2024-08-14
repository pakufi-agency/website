import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import HeroService from './HeroService';

const HERO_DATA = [
    {
      serviceIcon:"/assets/images/icon/s2-icon-1.png",
      serviceTitle:"UI/UX Design",
      serviceDesc:"Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      serviceLink:"/services-details",
      bgClass:"single__bg-pink",
      iconClass:"single__service-icon-pink",
      btnClass:"s-btn-pink"
    },
    {
      serviceIcon:"/assets/images/icon/s2-icon-2.png",
      serviceTitle:"Web Development",
      serviceDesc:"Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      serviceLink:"/services-details",
      bgClass:"single__bg-yellow",
      iconClass:"single__service-icon-yellow",
      btnClass:"s-btn-yellow"
    },
    {
      serviceIcon:"/assets/images/icon/s2-icon-3.png",
      serviceTitle:"App Development",
      serviceDesc:"Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      serviceLink:"/services-details",
      bgClass:"single__bg-green",
      iconClass:"single__service-icon-green",
      btnClass:"s-btn-green"
    }
  ];

const HeroTwo = () => {
    return (
        <section className="hero__area-2 fix p-relative">
                <div className="hero__shape-2">
                    <img className="hero2-s-1" src="/assets/images/shape/hero2/hero2-s-1.png" alt=""/>
                    <img className="hero2-s-2" src="/assets/images/shape/hero2/hero2-s-2.png" alt=""/>
                    <img className="hero2-s-3 d-none d-xl-block" src="/assets/images/shape/hero2/hero2-s-3.png" alt=""/>
                    <img className="hero2-s-4 d-none d-lg-block" src="/assets/images/shape/hero2/hero2-s-4.png" alt=""/>
                    <img className="hero2-s-5" src="/assets/images/shape/hero2/hero2-s-5.png" alt=""/>
                    <img className="hero2-s-6" src="/assets/images/shape/hero2/hero2-s-6.png" alt=""/>
                </div>
                <div className="hero__height hero__pt d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={6} lg={6} md={6} sm={10}>
                                <div className="hero__content-2">
                                    <h4 className="section__sub-title">
                                        Let’s Create Great Things
                                    </h4>
                                    <h2 className="hero__title hero__title-2">
                                        <span>Digital product</span>
                                        design agency
                                    </h2>  
                                    <p>The carbon in our apple pies extraordinary claims require extra evidence permanence of the stars energy.</p>                              
                                    <Link href="/contact">
                                        <a className="m-btn mt-35">Get Started</a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={10}>
                                <div className="hero__thumb-2 text-end">
                                    <div className="hero__thumb-2-image">
                                        <img src="/assets/images/hero/hero-img-2.png" alt=""/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="hero__services">
                    <Container>
                        <Row className="mb-55">
                            <Col xl={6}>
                                <div className="services__title">
                                    <SectionTitle subTitle="Services"
                                    titleFirst="What we do"/>  
                                </div>
                            </Col>
                        </Row> 
                        <Row>
                            {HERO_DATA.map(
                                ({serviceIcon, serviceTitle, serviceDesc, serviceLink, bgClass, iconClass, btnClass}, index) => (
                                    <HeroService
                                    key={index}
                                    serviceIcon={serviceIcon}
                                    serviceTitle={serviceTitle}
                                    serviceDesc={serviceDesc}
                                    serviceLink={serviceLink}
                                    bgClass={bgClass}
                                    iconClass={iconClass}
                                    btnClass={btnClass}
                                    />
                                )
                            )}
                        </Row>
                    </Container>
                </div>
            </section>
    );
};

export default HeroTwo;