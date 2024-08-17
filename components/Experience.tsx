import React, { FC, useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SectionTitle from "./SectionTitle";
import Modal from "./Modal";

interface ExperienceProps {
  extraClass?: string;
}

const Experience: FC<ExperienceProps> = ({ extraClass }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <section
      className={`experience__area fix p-relative pt-120 pb-120 ${extraClass}`}
    >
      <>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="experience__shape">
          <img
            className="experience-s-1"
            src="/assets/images/shape/experience/experience-s-1.png"
            alt=""
          />
          <img
            className="experience-s-2"
            src="/assets/images/shape/experience/experience-s-2.png"
            alt=""
          />
          <img
            className="experience-s-3 d-none d-lg-block"
            src="/assets/images/shape/experience/experience-s-3.png"
            alt=""
          />
          <img
            className="experience-s-4"
            src="/assets/images/shape/experience/experience-s-4.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={9} sm={10}>
              <div className="experience__content">
                <SectionTitle
                  subTitle="25 Years Of Experience"
                  titleFirst="Ready to get our"
                  titleSecond="digital services?"
                />
                <p>
                  That&apos;s not on the roadmap losing these latest prospects
                  is like putting socks on an octopus to give you a heads-up.
                </p>
                <Link href="/contact" className="m-btn mt-35">
                  Start a Project
                </Link>
              </div>
            </Col>
            <Col lg={6} md={9}>
              <div className="experience__video-btn">
                <span onClick={openModal}>
                  <i className="fas fa-play"></i>
                </span>
              </div>
              <div className="experience__thumb text-end">
                <img
                  src="/assets/images/experience/experience-img.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </section>
  );
};

export default Experience;
