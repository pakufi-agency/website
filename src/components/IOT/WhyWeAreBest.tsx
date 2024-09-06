"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/icon1.png";
import icon2 from "/public/images/icon2.png";
import icon3 from "/public/images/icon3.png";

const WhyWeAreBest = () => {
  return (
    <>
      <div className="iot-why-choose-us pt-80">
        <div className="container">
          <div className="section-title">
            <h2>Why We Are Best From Others</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <div className="single-iot-box">
                <div className="icon">
                  <Image src={icon1} alt="image" width={60} height={60} />
                </div>
                <h3>Digital Technology</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              <div className="single-iot-box">
                <div className="icon">
                  <Image src={icon2} alt="image" width={60} height={60} />
                </div>
                <h3>Business Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <div className="single-iot-box">
                <div className="icon">
                  <Image src={icon3} alt="image" width={60} height={60} />
                </div>
                <h3>Data Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeAreBest;
