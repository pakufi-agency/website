"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const FeedbackStyleFour = () => {
  return (
    <>
      <div className="ml-feedback-area ptb-80">
        <div className="container">
          <div className="section-title">
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
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <Image src={clientImg1} alt="image" width={95} height={95} />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <Image src={clientImg2} alt="image" width={95} height={95} />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-feedback-item">
                <div className="client-info">
                  <Image src={clientImg3} alt="image" width={95} height={95} />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>

                <div className="rating">
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                  <Icon.Star />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default FeedbackStyleFour;
