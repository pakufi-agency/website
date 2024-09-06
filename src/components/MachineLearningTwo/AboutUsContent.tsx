"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "/public/images/about4.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const AboutUsContent = () => {
  return (
    <>
      <div className="about-area pt-0 ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-img">
                <Image src={aboutImg} alt="image" width={677} height={575} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna. Sed consequat, leo eget bibendum
                  sodales, augue velit cursus nunc.Donec vitae sapien ut libero
                  venenatis faucibus tempus.
                </p>

                <Link
                  href="/about"
                  className="btn btn-secondary"
                  
                >
                  Discover More
                </Link>
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

export default AboutUsContent;
