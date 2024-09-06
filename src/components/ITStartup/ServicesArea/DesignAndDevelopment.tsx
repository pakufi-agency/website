"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import bigMonitor from "/public/images/services-left-image/big-monitor.png";
import creative from "/public/images/services-left-image/creative.png";
import developer from "/public/images/services-left-image/developer.png";
import flowerTop from "/public/images/services-left-image/flower-top.png";
import smallMonitor from "/public/images/services-left-image/small-monitor.png";
import smallTop from "/public/images/services-left-image/small-top.png";
import Table from "/public/images/services-left-image/table.png";
import Target from "/public/images/services-left-image/target.png";
import cercleShape from "/public/images/services-left-image/cercle-shape.png";
import serviceLeftMainPic from "/public/images/services-left-image/service-left-main-pic.png";

const DesignAndDevelopment = () => {
  return (
    <>
      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-left-image">
              <Image
                src={bigMonitor}
                alt="big-monitor"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
                width={252}
                height={149}
              />

              <Image
                src={creative}
                alt="creative"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-once="true"
                width={88}
                height={94}
              />

              <Image
                src={developer}
                alt="developer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
                width={149}
                height={230}
              />

              <Image
                src={flowerTop}
                data-wow-delay="0.6s"
                alt="flower-top"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="500"
                data-aos-once="true"
                width={127}
                height={203}
              />

              <Image
                src={smallMonitor}
                alt="small-monitor"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
                width={109}
                height={106}
              />

              <Image
                src={smallTop}
                alt="small-top"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="500"
                data-aos-once="true"
                width={56}
                height={82}
              />

              <Image
                src={Table}
                alt="table"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
                width={337}
                height={138}
              />

              <Image
                src={Target}
                alt="target"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
                data-aos-once="true"
                width={91}
                height={96}
              />

              <Image
                src={cercleShape}
                className="bg-image rotateme"
                alt="shape"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                data-aos-once="true"
                width={524}
                height={518}
              />

              <Image
                src={serviceLeftMainPic}
                alt="main-pic"
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-duration="500"
                data-aos-once="true"
                width={418}
                height={378}
              />
            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Design & Development</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Layout /> Responsive design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> React web development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> Android apps development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Code /> Laravel web development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Smartphone /> iOS apps development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Percent /> UX/UI design
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.ShoppingCart /> E-commerce development
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.CheckCircle /> Print ready design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAndDevelopment;
