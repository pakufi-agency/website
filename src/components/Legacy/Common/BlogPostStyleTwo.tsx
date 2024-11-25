"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";

import blogImg1 from "/public/images/blog-image/blog1.jpg";
import blogImg2 from "/public/images/blog-image/blog2.jpg";
import blogImg3 from "/public/images/blog-image/blog3.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const BlogPostStyleTwo = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title st-fs-28">
            <span className="sub-title">News</span>
            <h2>The News from Our Blog</h2>
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
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg1}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#" >
                        Admin
                      </Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>

                  <h3>
                    <Link href="/blog/blog-details/" >
                      The security risks of changing package owners
                    </Link>
                  </h3>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
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
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg2}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#" >
                        Admin
                      </Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>

                  <h3>
                    <Link href="/blog/blog-details/" >
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
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
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg3}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#" >
                        Admin
                      </Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog/blog-details/" >
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape6 rotateme">
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

export default BlogPostStyleTwo;
