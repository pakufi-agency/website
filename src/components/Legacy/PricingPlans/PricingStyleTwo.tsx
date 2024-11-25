"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const PricingStyleTwo = () => {
  return (
    <>
      <div className="pricing-area pt-80 pb-50 bg-f7fafd">
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
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <i className="flaticon-data"></i>
                  <h3>Web Hosting</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>10.99<span>/m</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      <i data-feather="check"></i> 99.9% Uptime Guarantee
                    </li>
                    <li>
                      <i data-feather="check"></i> Reliable & Secure
                    </li>
                    <li>
                      <i data-feather="check"></i> Powered by cPanel / Plesk
                    </li>
                    <li>
                      <i data-feather="check"></i> Web Asset Delivery
                    </li>
                    <li>
                      <i data-feather="check"></i> 24/7 Dedicated Support
                    </li>
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
              <div className="single-pricing-table active-plan">
                <div className="pricing-header">
                  <i className="flaticon-cloud"></i>
                  <h3>Cloud Hosting</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>13.99<span>/m</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      <i data-feather="check"></i> 99.9% Uptime Guarantee
                    </li>
                    <li>
                      <i data-feather="check"></i> Reliable & Secure
                    </li>
                    <li>
                      <i data-feather="check"></i> Powered by cPanel / Plesk
                    </li>
                    <li>
                      <i data-feather="check"></i> Web Asset Delivery
                    </li>
                    <li>
                      <i data-feather="check"></i> 24/7 Dedicated Support
                    </li>
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
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <i className="flaticon-vps"></i>
                  <h3>Vps Hosting</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>15.99<span>/m</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      <i data-feather="check"></i> 99.9% Uptime Guarantee
                    </li>
                    <li>
                      <i data-feather="check"></i> Reliable & Secure
                    </li>
                    <li>
                      <i data-feather="check"></i> Powered by cPanel / Plesk
                    </li>
                    <li>
                      <i data-feather="check"></i> Web Asset Delivery
                    </li>
                    <li>
                      <i data-feather="check"></i> 24/7 Dedicated Support
                    </li>
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

export default PricingStyleTwo;
