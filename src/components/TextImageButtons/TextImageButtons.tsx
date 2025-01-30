"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./TextImageButtons.module.scss";

import featureImg1 from "/public/images/legacy/iot-features-image/iot-feature-image1.png";

interface TextImageButtons {
  title: String;
  content: String;
  buttonOneLabel: String;
  buttonOneLink: URL;
  buttonTwoLabel: String;
  buttonTwoLink: URL;
}

const TextImageButtons: React.FC<TextImageButtons> = ({
  title,
  content,
  buttonOneLabel,
  buttonOneLink,
  buttonTwoLabel,
  buttonTwoLink,
}) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 ${styles.content}`}>
              <h3>{title}</h3>
              <p>{content}</p>

              <Link
                href={buttonOneLink}
                className={`btn btn-primary ${styles.buttonLink}`}
              >
                {buttonOneLabel}
              </Link>

              <Link
                href={buttonTwoLink}
                className={`btn btn-primary ${styles.buttonLink}`}
              >
                {buttonTwoLabel}
              </Link>
            </div>

            <div
              className={`col-lg-6 ${styles.image}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg1} alt="image" width={499} height={370} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextImageButtons;
