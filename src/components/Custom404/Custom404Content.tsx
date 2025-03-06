"use client";

import React from "react";
import Link from "next/link";
import SinglePageContainer from "../Layout/SinglePageContainer"

import styles from "./Custom404.module.scss"

const Custom404Content = () => {
  return (
    <SinglePageContainer>
      <div className={styles.errorArea}>
        <div className="container">
          <div className={styles.errorContent}>
            <div className={styles.notfound}>
              <h1>Oops!</h1>
            </div>
            <h3>404 - Page not found</h3>
            <p>
              The page you are looking for might have been removed had its
              name changed or is temporarily unavailable.
            </p>

            <Link href="/" className="btn btn-primary" >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </SinglePageContainer>
  );
};

export default Custom404Content;
