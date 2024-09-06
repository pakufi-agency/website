"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

import serviceImg1 from "/public/images/repair-services-img/repair-services-img1.jpg";
import serviceImg2 from "/public/images/repair-services-img/repair-services-img2.jpg";
import serviceImg3 from "/public/images/repair-services-img/repair-services-img3.jpg";
import serviceImg4 from "/public/images/repair-services-img/repair-services-img4.jpg";
import serviceImg5 from "/public/images/repair-services-img/repair-services-img5.jpg";
import serviceImg6 from "/public/images/repair-services-img/repair-services-img6.jpg";

const Services = () => {
  return (
    <>
      <div className="repair-services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Services that We Provide</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg1.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-monitor"></i>
                </div>

                <h3>Laptop Repair</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg2.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>Computer Repair</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg3.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-layout"></i>
                </div>

                <h3>Apple Products Repair</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg4.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-update-arrows"></i>
                </div>

                <h3>Software Update</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg5.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-smartphone"></i>
                </div>

                <h3>Smartphone Repair</h3>
                <p>
                  Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do
                  eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link href="/services/service-details/" >
                  <Icon.ArrowRight />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-repair-services"
                style={{ backgroundImage: `url(${serviceImg6.src})` }}
              >
                <div className="icon">
                  <i className="flaticon-hard-disk"></i>
                </div>

                <h3>Data Backup & Recovery</h3>
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

export default Services;
