"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";
import clientImg4 from "/public/images/client-image/client4.jpg";
import clientImg5 from "/public/images/client-image/client5.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg"; 
import shape5 from "/public/images/shape5.png";
 
const Feedback: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>What users Saying</h2>
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
            modules={[Autoplay, Pagination]} 
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src={clientImg1} alt="image" width={95} height={95} />
                  </div>
                  <h3>David Gale</h3>
                  <span>Web Developer</span>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src={clientImg2} alt="image" width={95} height={95} />
                  </div>
                  <h3>Matt Damon</h3>
                  <span>Software Engineer</span>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src={clientImg3} alt="image" width={95} height={95} />
                  </div>
                  <h3>Nicky Parsons</h3>
                  <span>Fictional Character</span>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src={clientImg4} alt="image" width={95} height={95} />
                  </div>
                  <h3>Jason Momoa</h3>
                  <span>American Actor</span>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-feedback">
                <div className="single-feedback">
                  <div className="client-img">
                    <Image src={clientImg5} alt="image" width={95} height={95} />
                  </div>
                  <h3>Gennady Korotkevich</h3>
                  <span>port Programmer</span>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src={shape1}
            alt="shape"
            width={202}
            height={202}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src={shape2}
            alt="shape"
            width={22}
            height={22}
          />
        </div>
        <div className="shape3">
          <Image
            src={shape3}
            alt="shape"
            width={28}
            height={28}
          />
        </div>
        <div className="shape4">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape5">
          <Image
            src={shape5}
            alt="shape"
            width={182}
            height={146}
          />
        </div>
        <div className="shape6 rotateme">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape7">
          <Image
            src={shape4}
            alt="shape"
            width={21}
            height={20}
          />
        </div>
        <div className="shape8 rotateme">
          <Image
            src={shape2}
            alt="shape"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
}
 
export default Feedback;
