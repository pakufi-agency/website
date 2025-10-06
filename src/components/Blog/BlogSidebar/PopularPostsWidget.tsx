"use client";

import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";

import stylesCommonWidget from "./WidgetCommon.module.scss";
import styles from "./PopularPostsWidget.module.scss";

interface PopularPost {
  id: number;
  title: string;
  date: string;
  image: StaticImageData | string;
  link: string;
}

interface PopularPostsWidgetProps {
  posts?: PopularPost[];
  title?: string;
  className?: string;
}

const PopularPostsWidget: React.FC<PopularPostsWidgetProps> = ({
  posts = [],
  title = "Popular Posts",
  className = "",
}) => {
  return (
    <div
      className={`${stylesCommonWidget.widgetArea} ${styles.widgetPostsThumb} ${className}`}
    >
      <h3 className={stylesCommonWidget.widgetTitle}>{title}</h3>

      {posts.map((post) => (
        <article key={post.id} className={styles.postItem}>
          <Link href={post.link} className={styles.postThumb}>
            <span
              className={styles.postFullImage}
              role="img"
              style={{
                backgroundImage: `url(${
                  typeof post.image === "string" ? post.image : post.image.src
                })`,
              }}
            />
          </Link>

          <div className={styles.postInfo}>
            <time className={styles.postDate}>{post.date}</time>
            <h4 className={`${styles.postTitle} ${styles.usmall}`}>
              <Link className={styles.postLink} href={post.link}>
                {post.title}
              </Link>
            </h4>
          </div>

          <div className={styles.clear}></div>
        </article>
      ))}
    </div>
  );
};

export default PopularPostsWidget;
