"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const PricingStyleOne = () => {
  return (
    <>
      <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Pricing Plans</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Basic Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>15.00 <span>/Mon</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">5 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">1 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li>Data Security and Backups</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary" >
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="pricing-table active-plan">
                <div className="pricing-header">
                  <h3>Advanced Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>35.00 <span>/Mon</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">10 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">3 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Data Security and Backups</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary" >
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Expert Plan</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>65.00 <span>/Mon</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">15 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">5 GB Storage</li>
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">Monthly Reports and Analytics</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary" >
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default PricingStyleOne;
