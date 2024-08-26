import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const Facts: FC = () => {
  return (
    <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
      <Container>
        <Row>
          <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
            <div className="facts__thumb">
              <div className="facts__thumb-shape">
                <img
                  className="facts-s-1"
                  src="/assets/images/shape/facts/facts-s-1.png"
                  alt=""
                />
                <img
                  className="facts-s-2"
                  src="/assets/images/shape/facts/facts-s-2.png"
                  alt=""
                />
                <img
                  className="facts-s-3"
                  src="/assets/images/shape/facts/facts-s-3.png"
                  alt=""
                />
                <img
                  className="facts-s-4 d-none d-md-block"
                  src="/assets/images/shape/facts/facts-s-4.png"
                  alt=""
                />
              </div>
              <div className="facts__thumb-image">
                <img src="/assets/images/facts/facts-img.png" alt="" />
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={7} lg={7} md={9}>
            <div className="facts__content">
              <div className="facts__content-text">
                <SectionTitle
                  subTitle="Why work with us?"
                  titleFirst="Experience, knowlede"
                  titleSecond="and human center agency"
                />
                <p>
                  We have years of experience in IT industry, teaching and
                  international development. Professionality, detail oriented,
                  communication and mental health are our main priority We are a
                  small team and will give you all the attention you need. Join
                  the family!
                </p>
              </div>
              <div className="facts__counter-content d-flex">
                <div className="facts__counter-text">
                  <h2>
                    <CountUp end={15} duration={5} /> Years
                  </h2>
                  <h5>Somethign amazing we have done</h5>
                  <p>Preserve and cherish that pale blue dot star stuff.</p>
                </div>
                <div className="facts__counter-text">
                  <h2>
                    <CountUp end={25} duration={5} /> Countries
                  </h2>
                  <h5>Another number of amazing things!</h5>
                  <p>The carbon in our appies event not nosunrise.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Facts;
