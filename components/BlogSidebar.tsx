import React, { FC } from "react";
import Link from "next/link";

const BlogSidebar: FC = () => {
  return (
    <div className="blog__sidebar">
      <div className="sidebar__widget-search mb-40">
        <form action="#">
          <input type="text" placeholder="Keywords" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Categories</h3>
        </div>
        <div className="sidebar__widget-link">
          <ul>
            <li>
              <Link href="/single-blog">Digital Agency</Link>
            </li>
            <li>
              <Link href="/single-blog">Social Media Marketing</Link>
            </li>
            <li>
              <Link href="/single-blog">Web Design</Link>
            </li>
            <li>
              <Link href="/single-blog">App Development</Link>
            </li>
            <li>
              <Link href="/single-blog">Brand Identity</Link>
            </li>
            <li>
              <Link href="/single-blog">UI/UX Design</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Recent Posts</h3>
        </div>
        <div className="sidebar__rc">
          <ul>
            <li className="sidebar__rc-item">
              <div className="sidebar__rc-thumb">
                <Link href="/single-blog">
                  <img src="/assets/images/blog/rc-1.jpg" alt="blog" />
                </Link>
              </div>
              <div className="sidebar__rc-content">
                <h5>
                  <Link href="/single-blog">
                    Post launch show initial product target business
                  </Link>
                </h5>
                <div className="sidebar__rc-meta">
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>22 Mar 2022
                  </span>
                </div>
              </div>
            </li>
            <li className="sidebar__rc-item">
              <div className="sidebar__rc-thumb">
                <Link href="/single-blog">
                  <img src="/assets/images/blog/rc-2.jpg" alt="blog" />
                </Link>
              </div>
              <div className="sidebar__rc-content">
                <h5>
                  <Link href="/single-blog">
                    Business transformation with abstract solutions
                  </Link>
                </h5>
                <div className="sidebar__rc-meta">
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>22 Mar 2022
                  </span>
                </div>
              </div>
            </li>
            <li className="sidebar__rc-item">
              <div className="sidebar__rc-thumb">
                <Link href="/single-blog">
                  <img src="/assets/images/blog/rc-3.jpg" alt="blog" />
                </Link>
              </div>
              <div className="sidebar__rc-content">
                <h5>
                  <Link href="/single-blog">
                    Kindling the energy hidden in matter only home
                  </Link>
                </h5>
                <div className="sidebar__rc-meta">
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>22 Mar 2022
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widget-title">
          <h3>Services</h3>
        </div>
        <div className="sidebar__widget-tags">
          <Link href="/single-blog">App</Link>
          <Link href="/single-blog">Branding</Link>
          <Link href="/single-blog">Web Design</Link>
          <Link href="/single-blog">UI/UX Design</Link>
          <Link href="/single-blog">Landing</Link>
          <Link href="/single-blog">Development</Link>
          <Link href="/single-blog">Digital Marketing</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
