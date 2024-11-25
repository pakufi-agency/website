"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";

const FeedbackStyleFive = () => {
  return (
    <>
      <div className="agency-portfolio-feedback-area ptb-80">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="agency-portfolio-feedback-slides"
          >
            <SwiperSlide>
              <div className="agency-portfolio-feedback-item">
                <Image
                  src={clientImg1}
                  alt="image"
                  width={95}
                  height={95}
                />
                <p>
                  Pellentesque sed purus eu urna vulputate interdum quis sit
                  amet sapien. Pellentesque porta mauris at orci sagittis
                  commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat
                  quis. Maecenas congue dapibus lacus id fringilla. Vestibulum
                  id augue massa. Proin sed neque dapibus, vulputate ligula
                  eget, aliquam eros.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-portfolio-feedback-item">
                <Image
                  src={clientImg2}
                  alt="image"
                  width={95}
                  height={95}
                />
                <p>
                  Pellentesque sed purus eu urna vulputate interdum quis sit
                  amet sapien. Pellentesque porta mauris at orci sagittis
                  commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat
                  quis. Maecenas congue dapibus lacus id fringilla. Vestibulum
                  id augue massa. Proin sed neque dapibus, vulputate ligula
                  eget, aliquam eros.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="agency-portfolio-feedback-item">
                <Image
                  src={clientImg3}
                  alt="image"
                  width={95}
                  height={95}
                />
                <p>
                  Pellentesque sed purus eu urna vulputate interdum quis sit
                  amet sapien. Pellentesque porta mauris at orci sagittis
                  commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat
                  quis. Maecenas congue dapibus lacus id fringilla. Vestibulum
                  id augue massa. Proin sed neque dapibus, vulputate ligula
                  eget, aliquam eros.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackStyleFive;
