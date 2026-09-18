"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getStrapiImageUrl, trackClick } from "../../utils/utils";

import styles from "./CtaBig.module.scss";

import { Url } from "url";
import { ButtonLink } from "../ButtonLink";

interface CtaBigProps {
  title: string;
  description: string;
  buttonCtaOneLabel: string;
  buttonCtaOneLink: Url;
  buttonCtaTwoLabel: String;
  buttonCtaTwoLink: Url;
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
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.image}>
                <Image
                  src={
                    media.url.startsWith("/_next/")
                      ? media.url
                      : getStrapiImageUrl(media.url)
                  }
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
                    <ButtonLink
                      href={buttonCtaOneLink}
                      label={buttonCtaOneLabel}
                      pathname={pathname}
                      className={`btn btn-secondary btn-shining ${styles.button}`}
                    />
                  )}
                  {buttonCtaTwoLink && (
                    <ButtonLink
                      href={buttonCtaTwoLink}
                      label={buttonCtaTwoLabel}
                      pathname={pathname}
                      className={`btn btn-secondary btn-shining ${styles.button}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape4">
          <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={21} height={20} />
        </div>
        <div className="shape1">
          <Image src="/images/backgrounds/white-triangle.svg" alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src="/images/backgrounds/white-cross.svg" alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default CtaBig;
