import React, { FC } from "react";
import Link from "next/link";

const PostAuthor: FC = () => {
  return (
    <div className="post__author d-sm-flex">
      <div className="post__author-thumb">
        <img src="/assets/images/blog/author-1.jpg" alt="" />
      </div>
      <div className="post__author-content">
        <h4>Maria Lisa</h4>
        <p>
          From astronomers rogue. Prime number network of wormholes take root.
          Radio telescope deciphe descended from astronom.
        </p>
        <div className="post__author-social">
          <Link href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;