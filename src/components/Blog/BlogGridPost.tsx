"use client";

import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "/public/images/blog-image/blog1.jpg";
import blogImg2 from "/public/images/blog-image/blog2.jpg";
import blogImg3 from "/public/images/blog-image/blog3.jpg";
import blogImg4 from "/public/images/blog-image/blog4.jpg";
import blogImg5 from "/public/images/blog-image/blog5.jpg";
import blogImg6 from "/public/images/blog-image/blog6.jpg";

const BlogGridPost = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg1}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      The Security Risks of Changing Package Owners
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      Admin
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg2}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      Smith
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg3}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      John
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg4}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      Admin
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg5}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      Smith
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/" >
                    <Image
                      src={blogImg6}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/" >
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>

                  <span>
                    By{" "}
                    <Link href="#" >
                      John
                    </Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>

                  <Link
                    href="/blog/blog-details/"
                    className="read-more-btn"
                    
                  >
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridPost;
