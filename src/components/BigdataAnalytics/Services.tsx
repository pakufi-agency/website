"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/bigdata-analytics/icon1.png";
import icon2 from "/public/images/bigdata-analytics/icon2.png";
import icon3 from "/public/images/bigdata-analytics/icon3.png";
import icon4 from "/public/images/bigdata-analytics/icon4.png";
import icon5 from "/public/images/bigdata-analytics/icon5.png";
import icon6 from "/public/images/bigdata-analytics/icon6.png";

import rectangle from "/public/images/bigdata-analytics/rectangle.png";

const Services = () => {
  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Services We Can Help You With</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon1} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Big Data Analysis
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon2} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Robust Analytics
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon3} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Marketing Analytics
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon4} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Data Visualization
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon5} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Securities Research
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image src={icon6} alt="image" width={50} height={50} />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Data Governance
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/services/service-details/"
                  className="learn-more-btn"
                  
                >
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className="shape">
                  <Image src={rectangle} alt="image" width={230} height={226} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
