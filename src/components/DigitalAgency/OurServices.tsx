"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import serviceImg1 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg2 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg3 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg4 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg5 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg6 from "/public/images/agency-image/agency-services-img1.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const OurServices = () => {
  return (
    <>
      <div className="agency-services-area pt-80 pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Our Solutions</span>
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg1} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      IT Professionals
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg2} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      Software Engineers
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg3} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      Web Development
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg4} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      SEO & Content
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg5} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      Digital Marketing
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="agency-services-box">
                <Image src={serviceImg6} alt="image" width={860} height={700} />

                <div className="content">
                  <h3>
                    <Link href="/services/service-details/" >
                      Data Analysts
                    </Link>
                  </h3>

                  <Link
                    href="/services/service-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
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

export default OurServices;
