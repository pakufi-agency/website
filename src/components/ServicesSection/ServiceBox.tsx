"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image, { StaticImageData } from "next/image";

import styles from "./ServiceBox.module.scss";

interface ServiceBoxProps {
  title: string;
  description: string;
  link: string;
  icon: StaticImageData;
}

interface ServiceBoxesProps {
  services: ServiceBoxProps[];
}

const ServiceBox: React.FC<ServiceBoxesProps> = ({ services }) => {
  return (
    <div className={`${styles.solutionsArea}`}>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-md-6">
              <div className={styles.singleSolutionsBox}>
                <div className={styles.icon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p>{service.description}</p>
                <Link href={service.link} className={styles.learnMoreButton}>
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
