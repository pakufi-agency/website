"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

import partnerImg1 from "/public/images/agency-portfolio-partner-image/ap-partner1.png";
import partnerImg2 from "/public/images/agency-portfolio-partner-image/ap-partner2.png";
import partnerImg3 from "/public/images/agency-portfolio-partner-image/ap-partner3.png";
import partnerImg4 from "/public/images/agency-portfolio-partner-image/ap-partner4.png";
import partnerImg5 from "/public/images/agency-portfolio-partner-image/ap-partner5.png";
import partnerImg6 from "/public/images/agency-portfolio-partner-image/ap-partner6.png";

const Partner = () => {
  return (
    <>
      <div className="agency-portfolio-partner-area ptb-80">
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="agency-portfolio-partner-slides"
          >
            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg1}
                    alt="image"
                    width={103}
                    height={33}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg2}
                    alt="image"
                    width={100}
                    height={29}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg3}
                    alt="image"
                    width={114}
                    height={22}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg4}
                    alt="image"
                    width={137}
                    height={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg5}
                    alt="image"
                    width={89}
                    height={24}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#">
                  <Image
                    src={partnerImg6}
                    alt="image"
                    width={120}
                    height={33}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-agency-portfolio-partner">
                <a href="#" target="_blank">
                  <Image
                    src={partnerImg4}
                    alt="image"
                    width={137}
                    height={25}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
