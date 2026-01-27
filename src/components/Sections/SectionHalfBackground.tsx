"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "../ButtonLink";

import styles from "./SectionHalfBackground.module.scss";

interface SectionHalfBackgroundProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor2?: "green" | "blue";
  buttonSectionCtaLabel?: string;
  buttonSectionCtaLink?: string;
  children: ReactNode;
}

const SectionHalfBackground: React.FC<SectionHalfBackgroundProps> = ({
  sectionTitle,
  sectionSubtitle,
  backgroundColor,
  titleColor,
  descriptionColor,
  barBallColor2,
  buttonSectionCtaLabel,
  buttonSectionCtaLink,
  children,
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className={`${styles.container} pt-80`} style={{ backgroundColor }}>
        <div className="container">
          <div className={`section-title ${styles.sectionTitle}`}>
            <h2 style={{ color: titleColor }}>{sectionTitle}</h2>
            <div
              className={`bar ${
                barBallColor2 === "green" ? styles.ballGreen : styles.ballBlue
              }`}
            ></div>
            <p style={{ color: descriptionColor }}>{sectionSubtitle}</p>
          </div>

          <div className="row justify-content-center">{children}</div>

          <div className="text-center">
            {buttonSectionCtaLink && (
              <ButtonLink
                href={buttonSectionCtaLink}
                label={buttonSectionCtaLabel}
                pathname={pathname}
                className="btn btn-primary"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHalfBackground;
