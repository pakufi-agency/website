"use client";

import React from "react";
// import Link from "next/link";
import * as Icon from "react-feather";
import robot from "/public/images/icon4.png";
import chip from "/public/images/icon5.png";
import mindChip from "/public/images/icon6.png";
import drone from "/public/images/icon7.png";

import Image, { StaticImageData } from "next/image";

import styles from "./ServiceBox.module.scss";

interface ServiceBoxProps {
  name: string;
  description: string;
  icon: string;
}

interface ServiceBoxesProps {
  services: ServiceBoxProps[];
}

const ServiceBox: React.FC<ServiceBoxesProps> = ({ services }) => {
  const getImage = (iconName: string): StaticImageData => {
    switch (iconName) {
      case "drone":
        return drone;
      case "mindChip":
        return mindChip;
      case "robot":
        return robot;
      case "chip":
        return chip;
      default:
        return robot; // Fallback image
    }
  };

  return (
    <div className={`${styles.solutionsArea}`}>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-md-6">
              <div className={styles.singleSolutionsBox}>
                <div className={styles.singleSolutionsBoxTitle}>
                  <div className={styles.icon}>
                    <Image
                      src={getImage(service.icon)}
                      alt={service.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3>{service.name}</h3>
                </div>
                <p>{service.description}</p>
                {/* <Link href={service.link} className={styles.learnMoreButton}>
                  <Icon.PlusCircle /> Learn More
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
