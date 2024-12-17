"use client";

import React from "react";
import Link from "next/link";

import styles from "./CtaText.module.scss";

interface CtaTextProps {
  title: String;
  description: String;
  buttonCtaOneLabel: String;
  buttonCtaOneLink: URL;
}

const CtaText: React.FC<CtaTextProps> = ({
  title,
  description,
  buttonCtaOneLabel,
  buttonCtaOneLink,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <h3>{title}</h3>
          <p>{description}</p>

          <Link href={buttonCtaOneLink} className={`btn btn-light`}>
            {buttonCtaOneLabel}
          </Link>

          {/* <span>
            <Link href="#">Or, get started now with a free trial</Link>
          </span> */}
        </div>
      </div>
    </>
  );
};

export default CtaText;
