"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import hostingShape1 from "/public/images/hosting-banner-image/hosting-shape1.png";
import hostingShape2 from "/public/images/hosting-banner-image/hosting-shape2.png";
import hostingShape3 from "/public/images/hosting-banner-image/hosting-shape3.png";
import hostingShape4 from "/public/images/hosting-banner-image/hosting-shape4.png";
import hostingShape5 from "/public/images/hosting-banner-image/hosting-shape5.png";
import hostingShape6 from "/public/images/hosting-banner-image/hosting-shape6.png";
import hostingShape7 from "/public/images/hosting-banner-image/hosting-shape7.png";
import hostingShape8 from "/public/images/hosting-banner-image/hosting-shape8.png";
import hostingShape9 from "/public/images/hosting-banner-image/hosting-shape9.png";
import hostingStaticMain from "/public/images/hosting-banner-image/hosting-static-main.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const MainBanner = () => {
  return (
    <>
      <div className="hosting-main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hosting-banner-content">
                    <h1>The Best Web Hosting</h1>
                    <ul>
                      <li>FREE Domain Name for 2st Year</li>
                      <li>FREE SSL Certificate Included</li>
                      <li>1-Click Wordpress Install</li>
                      <li>24/7 Support</li>
                    </ul>

                    <p>
                      Starting at <span>$8.99</span> $3.95/month
                    </p>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hosting-banner-image">
                    <Image
                      src={hostingShape1}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={550}
                      height={348}
                    />

                    <Image
                      src={hostingShape2}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={164}
                      height={98}
                    />

                    <Image
                      src={hostingShape3}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={105}
                      height={64}
                    />

                    <Image
                      src={hostingShape4}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={225}
                      height={234}
                    />

                    <Image
                      src={hostingShape5}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={121}
                      height={209}
                    />

                    <Image
                      src={hostingShape6}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={174}
                      height={317}
                    />

                    <Image
                      src={hostingShape7}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={404}
                      height={468}
                    />

                    <Image
                      src={hostingShape8}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={113}
                      height={87}
                    />

                    <Image
                      src={hostingShape9}
                      className="animate__animated animate__fadeInDown animate__delay-0.7s"
                      alt="image"
                      width={465}
                      height={257}
                    />

                    <Image
                      src={hostingStaticMain}
                      className="animate__animated animate__fadeInUp animate__delay-0.7s"
                      alt="image"
                      width={540}
                      height={546}
                    />
                  </div>
                </div>
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
        <div className="shape5">
          <Image src={shape5} alt="shape" width={182} height={146} />
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
