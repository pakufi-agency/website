"use client";

import React, { ReactNode } from "react";

import styles from "./Section.module.scss";

interface SectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor?: "green" | "blue" | "";
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  backgroundColor = "",
  titleColor = "",
  descriptionColor = "",
  barBallColor = "green",
  children,
}) => {
  return (
    <>
      <div className={`${styles.sectionContainer}`} style={{ backgroundColor }}>
        <div className="container">
          <div className={`section-title`}>
            <h2 style={{ color: titleColor }}>{sectionTitle}</h2>
            <div
              className={`bar ${
                barBallColor === "green" ? styles.ballGreen : styles.ballBlue
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

export default Section;
