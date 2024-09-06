"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurServices = () => {
  return (
    <>
      <div className="services-area-two pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Incredible Infrastructure
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Email Notifications
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Best Analytics Audits
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Simple Dashboard
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Information Retrieval
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.HardDrive />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Deep Technical SEO
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.MousePointer />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Drag & Drop Functionality
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Deadline Reminders
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="900"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Send />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Modern Keyword Analysis
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
