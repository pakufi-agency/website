"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import aboutImg1 from "/public/images/about1.jpg";
import aboutImg2 from "/public/images/about2.jpg";
import aboutImg3 from "/public/images/about3.jpg";

import aboutShape1 from "/public/images/about-shape1.png";
import aboutShape2 from "/public/images/about-shape2.png";

const AboutUsContent = () => {
  return (
    <>
      <div className="repair-about-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <span className="sub-title">About Us</span>
                <h2>We have 35 years of experience in repair services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul>
                  <li>
                    <span>
                      <Icon.Check /> Experienced Professionals
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Expert Technical Skills
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Excellent Reputation
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Friendly Service
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Trustworthy See Reviews
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Affordable Diagnosis
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-about-image">
                <Image src={aboutImg1} alt="image" width={264} height={166} />

                <Image src={aboutImg2} alt="image" width={505} height={337} />

                <Image src={aboutImg3} alt="image" width={264} height={166} />

                <Image src={aboutShape1} alt="image" width={304} height={305} />

                <Image src={aboutShape2} alt="image" width={304} height={305} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
