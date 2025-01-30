"use client";

import React from "react";
import Image from "next/image";

import styles from "./WeBanner.module.scss";

import ctaShape from "/public/images/legacy/cta-shape.png";
import circle from "/public/images/backgrounds/green-spiral-bg.svg";

interface WeBannerProps {
  statmentOne: String;
  statmentTwo: String;
  statmentThree: String;
}

const WeBanner: React.FC<WeBannerProps> = ({
  statmentOne,
  statmentTwo,
  statmentThree,
}) => {
  return (
    <>
      <div className={`${styles.ctaArea}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className={styles.ctaContent}>
                <h2>{statmentOne}</h2>
                <h2>{statmentTwo}</h2>
                <h2>{statmentThree}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.circleBox}>
          <Image src={circle} alt="image" width={256} height={507} />
        </div> */}
        <div className={`${styles.ctaShape}`}>
          <Image src={circle} alt="image" width={521} height={501} />
        </div>
      </div>
    </>
  );
};

export default WeBanner;
