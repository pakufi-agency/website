import React, { FC } from "react";
import Link from "next/link";

const BlogPagination: FC = () => {
  return (
    <div className="blog__pagination">
      <ul>
        <li>
          <Link href="/blog">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </li>
        <li className="active">
          <Link href="/blog">
            <span>01</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span>02</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span>03</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
