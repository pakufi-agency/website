"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import bannerBgImg from "/public/images/bigdata-analytics/main-banner.jpg";

const MainBanner = () => {
  return (
    <>
      <div 
        className="bigdata-analytics-banner"
        style={{ backgroundImage: `url(${bannerBgImg.src})` }}
      >
        <div className="container">
          <div className="bigdata-analytics-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Leading Big Data Analytics Company
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
              
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="banner-boxes-area">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Server />
                  </div>
                  <h3>Analyze Your Data</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Code />
                  </div>
                  <h3>Customized Plan</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Users />
                  </div>
                  <h3>Implement Solution</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
