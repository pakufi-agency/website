"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-monitor"></i>
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Research
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Market Research
                </Link>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Investment Research
                </Link>

                <Link
                  href="/services/service-details/"
                  className="read-more-btn"
                  
                >
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  <Link href="/services/service-details/" >
                    Analytics
                  </Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Data Analytics
                </Link>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Business Intelligence
                </Link>

                <Link
                  href="/services/service-details/"
                  className="read-more-btn"
                  
                >
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Technology
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit consectetur, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.
                </p>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Intelligence Automation
                </Link>

                <Link
                  href="/services/service-details/"
                  className="link"
                  
                >
                  Quality Engineering
                </Link>

                <Link
                  href="/services/service-details/"
                  className="read-more-btn"
                  
                >
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
