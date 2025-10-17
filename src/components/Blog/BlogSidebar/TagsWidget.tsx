"use client";

import React from "react";
import Link from "next/link";

import styles from "./TagsWidget.module.scss";
import stylesCommonWidget from "./WidgetCommon.module.scss";

interface Tag {
  id: number;
  name: string;
  link: string;
  count: number;
}

interface TagsWidgetProps {
  tags?: Tag[];
  title?: string;
  className?: string;
}

const TagsWidget: React.FC<TagsWidgetProps> = ({
  tags = [],
  title = "Tags",
  className = "",
}) => {
  return (
    <div
      className={`${stylesCommonWidget.widgetArea} ${styles.widgetTagCloud} ${className}`}
    >
      <h3 className={stylesCommonWidget.widgetTitle}>{title}</h3>

      <div className={styles.tagCloud}>
        {tags.map((tag) => (
          <Link key={tag.id} href={tag.link} className={styles.tagLink}>
            {tag.name}{" "}
            <span className={styles.tagLinkCount}>({tag.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;
