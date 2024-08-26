import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

interface ServiceData {
  serviceIcon: string;
  serviceTitle: string;
  serviceDesc: string;
  serviceLink: string;
}

export const SERVICE_DATA: ServiceData[] = [
  {
    serviceIcon: "/assets/images/icon/s-icon-1.png",
    serviceTitle: "UI/UX Design",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-2.png",
    serviceTitle: "Web Development",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-3.png",
    serviceTitle: "App Development",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-4.png",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-5.png",
    serviceTitle: "Content Writing",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-6.png",
    serviceTitle: "E-commerce",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
];

interface ServicesProps {
  extraClass?: string;
}

const Services: FC<ServicesProps> = ({ extraClass }) => {
  return (
    <section
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
    >
      <div className="services__shape">
        <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
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
    </section>
  );
};

export default Services;
