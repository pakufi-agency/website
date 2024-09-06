"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "/public/images/ml-banner-image/ml-main-pic.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  World’s Leading AI & Machine Learning Company
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                  
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-banner-single-image">
                <Image
                  src={bannerImg}
                  className="animate__animated animate__fadeInUp animate__delay-0.5s"
                  alt="image"
                  width={592}
                  height={577}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape6 rotateme">
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

export default MainBanner;
