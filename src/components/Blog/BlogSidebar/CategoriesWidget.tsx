"use client";

import React from "react";
import Link from "next/link";

import styles from "./Categories.module.scss";
import stylesCommonWidget from "./WidgetCommon.module.scss";

interface Category {
  id: number;
  name: string;
  link: string;
  count?: number;
}

interface CategoriesWidgetProps {
  categories?: Category[];
  title?: string;
  className?: string;
}

const CategoriesWidget: React.FC<CategoriesWidgetProps> = ({
  categories = [],
  title = "Categories",
  className = "",
}) => {
  return (
    <div
      className={`${stylesCommonWidget.widgetArea} ${styles.widgetCategories} ${className}`}
    >
      <h3 className={stylesCommonWidget.widgetTitle}>{title}</h3>

      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            <Link href={category.link} className={styles.categoryLink}>
              {category.name}
              {category.count && ` (${category.count})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
