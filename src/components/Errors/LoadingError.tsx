"use client";

import React from "react";
import Link from "next/link";

import SinglePageContainer from "../Layout/SinglePageContainer"

const LoadingError = () => {
  return (
      <SinglePageContainer>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h1>Error Loading Page</h1>
          <p>
            We encountered an issue while loading this page. Please try refreshing
            or come back later.
          </p>
          
          <Link href="/" className="btn btn-primary" >
            Go to Homepage
          </Link>
        </div>
      </SinglePageContainer>
  );
};

export default LoadingError;
