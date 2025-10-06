"use client";

import React, { useState } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";

// import BlogSidebar from "./BlogSidebar/BlogSidebar";

import { blogMockData } from "./blogMockData";
import styles from "./BlogGrid.module.scss";

const BlogWithRightSidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Adjust this based on your needs
  const totalPages = Math.ceil(blogMockData.length / postsPerPage);

  // Calculate the posts to display for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogMockData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: scroll to top of blog area
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.blogArea}>
      <div className="container">
        <div className="row">
          {/* Blog Posts */}
          <div className="col-lg-8 col-md-12">
            <div className="row justify-content-center">
              {blogMockData.map((post, idx) => (
                <div key={idx} className="col-lg-6 col-md-6">
                  <Link href={post.link}>
                    <div className={styles.singleBlogPost}>
                      <div className={styles.blogImage}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={860}
                          height={700}
                          className={styles.postImage}
                        />
                        <div className={styles.date}>
                          <Icon.Calendar /> {post.date}
                        </div>
                      </div>

                      <div className={styles.blogPostContent}>
                        <h3>{post.title}</h3>

                        {/* <span>
                        By <Link href="#">{post.author}</Link>
                      </span> */}

                        <p>{post.excerpt}</p>

                        <span className={styles.readMoreBtn}>
                          Read More <Icon.ArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showPrevNext={true}
                maxVisiblePages={5}
              />
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-12">
            <BlogSidebar
              showSearch={true}
              showPopularPosts={true}
              showCategories={false}
              showTags={false}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogWithRightSidebar;
