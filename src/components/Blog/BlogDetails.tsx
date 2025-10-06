"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import styles from "./BlogDetails.module.scss";

type BlogDetailsProps = {
  articleImage: string;
  entryMeta: {
    date: string;
    author: string;
  };
  richText: BlocksContent;
  tags: string[];
  navigation: {
    previous?: {
      title: string;
      date: string;
      image: string;
      href: string;
    };
    next?: {
      title: string;
      date: string;
      image: string;
      href: string;
    };
  };
};

const BlogDetailsContent: React.FC<BlogDetailsProps> = ({
  articleImage,
  entryMeta,
  richText,
  tags,
  navigation,
}) => {
  return (
    <div className={styles.blogDetailsArea}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <article className={styles.blogDetailsDesc}>
              {/* Article Image */}
              <div className={styles.articleImage}>
                <Image
                  src={articleImage}
                  alt="Blog Details"
                  width={860}
                  height={700}
                />
              </div>

              {/* Entry Meta */}
              <div className={styles.articleContent}>
                <ul className={styles.entryMeta}>
                  <li>
                    <Icon.Clock /> {entryMeta.date}
                  </li>
                  <li>
                    <Icon.User /> <Link href="#">{entryMeta.author}</Link>
                  </li>
                </ul>

                <BlockRendererClient content={richText} />
              </div>

              {/* Tags */}
              {tags?.length > 0 && (
                <div className={styles.articleFooter}>
                  <div className={styles.articleTags}>
                    {tags.map((tag) => (
                      <Link key={tag} href="#">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Post Navigation */}
              <div className={styles.postNavigation}>
                {navigation.previous && (
                  <div className={styles.prevLinkWrapper}>
                    <div className={styles.infoPrevLinkWrapper}>
                      <Link href={navigation.previous.href}>
                        <span className={styles.imagePrev}>
                          <Image
                            src={navigation.previous.image}
                            alt="Previous Post"
                            width={860}
                            height={700}
                          />
                          <span className={styles.postNavTitle}>Prev</span>
                        </span>
                        <span className={styles.prevLinkInfoWrapper}>
                          <span className={styles.prevTitle}>
                            {navigation.previous.title}
                          </span>
                          <span className={styles.metaWrapper}>
                            <span className={styles.datePost}>
                              {navigation.previous.date}
                            </span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                )}

                {navigation.next && (
                  <div className={styles.nextLinkWrapper}>
                    <div className={styles.infoNextLinkWrapper}>
                      <Link href={navigation.next.href}>
                        <span className={styles.nextLinkInfoWrapper}>
                          <span className={styles.nextTitle}>
                            {navigation.next.title}
                          </span>
                          <span className={styles.metaWrapper}>
                            <span className={styles.datePost}>
                              {navigation.next.date}
                            </span>
                          </span>
                        </span>
                        <span className={styles.imageNext}>
                          <Image
                            src={navigation.next.image}
                            alt="Next Post"
                            width={860}
                            height={700}
                          />
                          <span className={styles.postNavTitle}>Next</span>
                        </span>
                      </Link>
                    </div>
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
