"use client";

import React from "react";
import SearchWidget from "./SearchWidget";
import PopularPostsWidget from "./PopularPostsWidget";
import CategoriesWidget from "./CategoriesWidget";
import TagsWidget from "./TagsWidget";
import { popularPostsData, categoriesData, tagsData } from "./BlogSidebarData";

import styles from "./WidgetCommon.module.scss";

interface BlogSidebarProps {
  onSearch?: (searchTerm: string) => void;
  showSearch?: boolean;
  showPopularPosts?: boolean;
  showCategories?: boolean;
  showTags?: boolean;
  className?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  onSearch,
  showSearch = true,
  showPopularPosts = true,
  showCategories = true,
  showTags = true,
  className = "",
}) => {
  const handleSearch = (searchTerm: string) => {
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Default search behavior - you can implement this as needed
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className={`${styles.widgetArea} ${className}`} id="secondary">
      {showSearch && (
        <SearchWidget onSearch={handleSearch} placeholder="Search..." />
      )}

      {showPopularPosts && (
        <PopularPostsWidget posts={popularPostsData} title="Popular Posts" />
      )}

      {showCategories && (
        <CategoriesWidget categories={categoriesData} title="Categories" />
      )}

      {showTags && <TagsWidget tags={tagsData} title="Tags" />}
    </div>
  );
};

export default BlogSidebar;
