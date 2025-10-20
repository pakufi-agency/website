"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
// import BlogSidebar from "./BlogSidebar/BlogSidebar";
import styles from "./BlogDetails.module.scss";
import { getStrapiImageUrl } from "@/utils/utils";

type BlogDetailsProps = {
  title: string;
  slug: string;
  content: BlocksContent;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  PostMetaInfo?: {
    metaDescription?: string;
    metaTitle?: string;
    metaImage?: {
      url: string;
      alternativeText?: string;
    };
    readingTime?: string;
    author?: string;
  };
  navigation?: {
    previous?: {
      title: string;
      slug: string;
      coverImage?: { url: string };
      publishedAt?: string;
    };
    next?: {
      title: string;
      slug: string;
      coverImage?: { url: string };
      publishedAt?: string;
    };
  };
};

const BlogDetailsContent: React.FC<BlogDetailsProps> = ({
  title,
  content,
  coverImage,
  PostMetaInfo,
  navigation,
}) => {
  return (
    <div className={styles.blogDetailsArea}>
      <div className="container">
        <div className="row">
          <div className={styles.articleContainer}>
            {/* <div className="col-lg-8 col-md-12"> */}
            <article className={styles.blogDetailsDesc}>
              <h1>{title}</h1>

              {/* Reading time */}
              {PostMetaInfo?.readingTime && (
                <ul className={styles.entryMeta}>
                  <li>
                    <Icon.Clock /> {PostMetaInfo.readingTime}
                  </li>
                  <li>
                    <Icon.User /> {PostMetaInfo.author && "Pakufi Team"}
                  </li>
                </ul>
              )}

              {/* Cover image */}
              {coverImage?.url && (
                <div className={styles.articleImage}>
                  <Image
                    src={getStrapiImageUrl(coverImage.url)}
                    alt={coverImage.alternativeText || title}
                    width={860}
                    height={700}
                  />
                </div>
              )}

              {/* Content */}
              <div className={styles.articleContent}>
                <BlockRendererClient content={content} />
              </div>

              {/* Post Navigation */}
              <div className={styles.postNavigation}>
                {navigation?.previous && (
                  <div className={styles.prevLinkWrapper}>
                    <Link href={`/blog/${navigation.previous.slug}`}>
                      <span className={styles.imagePrev}>
                        {navigation.previous.coverImage?.url && (
                          <Image
                            src={navigation.previous.coverImage.url}
                            alt={navigation.previous.title}
                            width={860}
                            height={700}
                          />
                        )}
                        <span className={styles.postNavTitle}>Prev</span>
                      </span>
                      <span className={styles.prevLinkInfoWrapper}>
                        <span className={styles.prevTitle}>
                          {navigation.previous.title}
                        </span>
                        {navigation.previous.publishedAt && (
                          <span className={styles.datePost}>
                            {navigation.previous.publishedAt}
                          </span>
                        )}
                      </span>
                    </Link>
                  </div>
                )}

                {navigation?.next && (
                  <div className={styles.nextLinkWrapper}>
                    <Link href={`/blog/${navigation.next.slug}`}>
                      <span className={styles.nextLinkInfoWrapper}>
                        <span className={styles.nextTitle}>
                          {navigation.next.title}
                        </span>
                        {navigation.next.publishedAt && (
                          <span className={styles.datePost}>
                            {navigation.next.publishedAt}
                          </span>
                        )}
                      </span>
                      <span className={styles.imageNext}>
                        {navigation.next.coverImage?.url && (
                          <Image
                            src={navigation.next.coverImage.url}
                            alt={navigation.next.title}
                            width={860}
                            height={700}
                          />
                        )}
                        <span className={styles.postNavTitle}>Next</span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          </div>
          {/* <div className="col-lg-4 col-md-12">
            <BlogSidebar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
