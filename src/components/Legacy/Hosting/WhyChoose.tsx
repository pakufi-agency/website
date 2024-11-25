"use client";

import React from "react";
import Image from "next/image";

import cercleShape from "/public/images/services-left-image/cercle-shape.png";
import whyChooseUsImg from "/public/images/why-choose-us-image/main-static.png";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-us ptb-80 pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="why-choose-us-image">
                <Image
                  src={cercleShape}
                  className="rotateme animate-cercle-img"
                  alt="image"
                  width={524}
                  height={518}
                />

                <Image
                  src={whyChooseUsImg}
                  alt="image"
                  width={379}
                  height={416}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-team"></i>
                    </div>
                    <h3>Proficient & Friendly</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-rocket"></i>
                    </div>
                    <h3>Extremely Fast</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>

                    <h3>100% Safe & Security</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-diamond"></i>
                    </div>
                    <h3>Top-Rated</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
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

export default WhyChoose;
