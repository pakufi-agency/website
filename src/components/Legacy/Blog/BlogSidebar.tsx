"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

import blogImg1 from "/public/images/blog-image/blog7.jpg";
import blogImg2 from "/public/images/blog-image/blog8.jpg";
import blogImg3 from "/public/images/blog-image/blog9.jpg";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <Icon.Search />
            </button>
          </form>
        </div>

        <div className="widget widget_startp_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog/blog-details/" className="thumb" >
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(${blogImg1.src})` }}
              ></span>
            </Link>

            <div className="info">
              <time>June 10, 2022</time>
              <h4 className="title usmall">
                <Link href="/blog/blog-details/" >
                  Making Peace With The Feast Or Famine Of Freelancing
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/blog-details/" className="thumb" >
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(${blogImg2.src})` }}
              ></span>
            </Link>
            <div className="info">
              <time>June 21, 2022</time>
              <h4 className="title usmall">
                <Link href="/blog/blog-details/" >
                  I Used The Web For A Day On A 50 MB Budget
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/blog-details/" className="thumb" >
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(${blogImg3.src})` }}
              ></span>
            </Link>
            <div className="info">
              <time>June 30, 2022</time>
              <h4 className="title usmall">
                <Link href="/blog/blog-details/" >
                  How To Create A Responsive Popup Gallery?
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog" >
                Business
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                Technology
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                Tips
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                Uncategorized
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog" >
              IT <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="/blog" >
              Spacle <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="/blog" >
              Games <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="/blog" >
              Fashion <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="/blog" >
              Travel <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="/blog" >
              Smart <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="/blog" >
              Marketing <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="/blog" >
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
