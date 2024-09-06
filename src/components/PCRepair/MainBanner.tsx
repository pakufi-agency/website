"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import repairBannerImg from "/public/images/repair-banner-image/repair-banner-img.png";
import repairShape1 from "/public/images/repair-banner-image/repair-shape1.png";
import repairShape2 from "/public/images/repair-banner-image/repair-shape2.png";
import shapeCircle from "/public/images/repair-banner-image/repair-shape-circle.png";

const MainBanner = () => {
  return (
    <>
      <div className="repair-main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="repair-banner-content">
                <h1>Your Local Computer Repair Experts!</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t
                  look even slightly believable.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-banner-image">
                <Image
                  src={repairBannerImg}
                  alt="image"
                  width={460}
                  height={395}
                />

                <Image
                  src={repairShape1}
                  className="animate__animated animate__zoomIn animate__delay-0.6s"
                  alt="image"
                  width={496}
                  height={473}
                />

                <Image
                  src={repairShape2}
                  className="animate__animated animate__fadeInLeft animate__delay-0.6s"
                  alt="image"
                  width={533}
                  height={531}
                />

                <Image
                  src={shapeCircle}
                  className="rotateme"
                  alt="image"
                  width={494}
                  height={446}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
