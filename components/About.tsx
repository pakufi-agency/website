import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  subTitle: string;
  titleFirst: string;
  titleSecond: string;
}

const About: FC<AboutProps> = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className="about__area fix p-relative pt-120 pb-120 about__pb">
      <Container>
        <Row>
          <Col lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img
                  className="about-s-1 d-none d-lg-block"
                  src="/assets/images/shape/about/about-s-1.png"
                  alt=""
                />
                <img
                  className="about-s-2 d-none d-md-block"
                  src="/assets/images/shape/about/about-s-2.png"
                  alt=""
                />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/about/about-img.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about__content">
              <p>
                Kindling the energy hidden in matter the only home we&apos;ve
                ever known radio telescope decipherment descended from
                astronomers rogue. Prime number network of wormholes take root.
              </p>
              <ul>
                <li>Sea of Tranquility dispassionate observer dream.</li>
                <li>
                  Muse about as a patch of light brain is the seed of
                  intelligence.
                </li>
                <li>The only home we`ve ever known dream of the mind`s eye.</li>
              </ul>
            </div>
            <div className="about__counter-bg d-none d-sm-block">
              <div className="about__counter-content d-flex">
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={280} duration={5} />+
                  </h2>
                  <p>Project Delivered</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={500} duration={5} />+
                  </h2>
                  <p>Happy Clients</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={3500} duration={5} />+
                  </h2>
                  <p>Total Coffees</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
