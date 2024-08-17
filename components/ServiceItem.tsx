import React, { FC } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

interface ServiceItemProps {
  serviceIcon: string;
  serviceTitle: string;
  serviceDesc: string;
  serviceLink: string;
}

const ServiceItem: FC<ServiceItemProps> = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceLink,
}) => {
  return (
    <Col xl={4} lg={6} md={6}>
      <div className="single__bg">
        <div className="single__service">
          <div className="single__service-icon">
            <img src={serviceIcon} alt="icon" />
          </div>
          <div className="single__service-content">
            <h3>{serviceTitle}</h3>
            <p>{serviceDesc}</p>
          </div>
          <div className="single__service-link">
            <Link href={serviceLink} className="s-btn">
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItem;