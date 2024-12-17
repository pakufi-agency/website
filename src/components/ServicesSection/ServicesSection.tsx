"use client";

import React from "react";
import ServiceBox from "./ServiceBox";

import styles from "./Services.module.scss";

interface ServiceSectionProps {
  sectionTitle: String;
  sectionSubtitle: String;
  services: {
    name: string;
    description: string;
    icon: string;
  };
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  services,
}) => {
  return (
    <>
      <div className={`${styles.serviceSectionContainer} pt-80`}>
        <div className="container">
          <div className={`section-title ${styles.sectionTitleServiceSection}`}>
            <h2>{sectionTitle}</h2>
            <div className={`bar ${styles.barServiceSection}`}></div>
            <p>{sectionSubtitle}</p>
          </div>

          <div className="row justify-content-center">
            <ServiceBox services={services} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
