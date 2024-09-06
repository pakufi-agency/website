"use client";

import React from "react";
import Link from 'next/link';
import * as Icon from "react-feather";
import Image from "next/image";
import BlogSidebar from "../../components/Blog/BlogSidebar";

import blogDetails from "/public/images/blog-image/blog-details.jpg";

import blogImg1 from "/public/images/blog-image/blog7.jpg";
import blogImg2 from "/public/images/blog-image/blog8.jpg";
import blogImg3 from "/public/images/blog-image/blog9.jpg";

import user1 from "/public/images/client-image/client1.jpg";
import user2 from "/public/images/client-image/client2.jpg";
import user3 from "/public/images/client-image/client3.jpg";
import user4 from "/public/images/client-image/client4.jpg";
import user5 from "/public/images/client-image/client5.jpg";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={blogDetails}
                    alt="image"
                    width={860}
                    height={700}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> September 31, 2022
                      </li>
                      <li>
                        <Icon.User /> <Link href="#">Steven Smith</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>The security risks of changing package owners</h2>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className="block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg1}
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg2}
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src={blogImg3}
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className="features-list">
                    <li>
                      <Icon.Check /> Scientific Skills For getting a better
                      result
                    </li>
                    <li>
                      <Icon.Check /> Communication Skills to getting in touch
                    </li>
                    <li>
                      <Icon.Check /> A Career Overview opportunity Available
                    </li>
                    <li>
                      <Icon.Check /> A good Work Environment For work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The Rise Of Smarketing And Why You Need It</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <Link href="#">Fashion</Link>
                    <Link href="#">Smart</Link>
                    <Link href="#">Marketing</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
                  </div>
                </div>

                <div className="startp-post-navigation">
                  <div className="prev-link-wrapper">
                    <div className="info-prev-link-wrapper">
                      <Link href="#">
                        <span className="image-prev">
                          <Image
                            src={blogImg1}
                            alt="image"
                            width={860}
                            height={700}
                          />
                          <span className="post-nav-title">Prev</span>
                        </span>

                        <span className="prev-link-info-wrapper">
                          <span className="prev-title">
                            Don&apos;t buy a tech gift until you read these rules
                          </span>
                          <span className="meta-wrapper">
                            <span className="date-post">January 21, 2022</span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="next-link-wrapper">
                    <div className="info-next-link-wrapper">
                      <Link href="#">
                        <span className="next-link-info-wrapper">
                          <span className="next-title">
                            The golden rule of buying a phone as a gift
                          </span>
                          <span className="meta-wrapper">
                            <span className="date-post">January 21, 2022</span>
                          </span>
                        </span>

                        <span className="image-next">
                          <Image
                            src={blogImg2}
                            alt="image"
                            width={860}
                            height={700}
                          />
                          <span className="post-nav-title">Next</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src={user1}
                              className="avatar"
                              alt="image"
                              width={95}
                              height={95}
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            April 24, 2019 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src={user2}
                                  className="avatar"
                                  alt="image"
                                  width={95}
                                  height={95}
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>

                        <ol className="children">
                          <li className="comment">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <Image
                                    src={user3}
                                    className="avatar"
                                    alt="image"
                                    width={95}
                                    height={95}
                                  />
                                  <b className="fn">Sarah Taylor</b>
                                  <span className="says">says:</span>
                                </div>

                                <div className="comment-metadata">
                                  April 24, 2019 at 10:59 am
                                </div>
                              </footer>

                              <div className="comment-content">
                                <p>
                                  Lorem Ipsum has been the industry standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen.
                                </p>
                              </div>

                              <div className="reply">
                                <Link href="#" className="comment-reply-link">
                                  Reply
                                </Link>
                              </div>
                            </article>
                          </li>
                        </ol>
                      </ol>
                    </li>

                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src={user4}
                              className="avatar"
                              alt="image"
                              width={95}
                              height={95}
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>

                          <div className="comment-metadata">
                            April 24, 2019 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src={user5}
                                  className="avatar"
                                  alt="image"
                                  width={95}
                                  height={95}
                                />
                                <b className="fn">James Anderson</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols={45}
                          rows={5}
                          maxLength={65525}
                          required
                        ></textarea>
                      </p>

                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required
                        />
                      </p>

                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                      </p>

                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label htmlFor="comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post Comment"
                        />
                      </p>
                    </form>
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

export default BlogDetailsContent;
