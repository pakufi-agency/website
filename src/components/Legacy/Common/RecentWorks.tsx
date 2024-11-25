"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import worksImg1 from "/public/images/works-image/works-image1.jpg";
import worksImg2 from "/public/images/works-image/works-image2.jpg";
import worksImg3 from "/public/images/works-image/works-image3.jpg";
import worksImg4 from "/public/images/works-image/works-image4.jpg";
import worksImg5 from "/public/images/works-image/works-image5.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const RecentWorks = () => {
  return (
    <>
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

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
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="works-slides"
        >
          <SwiperSlide>
            <div className="single-works">
              <Image src={worksImg1} alt="image" width={640} height={450} />

              <Link
                href="/projects/project-details/"
                className="icon"
                
              >
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link href="/projects/project-details/" >
                    Incredible infrastructure
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-works">
              <Image src={worksImg2} alt="image" width={640} height={450} />

              <Link
                href="/projects/project-details/"
                className="icon"
                
              >
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link href="/projects/project-details/" >
                    Email Notifications
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-works">
              <Image src={worksImg3} alt="image" width={640} height={450} />

              <Link
                href="/projects/project-details/"
                className="icon"
                
              >
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link href="/projects/project-details/" >
                    Best Analytics Audits
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-works">
              <Image src={worksImg4} alt="image" width={640} height={450} />

              <Link
                href="/projects/project-details/"
                className="icon"
                
              >
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link href="/projects/project-details/" >
                    Simple Dashboard
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-works">
              <Image src={worksImg5} alt="image" width={640} height={450} />

              <Link
                href="/projects/project-details/"
                className="icon"
                
              >
                <Icon.Settings />
              </Link>

              <div className="works-content">
                <h3>
                  <Link href="/projects/project-details/" >
                    Information Retrieval
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
