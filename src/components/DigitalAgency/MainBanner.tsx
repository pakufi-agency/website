"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import agencyBannerImg from "/public/images/agency-image/agency-banner-img.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const MainBanner = () => {
  return (
    <>
      <div className="agency-main-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  We are creative
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  Digital Agency
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-once="true"
                  
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-image">
                <Image
                  src={agencyBannerImg}
                  alt="image"
                  width={804}
                  height={741}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
