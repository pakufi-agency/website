"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import projectImg1 from "/public/images/projects-img1.jpg";
import projectImg2 from "/public/images/projects-img2.jpg";
import projectImg3 from "/public/images/projects-img3.jpg";
import projectImg4 from "/public/images/projects-img4.jpg";
import projectImg5 from "/public/images/projects-img5.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const Projects = () => {
  return (
    <>
      <div className="ml-projects-area pt-0 ptb-80">
        <div className="container">
          <div className="section-title st-fs-28">
            <h2>Proud Projects That Make Us Stand Out</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="container-fluid">
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
            className="ml-projects-slides"
          >
            <SwiperSlide>
              <div className="single-ml-projects-box">
                <Image src={projectImg1} alt="image" width={800} height={800} />
                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-projects-box">
                <Image src={projectImg2} alt="image" width={800} height={800} />
                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-projects-box">
                <Image src={projectImg3} alt="image" width={800} height={800} />
                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-projects-box">
                <Image src={projectImg4} alt="image" width={800} height={800} />
                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-ml-projects-box">
                <Image src={projectImg5} alt="image" width={800} height={800} />
                <div className="plus-icon">
                  <Link href="/projects/project-details/" >
                    <span></span>
                  </Link>
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

export default Projects;
