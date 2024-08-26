import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import { SERVICE_DATA } from "./Services";

const HeroTwo: FC = () => {
  return (
    <section className="hero__area-2 fix p-relative">
      <div className="hero__shape-2">
        <img
          className="hero2-s-1"
          src="/assets/images/shape/hero2/hero2-s-1.png"
          alt=""
        />
        <img
          className="hero2-s-2"
          src="/assets/images/shape/hero2/hero2-s-2.png"
          alt=""
        />
        <img
          className="hero2-s-3 d-none d-xl-block"
          src="/assets/images/shape/hero2/hero2-s-3.png"
          alt=""
        />
        <img
          className="hero2-s-4 d-none d-lg-block"
          src="/assets/images/shape/hero2/hero2-s-4.png"
          alt=""
        />
        <img
          className="hero2-s-5"
          src="/assets/images/shape/hero2/hero2-s-5.png"
          alt=""
        />
        <img
          className="hero2-s-6"
          src="/assets/images/shape/hero2/hero2-s-6.png"
          alt=""
        />
      </div>
      <div className="hero__height hero__pt d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={6} sm={10}>
              <div className="hero__content-2">
                <h4 className="section__sub-title">
                  Let's make the <s>web</s> word a better place
                </h4>
                <h2 className="hero__title hero__title-2">
                  <span>WE ARE PAKUFI</span>
                  <br />A Tech Agency with focus on humans
                </h2>
                <p>
                  We help individuals and business to make their IT solution
                  outstanding while empowering talent from developing nations to
                  go one step closer to freedom.
                </p>
                <Link href="/contact" className="m-btn mt-35">
                  Let's talk!
                </Link>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={10}>
              <div className="hero__thumb-2 text-end">
                <div className="hero__thumb-2-image">
                  <img src="/assets/images/hero/hero-img-2.png" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="mb-55">
            <Col xl={6}>
              <div className="services__title">
                <SectionTitle
                  subTitle="Services"
                  titleFirst="What we do"
                  titleSecond=""
                />
              </div>
            </Col>
          </Row>
          <Row>
            {SERVICE_DATA.map(
              (
                { serviceIcon, serviceTitle, serviceDesc, serviceLink },
                index
              ) => (
                <ServiceItem
                  key={index}
                  serviceIcon={serviceIcon}
                  serviceTitle={serviceTitle}
                  serviceDesc={serviceDesc}
                  serviceLink={serviceLink}
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
