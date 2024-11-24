"use client";

import React from "react";
import Link from "next/link";

import styles from "./CtaText.module.scss";

const CtaText = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <h3>Ready to talk?</h3>
          <p>Our team is here to answer your question about StartP</p>

          <Link href="/contact" className={`btn btn-light`}>
            Contact Us
          </Link>

          <span>
            <Link href="#">Or, get started now with a free trial</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default CtaText;
