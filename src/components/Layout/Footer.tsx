"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import styles from "./Footer.module.scss";
import logo from "/public/images/logo.png";
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
                  Pakufi, is a web agency driven by social impact. We craft
                  high-quality, ethical, and human-centered digital solutions
                  while empowering IT and digital professionals from
                  underrepresented regions.
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
                    <Link href="/tech-agency/#serviceSection">Services</Link>
                  </li>
                  <li>
                    <Link href="/tech-agency/#offerSection">Price Offers</Link>
                  </li>
                  <li>
                    <Link href="/#faqSection">FAQ&apos;s</Link>
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
                    <Link
                      href="https://pakufi.zohobookings.com/#/4746283000000044080"
                      target="_blank"
                    >
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
                    <Link href="/talent-growth">I am a talent</Link>
                  </li>
                  <li>
                    <a href="mailto:info@pakufi.agency">
                      Love the mission and want to join? Write us!
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
                      className={styles.linkedin}
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/bSGefr73g9"
                      className={styles.discord}
                      target="_blank"
                    >
                      <Icon.MessageCircle />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/pakufi_ethical_agency"
                      className={styles.instagram}
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/pakufi-agency/"
                      className={styles.github}
                      target="_blank"
                    >
                      <Icon.GitHub />
                    </a>
                  </li>
                </ul>
                <p>
                  We are open source! <br /> Check out our{" "}
                  <a href="https://github.com/pakufi-agency/" target="_blank">
                    Github
                  </a>{" "}
                  if you wish to contribute!
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className={styles.copyrightArea}>
                <p>website made with 💚 by Pakufi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape8 rotateme">
          <Image src={greenCross} alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
