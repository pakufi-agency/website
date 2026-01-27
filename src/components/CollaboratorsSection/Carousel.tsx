"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PartnerItem } from "./CollaboratorsSection";

import "swiper/css";

import styles from "./Carousel.module.scss";
import { getStrapiImageUrl } from "@/utils/utils";

interface CarouselProps {
  items: PartnerItem[];
  className?: string;
}

const DEFAULT_LOGO_SIZE = { width: 100, height: 36 };

export default function Carousel({ items, className }: CarouselProps) {
  if (!items?.length) return null;

  return (
    <section className={`${styles.wrapper} ${className ?? ""}`}>
      <div className={styles.container}>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          // loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          {items.map((item, index) => {
            const width = item.logoWidth ?? DEFAULT_LOGO_SIZE.width;
            const height = item.logoHeight ?? DEFAULT_LOGO_SIZE.height;
            const logoUrl = getStrapiImageUrl(item.logo.url);
            const alt = item.logo.alternativeText || item.name;

            const content = (
              <div className={styles.card}>
                <div className={styles.logoWrap} style={{ width, height }}>
                  <Image
                    src={logoUrl}
                    alt={alt}
                    width={width}
                    height={height}
                    className={styles.logoBase}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <span className={styles.hoverMask} aria-hidden>
                    <Image
                      src={logoUrl}
                      alt=""
                      width={width}
                      height={height}
                      className={styles.logoHover}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </span>
                </div>
              </div>
            );

            return (
              <SwiperSlide key={index} className={styles.slide}>
                {item.absoluteUrl ? (
                  <a
                    href={item.absoluteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={item.name}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
