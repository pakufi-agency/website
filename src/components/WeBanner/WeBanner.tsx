"use client";

import React from "react";
import Image from "next/image";

import styles from "./WeBanner.module.scss";

import circle from "/public/images/backgrounds/green-spiral-bg.svg";

interface WeBannerProps {
  sectionTitle: String;
  statmentOne: String;
  statmentTwo: String;
  statmentThree: String;
}

const WeBanner: React.FC<WeBannerProps> = ({
  sectionTitle,
  statmentOne,
  statmentTwo,
  statmentThree,
}) => {
  return (
    <>
      <div className={`${styles.ctaArea}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className={`${styles.ctaShape}`}>
                <Image src={circle} alt="image" width={821} height={801} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles.ctaContent}>
                <h1>{sectionTitle}</h1>
                <h2>{statmentOne}</h2>
                <h2>{statmentThree}</h2>
                <h2>{statmentTwo}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeBanner;
