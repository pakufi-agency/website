"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "/public/images/agency-image/agency-about-img.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import agencyShape2 from "/public/images/agency-image/agency-shape2.png";

const AboutUsContent = () => {
  return (
    <>
      <div className="agency-about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <Image src={aboutImg} alt="image" width={707} height={681} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
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

                <Link href="/about" className="btn btn-secondary" >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
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
        <div className="shape10">
          <Image src={agencyShape2} alt="image" />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
