// components/Reviews/Reviews.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as Icon from "react-feather";

import styles from "./Reviews.module.scss";

interface ClientReviews {
  name: string;
  reviewTitle: string;
  reviewContent: string;
  location: string;
  rating: number;
  company?: string;
  companyUrl?: string;
  image?: { url: string; alternativeText: string };
}

interface ClientSectionProps {
  items: ClientReviews[];
}

const Reviews: React.FC<ClientSectionProps> = ({ items }) => {
  const renderClientImage = (review: ClientReviews) => {
    if (review.image) {
      return (
        <Image
          src={review.image.url}
          alt={review.image.alternativeText}
          width={95}
          height={95}
          className={styles.clientImage}
        />
      );
    } else {
      return (
        <div className={styles.clientAvatar}>
          {review.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <Swiper
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className={styles.reviewsSlider}
        >
          {items.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.reviewCard}>
                <div className={styles.clientInfo}>
                  {review.companyUrl ? (
                    <a
                      href={review.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imageLink}
                    >
                      {renderClientImage(review)}
                    </a>
                  ) : (
                    renderClientImage(review)
                  )}
                  <h3 className={styles.clientName}>{review.name}</h3>
                  <span className={styles.clientCompany}>
                    {review.companyUrl && (
                      <a
                        href={review.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.companyLink}
                      >
                        {review.company}
                      </a>
                    )}
                  </span>
                  <span className={styles.clientLocation}>
                    {review.location}
                  </span>
                </div>
                <h4 className={styles.reviewTitle}>{review.reviewTitle}</h4>
                <p className={styles.reviewContent}>
                  {review.reviewContent.length > 250
                    ? `${review.reviewContent.substring(0, 250)}...`
                    : review.reviewContent}
                </p>

                <div className={styles.rating}>
                  {[...Array(5)].map((_, index) => (
                    <Icon.Star
                      key={index}
                      className={
                        index < review.rating
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`swiper-pagination ${styles.swiperPagination}`}></div>
      </div>
    </div>
  );
};

export default Reviews;
