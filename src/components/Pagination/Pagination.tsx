"use client";

import React from "react";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = "",
}) => {
  const handlePageChange = (page: number) => {
    if (
      onPageChange &&
      page !== currentPage &&
      page >= 1 &&
      page <= totalPages
    ) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className={`col-lg-12 col-md-12 ${className}`}>
      <div className={styles.paginationArea}>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {/* Previous Button */}
            {showPrevNext && (
              <li
                className={`${styles.pageItem} ${
                  currentPage <= 1 ? "disabled" : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  aria-label="Previous page"
                >
                  Prev
                </button>
              </li>
            )}

            {/* Page Numbers */}
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={`${styles.pageItem} ${
                  pageNumber === currentPage ? "active" : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={() => handlePageChange(pageNumber)}
                  aria-label={`Go to page ${pageNumber}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              </li>
            ))}

            {/* Next Button */}
            {showPrevNext && (
              <li
                className={`${styles.pageItem} ${
                  currentPage >= totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  aria-label="Next page"
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
