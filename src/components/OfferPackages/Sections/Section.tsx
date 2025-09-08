"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

import twoBars from "/public/images/backgrounds/two-bars-blue-pink.svg";
import twoBarsRight from "/public/images/backgrounds/two-bars-spacing-blue-yellow.svg";
import threeBarsLeft from "/public/images/backgrounds/three-bars-left-side.svg";
import threeBarsRight from "/public/images/backgrounds/three-bars-right-side.svg";
import greenCross from "/public/images/backgrounds/green-cross.svg";
import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";
import whiteTriangle from "/public/images/backgrounds/white-triangle.svg";

import styles from "./Section.module.scss";

interface SectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor: "green" | "blue" | "";
  children: ReactNode;
  shapesVariation: string;
  backgroundVariation: string;
}

const Section: React.FC<SectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  backgroundColor,
  titleColor,
  descriptionColor,
  barBallColor,
  shapesVariation,
  backgroundVariation,
  children,
}) => {
  return (
    <>
      <div className={`${styles.sectionContainer}`} style={{ backgroundColor }}>
        {backgroundVariation === "two_bars" && (
          <div className={`${styles.barsLeft} ${styles.twoLeft}`}>
            <Image src={twoBars} alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation === "three_bars" && (
          <div className={`${styles.barsLeft} ${styles.threeLeft}`}>
            <Image
              src={threeBarsLeft}
              alt="decorations"
              width={350}
              height={350}
            />
          </div>
        )}
        <div className="container">
          <div className={`section-title`}>
            <h2 style={{ color: titleColor }}>{sectionTitle}</h2>
            <div
              className={`bar ${
                barBallColor === "green" ? styles.ballGreen : styles.ballBlue
              }`}
            ></div>
            {sectionSubtitle && (
              <p style={{ color: descriptionColor }}>{sectionSubtitle}</p>
            )}
          </div>

          <div className="row justify-content-center">{children}</div>
        </div>

        {shapesVariation === "one" && (
          <>
            <div className="shape6 rotateme">
              <Image src={whiteTriangle} alt="shape" width={21} height={20} />
            </div>
            <div className="shape7 rotateme">
              <Image src={greenCross} alt="shape" width={22} height={22} />
            </div>
            <div className="shape2">
              <Image src={whiteTriangle} alt="shape" width={21} height={20} />
            </div>
            <div className="shape4 rotateme">
              <Image src={greenTriangle} alt="shape" width={21} height={20} />
            </div>
          </>
        )}

        {shapesVariation === "two" && (
          <>
            <div className="shape4">
              <Image src={greenTriangle} alt="shape" width={21} height={20} />
            </div>
            <div className="shape6 rotateme">
              <Image src={greenTriangle} alt="shape" width={21} height={20} />
            </div>
            <div className="shape7">
              <Image src={greenTriangle} alt="shape" width={21} height={20} />
            </div>
            <div className="shape2 rotateme">
              <Image src={greenCross} alt="shape" width={22} height={22} />
            </div>
          </>
        )}

        {backgroundVariation === "two_bars" && (
          <div className={`${styles.barsRight} ${styles.twoRight}`}>
            <Image src={twoBars} alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation === "three_bars" && (
          <div className={`${styles.barsRight} ${styles.threeRight}`}>
            <Image
              src={threeBarsRight}
              alt="decorations"
              width={350}
              height={350}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Section;
