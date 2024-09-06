"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/icon4.png";
import icon2 from "/public/images/icon5.png";
import icon3 from "/public/images/icon6.png";
import icon4 from "/public/images/icon7.png";
import icon5 from "/public/images/icon4.png";
import icon6 from "/public/images/icon5.png";
import icon7 from "/public/images/icon6.png";
import icon8 from "/public/images/icon7.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const ServicesStyle3 = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
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

            <div className="col-lg-3 col-sm-6 col-md-6">
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

            <div className="col-lg-3 col-sm-6 col-md-6">
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

            <div className="col-lg-3 col-sm-6 col-md-6">
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

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon5} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Automatic Optimization
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

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon6} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Data Analysts
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

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon7} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Health & Manufacturing
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

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <Image src={icon8} alt="image" width={60} height={60} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Software Engineers
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

export default ServicesStyle3;
