"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ButtonLink } from "../ButtonLink";


import styles from "./Section.module.scss";

interface SectionProps {
  sectionTitle: string;
  showTitle?: boolean;
  subtitle?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  barBallColor: "green" | "blue" | "";
  children: ReactNode;
  shapesVariation: string;
  backgroundVariation: string;
  buttonSectionCtaLabel?: string;
  buttonSectionCtaLink?: string;
}

const Section: React.FC<SectionProps> = ({
  sectionTitle,
  showTitle,
  subtitle,
  backgroundColor,
  titleColor,
  descriptionColor,
  barBallColor,
  shapesVariation,
  backgroundVariation,
  buttonSectionCtaLabel,
  buttonSectionCtaLink,
  children,
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className={`${styles.sectionContainer}`} style={{ backgroundColor }}>
        {backgroundVariation === "two_bars" && (
          <div className={`${styles.barsLeft} ${styles.twoLeft}`}>
            <Image src="/images/backgrounds/two-bars-blue-pink.svg" alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation === "three_bars" && (
          <div className={`${styles.barsLeft} ${styles.threeLeft}`}>
            <Image
              src="/images/backgrounds/three-bars-left-side.svg"
              alt="decorations"
              width={350}
              height={350}
            />
          </div>
        )}
        <div className="container">
          {showTitle && (
            <div className={`section-title`}>
              <h2 style={{ color: titleColor }}>{sectionTitle}</h2>
              <div
                className={`bar ${
                  barBallColor === "green" ? styles.ballGreen : styles.ballBlue
                }`}
              ></div>
              {subtitle && (
                <p style={{ color: descriptionColor }}>{subtitle}</p>
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

        {shapesVariation === "one" && (
          <>
            <div className="shape6 rotateme">
              <Image src="/images/backgrounds/white-triangle.svg" alt="shape" width={21} height={20} />
            </div>
            <div className="shape7 rotateme">
              <Image src="/images/backgrounds/green-cross.svg" alt="shape" width={22} height={22} />
            </div>
            <div className="shape2">
              <Image src="/images/backgrounds/white-triangle.svg" alt="shape" width={21} height={20} />
            </div>
            <div className="shape4 rotateme">
              <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={21} height={20} />
            </div>
          </>
        )}

        {shapesVariation === "two" && (
          <>
            <div className="shape4">
              <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={21} height={20} />
            </div>
            <div className="shape6 rotateme">
              <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={21} height={20} />
            </div>
            <div className="shape7">
              <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={21} height={20} />
            </div>
            <div className="shape2 rotateme">
              <Image src="/images/backgrounds/green-cross.svg" alt="shape" width={22} height={22} />
            </div>
          </>
        )}

        {backgroundVariation === "two_bars" && (
          <div className={`${styles.barsRight} ${styles.twoRight}`}>
            <Image src="/images/backgrounds/two-bars-blue-pink.svg" alt="decorations" width={550} height={550} />
          </div>
        )}
        {backgroundVariation === "three_bars" && (
          <div className={`${styles.barsRight} ${styles.threeRight}`}>
            <Image
              src="/images/backgrounds/three-bars-right-side.svg"
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
