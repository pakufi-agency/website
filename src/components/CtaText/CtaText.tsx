"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackClick } from "../../utils/utils";

import styles from "./CtaText.module.scss";
import { Url } from "url";

interface CtaTextProps {
  title: string;
  description: string;
  buttonCtaOneLabel: string;
  buttonCtaOneLink: Url;
}

const CtaText: React.FC<CtaTextProps> = ({
  title,
  description,
  buttonCtaOneLabel,
  buttonCtaOneLink,
}) => {
  const pathname = usePathname(); // Get the current page path
  
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <h3>{title}</h3>
          <p>{description}</p>

          <Link href={buttonCtaOneLink} className={`btn btn-light`}>
            <span
              onClick={() => trackClick('CTA:banner', buttonCtaOneLabel, buttonCtaOneLink, pathname)}
            >
              {buttonCtaOneLabel}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CtaText;
