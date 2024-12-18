"use client";

import React from "react";

const LoadingError = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Error Loading Page</h1>
      <p>
        We encountered an issue while loading this page. Please try refreshing
        or come back later.
      </p>
    </div>
  );
};

export default LoadingError;
