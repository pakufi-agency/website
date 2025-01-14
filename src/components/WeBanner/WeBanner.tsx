"use client";

import React from "react";
import Image from "next/image";

import styles from "./WeBanner.module.scss";

import ctaShape from "/public/images/cta-shape.png";
import ctaShape2 from "/public/images/cta-shape2.png";
import circle from "/public/images/circle.png";

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

        <div className={styles.circleBox}>
          <Image src={circle} alt="image" width={256} height={507} />
        </div>
        <div className={styles.ctaShape}>
          <Image src={ctaShape} alt="image" width={421} height={401} />
        </div>
      </div>
    </>
  );
};

export default WeBanner;
