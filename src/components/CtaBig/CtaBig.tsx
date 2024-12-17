"use client";

import React from "react";
import Image from "next/image";

import freeTrialImg from "/public/images/free-trial-img.png";

import styles from "./CtaBig.module.scss";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

interface CtaBigProps {
  title: String;
  description: String;
  buttonCtaOneLabel: String;
  buttonCtaOneLink: URL;
  buttonCtaTwoLabel: String;
  buttonCtaTwoLink: URL;
  media: { url: string; alternativeText: string };
  isBig: Boolean;
}

const CtaBig: React.FC<CtaBigProps> = ({
  title,
  description,
  buttonCtaOneLabel,
  buttonCtaOneLink,
  buttonCtaTwoLabel,
  buttonCtaTwoLink,
  isBig,
  media,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.image}>
                <Image
                  src={freeTrialImg}
                  alt="image"
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={styles.content}>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default CtaBig;
