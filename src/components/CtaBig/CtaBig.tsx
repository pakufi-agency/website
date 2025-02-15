"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "../../utils/utils";

import styles from "./CtaBig.module.scss";

import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";
import whiteTriangle from "/public/images/backgrounds/white-triangle.svg";

interface CtaBigProps {
  title: string;
  description: string;
  buttonCtaOneLabel: string;
  buttonCtaOneLink: string;
  buttonCtaTwoLabel: String;
  buttonCtaTwoLink: string;
  media: { url: string; alternativeText: string };
}

const CtaBig: React.FC<CtaBigProps> = ({
  title,
  description,
  buttonCtaOneLabel,
  buttonCtaOneLink,
  buttonCtaTwoLabel,
  buttonCtaTwoLink,
  media,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.image}>
                <Image
                  src={getStrapiImageUrl(media.url)}
                  alt={media.alternativeText}
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className={styles.content}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
                <div className={styles.buttonsContainer}>
                  {buttonCtaOneLink && (
                    <Link
                      href={buttonCtaOneLink}
                      className={`btn btn-light ${styles.button}`}
                    >
                      {buttonCtaOneLabel}
                    </Link>
                  )}
                  {buttonCtaTwoLink && (
                    <Link
                      href={buttonCtaTwoLink}
                      className={`btn btn-light ${styles.button}`}
                    >
                      {buttonCtaTwoLabel}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape4">
          <Image src={greenTriangle} alt="shape" width={21} height={20} />
        </div>
        <div className="shape1">
          <Image src={whiteTriangle} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={whiteCross} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default CtaBig;
