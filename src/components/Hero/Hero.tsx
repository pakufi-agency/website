"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Hero.module.scss";

import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";

interface HeroProps {
  title: string;
  descriptionHero: string;
  ctaLabel: string;
  ctaLink: string;
  imageHero: { url: string; alternativeText: string };
}

const Hero: React.FC<HeroProps> = ({
  title,
  descriptionHero,
  ctaLabel,
  ctaLink,
  imageHero,
}) => {
  return (
    <>
      <div className={`${styles.heroBanner}`}>
        <div className={`container ${styles.contentContainer}`}>
          <div className={styles.bannerContent}>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              We are an ethical tech agency
            </span>

            <h4
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              {title}
            </h4>

            <div
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              {descriptionHero}
            </div>

            <Link href={ctaLink} className="btn button-pakufi-dark">
              {ctaLabel}
            </Link>
          </div>

          <div className={styles.bannerImage}>
            <Image
              src={imageHero.url}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              alt={imageHero.alternativeText}
              width={837}
              height={447}
            />
          </div>

          <div className={styles.animateBorder}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Shape Images */}
          <div className="shape3">
            <Image src={greenTriangle} alt="shape" width={21} height={20} />
          </div>
          {/* <div className="shape4">
            <Image src={whiteTriangle} alt="shape" width={21} height={20} />
          </div> */}
          {/* <div className="shape6 rotateme">
            <Image src={whiteTriangle} alt="shape" width={21} height={20} />
          </div> */}
          <div className="shape7">
            <Image src={greenTriangle} alt="shape" width={21} height={20} />
          </div>
          <div className="shape8 rotateme">
            <Image src={whiteCross} alt="shape" width={22} height={22} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
