"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

import Bars1 from "/public/images/backgrounds/two-bars-blue-pinky.svg";
import Bars2 from "/public/images/backgrounds/two-bars-spacing-blue-yellow.svg";

import styles from "./Section.module.scss";

interface SectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor?: "green" | "blue" | "";
  children: ReactNode;
  shapes?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  backgroundColor = "",
  titleColor = "",
  descriptionColor = "",
  barBallColor = "green",
  shapes,
  children,
}) => {
  return (
    <>
      <div className={`${styles.sectionContainer}`} style={{ backgroundColor }}>
        <div className={styles.barsLeft}>
          <Image src={Bars1} alt="decorations" width={350} height={350} />
        </div>
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

        {shapes && <>{shapes}</>}
        <div className={styles.barsRight}>
          <Image src={Bars2} alt="decorations" width={350} height={350} />
        </div>
      </div>
    </>
  );
};

export default Section;
