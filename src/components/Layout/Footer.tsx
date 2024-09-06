"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo.png";
import map from "/public/images/map.png";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/" >
                    <Image src={logo} alt="logo" width={110} height={36} />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about" >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" >
                      Our Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" >
                      Latest News
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="/faq" >
                      FAQ&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:startp@gmail.com">startp@gmail.com</a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} StartP. All rights reserved by{" "}
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src={map} className="map" alt="map" width={910} height={443} />

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>

        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
