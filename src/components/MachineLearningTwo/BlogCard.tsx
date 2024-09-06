"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import blogImg1 from "/public/images/blog-image/blog9.jpg";
import blogImg2 from "/public/images/blog-image/blog10.jpg";
import blogImg3 from "/public/images/blog-image/blog11.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Story</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg1}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#" >
                          Admin
                        </Link>
                      </li>
                      <li>August 15, 2022</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/blog-details/" >
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="learn-more-btn"
                    
                  >
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg2}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#" >
                          Admin
                        </Link>
                      </li>
                      <li>August 18, 2019</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/blog-details/" >
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="learn-more-btn"
                    
                  >
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-blog-post-box">
                <div className="entry-thumbnail">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg3}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#" >
                          Admin
                        </Link>
                      </li>
                      <li>August 15, 2019</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/blog-details/" >
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="learn-more-btn"
                    
                  >
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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

export default BlogCard;
