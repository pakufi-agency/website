"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Shape Images
import shape1 from "/public/images/agency-image/agency-shape1.png"; 

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Pricing</span>
            <h2>Our Pricing Plan</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Tabs className="pricing-tab bg-color">
            <TabList>
              <Tab>Monthly Plan</Tab>
              <Tab>Yearly Plan</Tab>
            </TabList>

            <TabPanel>
              <div className="row justify-content-center">
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Free</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $0 <span>/m</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Get Started Free
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 1000 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Pro</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $149 <span>/m</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Start 3 Days Free Trial
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 3300 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Premium</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $179 <span>/m</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Start 6 Days Free Trial
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 10000 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Free</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $0 <span>/y</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Get Started Free
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 1000 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Pro</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $249 <span>/y</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Start 3 Days Free Trial
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 3300 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="pricing-box">
                    <div className="pricing-header">
                      <h3>Premium</h3>
                      <p>
                        Get your business up <br /> and running
                      </p>
                    </div>

                    <div className="price">
                      $279 <span>/y</span>
                    </div>

                    <div className="buy-btn">
                      <Link href="#" className="btn btn-primary" >
                        Start 6 Days Free Trial
                      </Link>
                    </div>

                    <ul className="pricing-features">
                      <li>
                        <Icon.Check /> Drag & Drop Builder
                      </li>
                      <li>
                        <Icon.Check /> Lead Generation & Sales
                      </li>
                      <li>
                        <Icon.Check /> Boot & Digital Assistants
                      </li>
                      <li>
                        <Icon.Check /> Customer Service
                      </li>
                      <li>
                        <Icon.Check /> Up to 10000 Subscribers
                      </li>
                      <li>
                        <Icon.Check /> Unlimited Broadcasts
                      </li>
                      <li>
                        <Icon.Check /> Landing Pages & Web Widgets
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/* Shape Image */}
        <div className="shape9 mobile-dnone">
          <Image
            src={shape1}
            alt="image"
            width={299}
            height={278}
          />
        </div>
      </div>
    </>
  );
};

export default PricingStyleThree;
