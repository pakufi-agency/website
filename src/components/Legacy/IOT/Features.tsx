"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg1 from "/public/images/iot-features-image/iot-feature-image1.png";
import featureImg2 from "/public/images/iot-features-image/iot-feature-image2.png";

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
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

              <Link href="#" className="btn btn-primary" >
                Explore More
              </Link>
            </div>

            <div
              className="col-lg-6 iot-features-image"
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

      <div className="iot-features-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 iot-features-image"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image src={featureImg2} alt="image" width={474} height={433} />
            </div>

            <div className="col-lg-6 iot-features-content">
              <h3>How Can Your City Use IoT Technology?</h3>
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

              <Link href="#" className="btn btn-primary" >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
