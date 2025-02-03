"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import styles from "./Footer.module.scss";

import logo from "/public/images/logo.png";
// import map from "/public/images/legacy/map.png";

import greenCross from "/public/images/backgrounds/green-cross.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={`${styles.footerArea} bg-f7fafd`}>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className={`${styles.singleFooterWidget} ${styles.logoCol}`}>
                <div className={styles.logo}>
                  <Link href="/" className={styles.link}>
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
              <div className={styles.singleFooterWidget}>
                <h3 className={styles.h3Title}>Company</h3>

                <ul className={styles.list}>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ&apos;s</Link>
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
              <div className={styles.singleFooterWidget}>
                <h3 className={styles.h3Title}>Work with us</h3>

                <ul className={styles.list}>
                  <li>
                    <Link href="https://tally.so/r/nGDg5e">
                      I have a project
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li> */}
                  <li>
                    <Link href="https://tally.so/r/waE8Av">I am a talent</Link>
                  </li>
                  <li>
                    <a href="mailto:info@pakufi.agency">Write to us!</a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/KUeQrY5eMw"
                      className="discord"
                      target="_blank"
                    >
                      Join Pakufi community
                    </a>
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
              <div className={styles.singleFooterWidget}>
                <h3 className={styles.h3Title}>Where to find us</h3>

                <ul className={`${styles.footerContactInfo} ${styles.list}`}>
                  {/* <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li> */}
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>

                  <li>
                    <Icon.Mail />
                    {/* Email:{" "} */}
                    <a href="mailto:info@pakufi.agency">info@pakufi.agency</a>
                  </li>

                  {/* <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                </ul>

                <ul className={`${styles.list} ${styles.socialLinks}`}>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/pakufi"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/KUeQrY5eMw"
                      className="discord"
                      target="_blank"
                    >
                      <Icon.MessageCircle />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/pakufi_ethical_agency"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/pakufi-agency/"
                      className="github"
                      target="_blank"
                    >
                      <Icon.GitHub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className={styles.copyrightArea}>
                <p>website made with 💚 by Pakufi</p>
              </div>
            </div>
          </div>
        </div>

        {/* <Image
          src={map}
          className={styles.map}
          alt="map"
          width={910}
          height={443}
        /> */}

        <div className="shape8 rotateme">
          <Image src={greenCross} alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
