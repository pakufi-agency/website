"use client";

import React, { useState } from "react";
import * as Icon from "react-feather";

import styles from "./SearchWidget.module.scss";
import stylesCommonWidget from "./WidgetCommon.module.scss";

interface SearchWidgetProps {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({
  onSearch,
  placeholder = "Search...",
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <div
      className={`${stylesCommonWidget.widgetArea} ${styles.widgetSearch} ${className}`}
    >
      {/* <h3 className={stylesCommonWidget.widgetTitle}>{title}</h3> */}

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <label className={styles.searchFormLabel}>
          <input
            type="search"
            className={styles.searchField}
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.searchButton}>
          <Icon.Search />
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;
