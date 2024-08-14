import React from "react";
import Link from "next/link";

const BlogSingleCard = ({
  blogLink,
  blogImg,
  catLink,
  blogCat,
  blogAuthor,
  blogDate,
  blogTitle,
  blogText,
}) => {
  return (
    <div className="blog__single mb-70">
      <div className="blog__single-thumb">
        <Link href={blogLink}>
          <img src={blogImg} alt="blog" />
        </Link>
      </div>
      <div className="blog__single-content">
        <div className="blog__single-content-tag">
          <Link href={catLink}>{blogCat}</Link>
        </div>
        <div className="blog__single-content-meta">
          <ul>
            <li>
              <Link href="/single-blog">
                <i className="far fa-user"></i>
                {blogAuthor}
              </Link>
            </li>
            <li>
              <Link href="/single-blog">
                <i className="far fa-calendar-alt"></i>
                {blogDate}
              </Link>
            </li>
          </ul>
        </div>
        <h2>
          <Link href={blogLink}>{blogTitle}</Link>
        </h2>
        <p>{blogText}</p>
        <div className="blog__link blog__link-single">
          <Link href={blogLink} className="m-btn">
            Read More<i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleCard;
