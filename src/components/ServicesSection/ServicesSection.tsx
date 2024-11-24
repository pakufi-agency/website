"use client";

import React from "react";
import ServiceBox from "./ServiceBox";

import robot from "/public/images/icon4.png";
import chip from "/public/images/icon5.png";
import mindChip from "/public/images/icon6.png";
import drone from "/public/images/icon7.png";

import styles from "./Services.module.scss";

const SERVICES = [
  {
    title: "Robotic Automation",
    description:
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "/services/service-details/",
    icon: robot,
  },
  {
    title: "AI Chip Design",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    link: "/services/service-details/",
    icon: chip,
  },
  {
    title: "Mindful Automation",
    description:
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "/services/service-details/",
    icon: mindChip,
  },
  {
    title: "Drone Innovation",
    description:
      "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "/services/service-details/",
    icon: drone,
  },
];

const WhyWeAreBest = () => {
  return (
    <>
      <div className={`${styles.serviceSectionContainer} pt-80`}>
        <div className="container">
          <div className={`section-title ${styles.sectionTitleServiceSection}`}>
            <h2>Why We Are Best From Others</h2>
            <div className={`bar ${styles.barServiceSection}`}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <ServiceBox services={SERVICES} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeAreBest;
