"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import partnerImg1 from "/public/images/partner-img/partner-1.png";
import partnerHoverImg1 from "/public/images/partner-img/partner-hover1.png";

import partnerImg2 from "/public/images/partner-img/partner-2.png";
import partnerHoverImg2 from "/public/images/partner-img/partner-hover2.png";

import partnerImg3 from "/public/images/partner-img/partner-3.png";
import partnerHoverImg3 from "/public/images/partner-img/partner-hover3.png";

import partnerImg4 from "/public/images/partner-img/partner-4.png";
import partnerHoverImg4 from "/public/images/partner-img/partner-hover4.png";

import partnerImg5 from "/public/images/partner-img/partner-5.png";
import partnerHoverImg5 from "/public/images/partner-img/partner-hover5.png";

import partnerImg6 from "/public/images/partner-img/partner-6.png";
import partnerHoverImg6 from "/public/images/partner-img/partner-hover6.png";

import partnerImg7 from "/public/images/partner-img/partner-7.png";
import partnerHoverImg7 from "/public/images/partner-img/partner-hover7.png";

const Partner = () => {
  return (
    <>
      <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
        <div className="container">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
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
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                  <Image src={partnerImg1} alt="image" width={103} height={33} />
                  <Image
                    src={partnerHoverImg1}
                    alt="image"
                    width={103} height={33}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                  <Image src={partnerImg2} alt="partner" width={100} height={29} />
                  <Image
                    src={partnerHoverImg2}
                    alt="partner"
                    width={100} height={29}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                <Image src={partnerImg3} alt="partner" width={114} height={22} />
                  <Image
                    src={partnerHoverImg3}
                    alt="partner"
                    width={114} height={22}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                <Image src={partnerImg4} alt="partner" width={137} height={25} />
                  <Image
                    src={partnerHoverImg4}
                    alt="partner"
                    width={137} height={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                <Image src={partnerImg5} alt="partner" width={89} height={24} />
                  <Image
                    src={partnerHoverImg5}
                    alt="partner"
                    width={89} height={24}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                  <Image src={partnerImg6} alt="partner" width={120} height={33} />
                  <Image
                    src={partnerHoverImg6}
                    alt="partner"
                    width={120} height={33}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-partner">
                <a href="#" target="_blank">
                  <Image src={partnerImg7} alt="partner" width={95} height={33} />
                  <Image
                    src={partnerHoverImg7}
                    alt="partner"
                    width={95} height={33}
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
