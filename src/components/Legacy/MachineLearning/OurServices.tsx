"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "/public/images/services-image/service-image1.png";
import serviceImg2 from "/public/images/services-image/service-image2.png";
import serviceImg3 from "/public/images/services-image/service-image3.png";
import serviceImg4 from "/public/images/services-image/service-image4.png";
import serviceImg5 from "/public/images/services-image/service-image5.png";
import serviceImg6 from "/public/images/services-image/service-image6.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const OurServices = () => {
  return (
    <>
      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Solutions</span>
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg1}
                    alt="image"
                    width={155}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    IT Professionals
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg2}
                    alt="image"
                    width={198}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Software Engineers
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg3}
                    alt="image"
                    width={175}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Health & Manufacturing
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg4}
                    alt="image"
                    width={238}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Security & Surveillance
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg5}
                    alt="image"
                    width={315}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Automatic Optimization
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-ml-services-box">
                <div className="image">
                  <Image
                    src={serviceImg6}
                    alt="image"
                    width={234}
                    height={180}
                  />
                </div>
                <h3>
                  <Link href="/services/service-details/" >
                    Data Analysts
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default OurServices;
