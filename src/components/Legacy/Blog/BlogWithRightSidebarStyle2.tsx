"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "../../components/Blog/BlogSidebar";

import blogImg1 from "/public/images/blog-image/blog9.jpg";
import blogImg2 from "/public/images/blog-image/blog10.jpg";
import blogImg3 from "/public/images/blog-image/blog11.jpg";
import blogImg4 from "/public/images/blog-image/blog12.jpg";
import blogImg5 from "/public/images/blog-image/blog13.jpg";
import blogImg6 from "/public/images/blog-image/blog14.jpg";

const BlogWithRightSidebarStyle2 = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

                <div className="col-lg-6 col-md-6">
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
                          <li>August 18, 2022</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog/blog-details/" >
                          I Used The Web For A Day On A 50 MB Budget
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

                <div className="col-lg-6 col-md-6">
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
                          <li>August 15, 2022</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog/blog-details/" >
                          Here are the 5 most telling signs of micromanagement
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post-box">
                    <div className="entry-thumbnail">
                      <Link href="/blog/blog-details/" >
                        <Image
                          src={blogImg4}
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
                          The security risks of changing package owners
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post-box">
                    <div className="entry-thumbnail">
                      <Link href="/blog/blog-details/" >
                        <Image
                          src={blogImg5}
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
                          <li>August 18, 2022</li>
                        </ul>
                      </div>

                      <h3>
                        <Link href="/blog/blog-details/" >
                          Tips to Protecting Your Business and Family
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post-box">
                    <div className="entry-thumbnail">
                      <Link href="/blog/blog-details/" >
                        <Image
                          src={blogImg6}
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
                          Protect Your Workplace from Cyber Attacks
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod...
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

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithRightSidebarStyle2;
