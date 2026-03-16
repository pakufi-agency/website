// components/Reviews/Reviews.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as Icon from "react-feather";

import styles from "./Reviews.module.scss";

// Mock data for reviews
const reviewsData = [
  {
    id: 1,
    name: "Sarah Taylor",
    title: "Excellent Service and Professional Team",
    location: "San Francisco, CA",
    company: "Envato",
    companyLink: "https://envato.com",
    image: "/images/client-image/client1.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!",
    rating: 5,
  },
  {
    id: 2,
    name: "Steven Smith",
    title: "Outstanding Results and Great Communication",
    location: "New York, NY",
    company: "Envato",
    companyLink: "https://envato.com",
    image: "/images/client-image/client2.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!",
    rating: 5,
  },
  {
    id: 3,
    name: "James Eva",
    title: "Highly Recommended - Exceeded Our Expectations",
    location: "London, UK",
    company: "Envato",
    companyLink: "https://envato.com",
    image: "/images/client-image/client3.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!",
    rating: 5,
  },
];

interface ReviewsProps {
  title?: string;
  subtitle?: string;
}

const Reviews: React.FC<ReviewsProps> = ({
  title = "Client Reviews",
  subtitle = "What our clients say about us",
}) => {
  return (
    <div className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className={styles.reviewsSlider}
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div className={styles.reviewCard}>
                <div className={styles.clientInfo}>
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={95}
                    height={95}
                    className={styles.clientImage}
                  />
                  <h3 className={styles.clientName}>{review.name}</h3>
                  <span className={styles.clientCompany}>{review.company}</span>
                  <span className={styles.clientLocation}>
                    {review.location}
                  </span>
                </div>
                <h4 className={styles.reviewTitle}>{review.title}</h4>
                <p className={styles.reviewContent}>{review.content}</p>

                <div className={styles.rating}>
                  {[...Array(review.rating)].map((_, index) => (
                    <Icon.Star key={index} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.trustpilotLink}>
          <a
            href="https://www.trustpilot.com/review/pakufi.agency"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.trustpilotButton}
          >
            See all reviews on Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
