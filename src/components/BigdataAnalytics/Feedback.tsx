"use client";

import React from "react";
import Image from "next/image";

import authorImg1 from "/public/images/author1.jpg";
import authorImg2 from "/public/images/author2.jpg";
import authorImg3 from "/public/images/author3.jpg";

const Feedback = () => {
  return (
    <>
      <div className="bigdata-feedback-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>What Users Saying</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg1}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>David Luis</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg2}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Steven Smith</h3>
                  <span>Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accus antium doloremque laudantium, totam rem
                    aperiam, eaque ipsaquaeab illo.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg3}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Sarah Lucy</h3>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
