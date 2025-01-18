"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./CtaBig.module.scss";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";
import freeTrialImg from "/public/images/free-trial-img.png";

interface CtaBigProps {
  title: string;
  description: string;
  buttonCtaOneLabel: string;
  buttonCtaOneLink: string;
  buttonCtaTwoLabel: String;
  buttonCtaTwoLink: string;
  media: { url: string; alternativeText: string };
}

const CtaBig: React.FC<CtaBigProps> = ({
  title,
  description,
  buttonCtaOneLabel,
  buttonCtaOneLink,
  buttonCtaTwoLabel,
  buttonCtaTwoLink,
  media,
}) => {
  console.log("media", media);

  return (
    <>
      <div className={styles.container}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.image}>
                <Image
                  src={freeTrialImg}
                  alt="image"
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className={styles.content}>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
                <div className={styles.buttonsContainer}>
                  {buttonCtaOneLink && (
                    <Link
                      href={buttonCtaOneLink}
                      className={`btn btn-light ${styles.button}`}
                    >
                      {buttonCtaOneLabel}
                    </Link>
                  )}
                  {buttonCtaTwoLink && (
                    <Link
                      href={buttonCtaTwoLink}
                      className={`btn btn-light ${styles.button}`}
                    >
                      {buttonCtaTwoLabel}
                    </Link>
                  )}
                </div>
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
