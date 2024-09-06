"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerShape1 from "/public/images/ml-banner-image/one.png";
import bannerShape2 from "/public/images/ml-banner-image/two.png";
import bannerShape3 from "/public/images/ml-banner-image/three.png";
import bannerShape4 from "/public/images/ml-banner-image/four.png";
import bannerShape5 from "/public/images/ml-banner-image/five.png";
import bannerShape6 from "/public/images/ml-banner-image/six.png";
import bannerShape7 from "/public/images/ml-banner-image/seven.png";
import bannerShape8 from "/public/images/ml-banner-image/eight.png";
import bannerShape9 from "/public/images/ml-banner-image/nine.png";
import bannerShape10 from "/public/images/ml-banner-image/ten.png";
import bannerShape11 from "/public/images/ml-banner-image/eleven.png";
import bannerImg from "/public/images/ml-banner-image/ml-main-pic.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const MainBanner = () => {
  return (
    <>
      <div className="ml-main-section">
        <div className="container">
          <div className="row">
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
              <div className="ml-banner-image">
                <Image
                  src={bannerShape1}
                  className="animate__animated animate__fadeIn animate__delay-2s"
                  alt="image"
                  width={127}
                  height={174}
                />

                <Image
                  src={bannerShape2}
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                  alt="image"
                  width={212}
                  height={286}
                />

                <Image
                  src={bannerShape3}
                  className="animate__animated animate__fadeInUp animate__delay-0.5s"
                  alt="image"
                  width={336}
                  height={196}
                />

                <Image
                  src={bannerShape4}
                  className="animate__animated animate__fadeInUp animate__delay-2s"
                  alt="image"
                  width={96}
                  height={140}
                />

                <Image
                  src={bannerShape5}
                  className="animate__animated animate__fadeInDown animate__delay-2.5s"
                  alt="image"
                  width={97}
                  height={138}
                />

                <Image
                  src={bannerShape6}
                  className="animate__animated animate__fadeInDown animate__delay-1.9s"
                  alt="image"
                  width={96}
                  height={127}
                />

                <Image
                  src={bannerShape7}
                  className="animate__animated animate__fadeInDown animate__delay-2.1s"
                  alt="image"
                  width={124}
                  height={250}
                />

                <Image
                  src={bannerShape8}
                  className="animate__animated animate__fadeInDown animate__delay-1.9s"
                  alt="image"
                  width={122}
                  height={250}
                />

                <Image
                  src={bannerShape9}
                  className="animate__animated animate__fadeInDown animate__delay-1.7s"
                  alt="image"
                  width={124}
                  height={251}
                />

                <Image
                  src={bannerShape10}
                  className="animate__animated animate__fadeInDown animate__delay-1.5s"
                  alt="image"
                  width={122}
                  height={243}
                />

                <Image
                  src={bannerShape11}
                  className="animate__animated animate__fadeInUp animate__delay-0.4s"
                  alt="image"
                  width={588}
                  height={343}
                />

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
