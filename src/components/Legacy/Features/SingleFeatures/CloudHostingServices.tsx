"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import bookSelf from "/public/images/services-right-image/book-self.png";
import box from "/public/images/services-right-image/box.png";
import chair from "/public/images/services-right-image/chair.png";
import cloud from "/public/images/services-right-image/cloud.png";
import cup from "/public/images/services-right-image/cup.png";
import flowerTop from "/public/images/services-right-image/flower-top.png";
import headPhone from "/public/images/services-right-image/head-phone.png";
import monitor from "/public/images/services-right-image/monitor.png";
import mug from "/public/images/services-right-image/mug.png";
import table from "/public/images/services-right-image/table.png";
import tissue from "/public/images/services-right-image/tissue.png";
import waterBottle from "/public/images/services-right-image/water-bottle.png";
import wifi from "/public/images/services-right-image/wifi.png";
import cercleShape from "/public/images/services-right-image/cercle-shape.png";
import serviceRightMainPic from "/public/images/services-right-image/service-right-main-pic.png";

const CloudHostingServices = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Cloud Hosting Services</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Database /> Cloud databases
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Website hosting
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.File /> File storage
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.TrendingUp /> Forex trading
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Folder /> File backups
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Monitor /> Remote desktop
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Mail /> Email servers
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Cloud /> Hybrid cloud
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 services-right-image">
              <Image
                src={bookSelf}
                alt="book-self"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
                width={139}
                height={139}
              />

              <Image
                src={box}
                alt="box"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-once="true"
                width={420}
                height={251}
              />

              <Image
                src={chair}
                alt="chair"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
                width={67}
                height={127}
              />

              <Image
                src={cloud}
                alt="cloud"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="500"
                data-aos-once="true"
                width={158}
                height={140}
              />

              <Image
                src={cup}
                alt="cup"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
                width={82}
                height={93}
              />

              <Image
                src={flowerTop}
                alt="flower"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="500"
                data-aos-once="true"
                width={27}
                height={78}
              />

              <Image
                src={headPhone}
                alt="head-phone"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
                width={30}
                height={29}
              />

              <Image
                src={monitor}
                alt="monitor"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="500"
                data-aos-once="true"
                width={70}
                height={99}
              />

              <Image
                src={mug}
                alt="mug"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                data-aos-once="true"
                width={16}
                height={20}
              />

              <Image
                src={table}
                alt="table"
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-duration="500"
                data-aos-once="true"
                width={162}
                height={149}
              />

              <Image
                src={tissue}
                alt="tissue"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="500"
                data-aos-once="true"
                width={26}
                height={42}
              />

              <Image
                src={waterBottle}
                alt="water-bottle"
                data-aos="fade-up"
                data-aos-delay="650"
                data-aos-duration="500"
                data-aos-once="true"
                width={14}
                height={37}
              />

              <Image
                src={wifi}
                alt="wifi"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-once="true"
                width={55}
                height={71}
              />

              <Image
                src={cercleShape}
                className="bg-image rotateme"
                alt="shape"
                data-aos="fade-up"
                data-aos-delay="750"
                data-aos-duration="500"
                data-aos-once="true"
                width={524}
                height={518}
              />

              <Image
                src={serviceRightMainPic}
                alt="main-pic"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="500"
                data-aos-once="true"
                width={342}
                height={396}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudHostingServices;
