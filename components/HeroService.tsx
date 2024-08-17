import React, { FC } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

interface HeroServiceProps {
  serviceIcon: string;
  serviceTitle: string;
  serviceDesc: string;
  serviceLink: string;
  bgClass?: string;
  iconClass?: string;
  btnClass?: string;
}

const HeroService: FC<HeroServiceProps> = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceLink,
  bgClass = "",
  iconClass = "",
  btnClass = "",
}) => {
  return (
    <Col xl={4} lg={4} md={6}>
      <div className={`single__bg ${bgClass}`}>
        <div className="single__service single__service-2">
          <div className={`single__service-icon ${iconClass}`}>
            <img src={serviceIcon} alt="icon" />
          </div>
          <div className="single__service-content single__service-content-2">
            <h3>{serviceTitle}</h3>
            <p>{serviceDesc}</p>
          </div>
          <div className="single__service-link">
            <Link href={serviceLink} className={`s-btn ${btnClass}`}>
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default HeroService;