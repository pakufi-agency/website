"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ButtonLink } from "../ButtonLink";

import styles from "./SectionFullWidth.module.scss";

import twoBars from "/public/images/backgrounds/two-bars-blue-pink.svg";
import twoBarsRight from "/public/images/backgrounds/two-bars-spacing-blue-yellow.svg";
import threeBarsLeft from "/public/images/backgrounds/three-bars-left-side.svg";
import threeBarsRight from "/public/images/backgrounds/three-bars-right-side.svg";
import greenCross from "/public/images/backgrounds/green-cross.svg";
import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";
import whiteTriangle from "/public/images/backgrounds/white-triangle.svg";

interface SectionFullWidthProps {
  sectionTitle3: string;
  showTitle?: boolean;
  sectionSubtitle3?: string;
  backgroundColor3?: string;
  titleColor3?: string;
  descriptionColor3?: string;
  barBallColor3: "green" | "blue" | "";
  children: ReactNode;
  shapesVariation3: string;
  backgroundVariation3: string;
  buttonSectionCtaLabel?: string;
  buttonSectionCtaLink?: string;
}

const SectionFullWidth: React.FC<SectionFullWidthProps> = ({
  sectionTitle3,
  showTitle,
  sectionSubtitle3,
  backgroundColor3,
  titleColor3,
  descriptionColor3,
  barBallColor3,
  shapesVariation3,
  backgroundVariation3,
  buttonSectionCtaLabel,
  buttonSectionCtaLink,
  children,
}) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${styles.sectionContainer}`}
        style={{ backgroundColor: backgroundColor3 }}
      >
        {backgroundVariation3 === "two_bars" && (
          <div className={`${styles.barsLeft} ${styles.twoLeft}`}>
            <Image src={twoBars} alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation3 === "three_bars" && (
          <div className={`${styles.barsLeft} ${styles.threeLeft}`}>
            <Image
              src={threeBarsLeft}
              alt="decorations"
              width={350}
              height={350}
            />
          </div>
        )}
        <div className={`container-fluid ${styles.containerFluid}`}>
          {showTitle && (
            <div className={`section-title`}>
              <h2 style={{ color: titleColor3 }}>{sectionTitle3}</h2>
              <div
                className={`bar ${
                  barBallColor3 === "green" ? styles.ballGreen : styles.ballBlue
                }`}
              ></div>
              {sectionSubtitle3 && (
                <p style={{ color: descriptionColor3 }}>{sectionSubtitle3}</p>
              )}
            </div>
          )}

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

        {shapesVariation3 === "one" && (
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

        {shapesVariation3 === "two" && (
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

        {backgroundVariation3 === "two_bars" && (
          <div className={`${styles.barsRight} ${styles.twoRight}`}>
            <Image src={twoBars} alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation3 === "three_bars" && (
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

export default SectionFullWidth;
