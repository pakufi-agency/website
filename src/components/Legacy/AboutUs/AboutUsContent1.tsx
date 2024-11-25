"use client";

import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/about-one.png";

const AboutUsContent1 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  width={685}
                  height={494}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>About Us</h2>
                  <div className="bar"></div>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sagittis egestas ante, sed viverra nunc tincidunt nec nteger
                  nonsed condimntum elit, sit amet feugiat lorem. Proin tempus
                  sagittis velit vitae scelerisque.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.
                </p>

                <p>
                  Business-to-business metrics analytics value proposition
                  funding angel investor entrepreneur alpha ramen equity
                  gamification. Social proof partner network research.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
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

export default AboutUsContent1;
