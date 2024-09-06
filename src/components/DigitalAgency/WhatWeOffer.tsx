"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import bgIcon from "/public/images/agency-image/agency-icon-bg.png";
import agencyShape1 from "/public/images/agency-image/agency-shape1.png";

const WhatWeOffer = () => {
  return (
    <>
      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">What We Offer</span>
            <h2>Our Featured Solutions</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-landscape"></i>
                  <Image src={bgIcon} alt="image" width={93} height={88} />
                </div>

                <h3>
                  <Link href="/services/service-details/" >
                    Programmatic Advertising
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
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
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-bar-chart-alt"></i>
                  <Image src={bgIcon} alt="image" width={93} height={88} />
                </div>

                <h3>
                  <Link href="/services/service-details/" >
                    Strategy & Research
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
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
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-devices"></i>
                  <Image src={bgIcon} alt="image" width={93} height={88} />
                </div>

                <h3>
                  <Link href="/services/service-details/" >
                    Design & Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
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
              <div className="solutions-box">
                <div className="icon">
                  <i className="bx bx-chalkboard"></i>
                  <Image src={bgIcon} alt="image" width={93} height={88} />
                </div>

                <h3>
                  <Link href="/services/service-details/" >
                    Branding & Marketing
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore.
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

        <div className="shape9 slow mobile-dnone">
          <Image src={agencyShape1} alt="image" width={299} height={278} />
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
