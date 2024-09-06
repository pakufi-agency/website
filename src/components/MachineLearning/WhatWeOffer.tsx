"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/icon4.png";
import icon2 from "/public/images/icon5.png";
import icon3 from "/public/images/icon6.png";
import icon4 from "/public/images/icon7.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon1} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Robotic Automation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon2} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Cognitive Automation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon3} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Cognitive Engagement
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon4} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Security & Surveillance
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape5">
          <Image src={shape5} alt="shape" width={182} height={146} />
        </div>
        <div className="shape6 rotateme">
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

export default WhatWeOffer;
