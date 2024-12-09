"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Hero.module.scss";

import bannerImg from "/public/images/iot-banner-image/iot-main-img1.png";
import iotShape1 from "/public/images/iot-banner-image/iot-shape1.png";
// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const Hero = ({ section }: any) => {
  console.log({ section });
  return (
    <>
      <div className={`${styles.heroBanner} pakufi-dark-theme`}>
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.bannerContent}>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Internet of Things
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              We get it! IoT growth is happening
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              At this point, it may seem like overkill to point out the
              continued growth bound to happen in the Internet of Things space
              for the years to come and how it will create new opportunities for
              companies, both established and new, from a hardware and software
              perspective.
            </p>

            <Link href="/contact" className="btn button-pakufi-dark">
              Get Started
            </Link>
          </div>

          <div className={styles.bannerImage}>
            <Image
              src={bannerImg}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt="image"
              width={837}
              height={447}
            />

            <Image
              src={iotShape1}
              className="animate__animated animate__zoomIn"
              alt="image"
              width={247}
              height={247}
            />
          </div>

          <div className={styles.animateBorder}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <Image src={shape1} alt="shape" width={202} height={202} />
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
      </div>
    </>
  );
};

export default Hero;
