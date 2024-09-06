"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import serviceImg1 from "/public/images/repair-services-img/repair-services-img1.jpg";
import serviceImg2 from "/public/images/repair-services-img/repair-services-img2.jpg";
import serviceImg3 from "/public/images/repair-services-img/repair-services-img3.jpg";
import serviceImg4 from "/public/images/repair-services-img/repair-services-img4.jpg";
import serviceImg5 from "/public/images/repair-services-img/repair-services-img5.jpg";
import serviceImg6 from "/public/images/repair-services-img/repair-services-img6.jpg";

const OurServices = () => {
  return (
    <>
      <div className="iot-services-area pt-80 pb-50">
        <div className="container justify-content-center">
          <div className="section-title">
            <h2>Our Featured Services that We Provide</h2>
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
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg1.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>

                <h3>
                  Software Development <br /> IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
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
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg2.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>

                <h3>
                  Smart Home, Office <br /> IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
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
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg3.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-skyline"></i>
                </div>

                <h3>
                  Smart City <br />
                  IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg4.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-car-insurance"></i>
                </div>

                <h3>
                  Automative <br /> IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg5.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>

                <h3>
                  Industrial <br /> IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg6.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-chip"></i>
                </div>

                <h3>
                  System on Chip <br /> IoT Solutions
                </h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
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

export default OurServices;
