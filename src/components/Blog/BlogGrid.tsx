"use client";

import React, { useState, useRef } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import BlogSidebar from "./BlogSidebar/BlogSidebar";

import styles from "./BlogGrid.module.scss";
import { getStrapiImageUrl, truncateText } from "@/utils/utils";

export interface BlogPost {
  title: string;
  slug: string;
  coverImage: { url: string; alternativeText: string };
  publishedAt: string;
  excerpt: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  hasSidebar?: boolean;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, hasSidebar = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate the posts to display for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const blogAreaRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: scroll to top of blog area
    if (blogAreaRef.current) {
      blogAreaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.blogArea} ref={blogAreaRef}>
      <div className="container">
        <div className="row">
          {/* Blog Posts */}
          <div className={hasSidebar ? "col-lg-8 col-md-12" : "col-12 "}>
            <div
              className={`row justify-content-center ${styles.articlesContainer}`}
            >
              {currentPosts.map((post, index) => (
                <article
                  key={index}
                  className={`col-lg-6 col-md-6 ${styles.singleBlogPost}`}
                >
                  <div className={styles.blogImage}>
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={getStrapiImageUrl(post.coverImage.url)}
                        alt={post.title}
                        width={860}
                        height={700}
                      />
                    </Link>
                  </div>

                  <div className={styles.blogDate}>
                    <Icon.Calendar />{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>

                  <div className={styles.blogPostContent}>
                    <Link href={`/blog/${post.slug}`}>
                      <h3>{post.title}</h3>
                    </Link>
                    <div className={styles.excerpt}>
                      {truncateText(post.excerpt)}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <span className={styles.readMoreBtn}>
                        Read More <Icon.ArrowRight />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  showPrevNext={true}
                  maxVisiblePages={5}
                />
              )}
            </div>
          </div>

          {hasSidebar && (
            <div className="col-lg-4 col-md-12">
              <BlogSidebar
                showSearch={true}
                showPopularPosts={true}
                showCategories={false}
                showTags={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
