"use client";

import React, { ReactNode } from "react";

import styles from "./SectionHalfBackground.module.scss";

interface SectionHalfBackgroundProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor2?: "green" | "blue";
  children: ReactNode;
}

const SectionHalfBackground: React.FC<SectionHalfBackgroundProps> = ({
  sectionTitle,
  sectionSubtitle,
  backgroundColor,
  titleColor,
  descriptionColor,
  barBallColor2,
  children,
}) => {
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
        </div>
      </div>
    </>
  );
};

export default SectionHalfBackground;
