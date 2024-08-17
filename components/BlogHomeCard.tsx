import React, { FC } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

interface BlogHomeCardProps {
  blogLink: string;
  blogImg: string;
  blogDate: string;
  catLink: string;
  blogCat: string;
  blogTitle: string;
}

const BlogHomeCard: FC<BlogHomeCardProps> = ({
  blogLink,
  blogImg,
  blogDate,
  catLink,
  blogCat,
  blogTitle,
}) => {
  return (
    <Col xl={4} lg={4} md={6}>
      <div className="blog__item mb-40">
        <div className="blog__thumb">
          <Link href={blogLink}>
            <img src={blogImg} alt="blog" />
          </Link>
        </div>
        <div className="blog__content">
          <div className="blog__date d-flex align-items-center justify content-between">
            <i className="fa-solid fa-clock d-none d-xl-block"></i>
            <p>{blogDate}</p>
            <Link href={catLink} className="m-btn blog-btn">
              {blogCat}
            </Link>
          </div>
          <h3>
            <Link href={blogLink}>{blogTitle}</Link>
          </h3>
          <div className="blog__link">
            <Link href={blogLink} className="arrow-btn">
              Continue Reading<i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogHomeCard;
