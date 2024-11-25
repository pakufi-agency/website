"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import serviceImg1 from "/public/images/agency-image/agency-services-img1.jpg";
import serviceImg2 from "/public/images/agency-image/agency-services-img2.jpg";
import serviceImg3 from "/public/images/agency-image/agency-services-img3.jpg";
import serviceImg4 from "/public/images/agency-image/agency-services-img4.jpg";
import serviceImg5 from "/public/images/agency-image/agency-services-img5.jpg";
import serviceImg6 from "/public/images/agency-image/agency-services-img6.jpg";

const ServicesStyle5 = () => {
  return (
    <>
      <div className="agency-services-area ptb-80 pb-50">
        <div className="container">
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
      </div>
    </>
  );
};

export default ServicesStyle5;
