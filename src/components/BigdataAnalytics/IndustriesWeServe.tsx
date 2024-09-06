"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import vectorImg from "/public/images/bigdata-analytics/vector.png";

const IndustriesWeServe = () => {
  return (
    <>
      <div className="industries-serve-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-buildings"></i>
                </div>
                Manufacturing
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-building-house"></i>
                </div>
                Healthcare
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-car"></i>
                </div>
                Automobile
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-credit-card"></i>
                </div>
                Banking
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-building"></i>
                </div>
                Real Estate
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bxs-plane-alt"></i>
                </div>
                Logistics
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-group"></i>
                </div>
                Insurance
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-6 col-sm-6 col-md-4"
              data-aos="fade-in"
              data-aos-delay="800"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="bx bx-bitcoin"></i>
                </div>
                Capital Markets
                <Link
                  href="/services/service-details/"
                  className="link-btn"
                  
                ></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape2">
          <Image src={vectorImg} alt="image" width={672} height={429} />
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
