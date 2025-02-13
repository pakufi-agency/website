"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

import styles from "./Hero.module.scss";

import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";

interface HeroProps {
  title: string;
  descriptionRichText: BlocksContent;
  ctaLabel: string;
  ctaLink: string;
  mediaHero: { url: string; alternativeText: string };
}

const Hero: React.FC<HeroProps> = ({
  title,
  descriptionRichText,
  ctaLabel,
  ctaLink,
  mediaHero,
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
              {title}
            </span>

            <div
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <BlockRendererClient content={descriptionRichText} />
            </div>

            <Link href={ctaLink} className="btn button-pakufi-dark">
              {ctaLabel}
            </Link>
          </div>

          <div className={styles.bannerImage}>
            <Image
              src={mediaHero.url}
              alt={mediaHero.alternativeText}
              width={821}
              height={820}
              className={styles.Image}
            />
          </div>

          <div className={`shape3 ${styles.triangleShape}`}>
            <Image src={greenTriangle} alt="shape" width={21} height={20} />
          </div>
          <div className={`shape7 ${styles.crossShape}`}>
            <Image src={whiteCross} alt="shape" width={21} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
