import React, { FC, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SectionTitle from "../components/SectionTitle";

const WorkInProgress: FC = () => {
  return (
    <section className="wip__area">
      <section className={`pricing__area fix p-relative pt-120 pb-90`}>
        <div className="pricing__shape">
          <img
            className="p-shape-1"
            src="/assets/images/shape/pricing/p-s-1.png"
            alt=""
          />
          <img
            className="p-shape-2 d-none d-sm-block"
            src="/assets/images/shape/pricing/p-s-2.png"
            alt=""
          />
          <img
            className="p-shape-3 wow zoomIn"
            data-wow-delay=".8s"
            src="/assets/images/shape/pricing/p-s-3.png"
            alt=""
          />
          <img
            className="p-shape-4 d-none d-sm-block"
            src="/assets/images/shape/pricing/p-s-4.png"
            alt=""
          />
          <img
            className="p-shape-5"
            src="/assets/images/shape/pricing/p-s-5.png"
            alt=""
          />
        </div>
        <Container>
          <Row>
            <Col
              xl={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={12}
            >
              <div className="pricing__title text-center">
                <>
                  <h2 className="section__title">PAKUFI</h2>
                  {/* <h3 className="section__title">
                  <span>under construction</span>
                </h3> */}
                  <h4 className="section__sub-title">Under consturction</h4>
                </>
                <p>
                  Draw a line in the sand quick win. My capacity is full. Keep
                  it lean gain alignment we need to future-proof this plan.
                </p>
              </div>
            </Col>
          </Row>
          <div className="pricing__tab text-center"></div>
        </Container>
      </section>
    </section>
  );
};

export default WorkInProgress;
