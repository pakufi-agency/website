"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./TextImage.module.scss";

import featureImg1 from "/public/images/iot-features-image/iot-feature-image1.png";

const TextImage = () => {
  return (
    <>
      <div className="ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 ${styles.content}`}>
              <h3>App Development for Connected Devices</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>

              <Link href="#" className="btn btn-primary">
                Explore More
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

export default TextImage;
