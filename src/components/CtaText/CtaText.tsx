"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackClick } from "../../utils/utils";

import styles from "./CtaText.module.scss";
import { Url } from "url";
import { ButtonLink } from "../ButtonLink";

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
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <h3>{title}</h3>
          <p>{description}</p>

          <ButtonLink
            href={buttonCtaOneLink}
            label={buttonCtaOneLabel}
            pathname={pathname}
            className={`btn button-pakufi-dark ${styles.button}`}
          />
        </div>
      </div>
    </>
  );
};

export default CtaText;
