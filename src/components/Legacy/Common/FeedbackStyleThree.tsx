"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";

import user1 from "/public/images/agency-image/agency-user1.png";
import user2 from "/public/images/agency-image/agency-user2.png";
import user3 from "/public/images/agency-image/agency-user3.png";
import user4 from "/public/images/agency-image/agency-user4.png";
import user5 from "/public/images/agency-image/agency-user5.png";
import user6 from "/public/images/agency-image/agency-user6.png";

const FeedbackStyleThree = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">Testimonials</span>
            <h2>Our Clients Feedback</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="ml-feedback-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="client-info">
                  <Image
                    src={clientImg1}
                    alt="image"
                    width={95}
                    height={95}
                  />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="client-info">
                  <Image
                    src={clientImg2}
                    alt="image"
                    width={95}
                    height={95}
                  />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="client-info">
                  <Image
                    src={clientImg3}
                    alt="image"
                    width={95}
                    height={95}
                  />

                  <div className="rating">
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </div>

                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="user-shape1">
          <Image
            src={user1}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
        <div className="user-shape2">
          <Image
            src={user2}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
        <div className="user-shape3">
          <Image
            src={user3}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
        <div className="user-shape4">
          <Image
            src={user4}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
        <div className="user-shape5">
          <Image
            src={user5}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
        <div className="user-shape6">
          <Image
            src={user6}
            alt="shape"
            width={131}
            height={143}
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackStyleThree;
