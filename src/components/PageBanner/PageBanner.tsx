"use client";

import React from "react";
import Image from "next/image";
import { getStrapiImageUrl } from "../../utils/utils";

import styles from "./PageBanner.module.scss";


interface PageBannerProps {
  pageTitle: string;
  internalBannerMedia: { url: string; alternativeText: string };
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  internalBannerMedia,
}) => {
  return (
    <>
      <div
        className={styles.pageBannerBox}
        style={{
          backgroundImage:
            internalBannerMedia &&
            `url(${getStrapiImageUrl(internalBannerMedia.url)})`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>

        <div className="shape2 rotateme">
          <Image src="/images/backgrounds/white-cross.svg" alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={12} height={16} />
        </div>
        <div className="shape6 rotateme">
          <Image src="/images/backgrounds/green-triangle.svg" alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default PageBanner;
