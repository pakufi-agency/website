"use client";

import React from "react";
import Image from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiImageUrl } from "../../utils/utils";

import styles from "./IntroSinglePage.module.scss";

interface TextImageButtons {
  title: string;
  richTextDescription: BlocksContent;
  mediaIntroSinglePage: { url: string; alternativeText: string };
  textCols: any[];
}

const IntroSinglePage: React.FC<TextImageButtons> = ({
  title,
  richTextDescription,
  mediaIntroSinglePage,
  textCols,
}) => {
  return (
    <>
      <div className={`${styles.sectionContainer}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.image}>
                <Image
                  src={
                    mediaIntroSinglePage &&
                    getStrapiImageUrl(mediaIntroSinglePage.url)
                  }
                  alt={
                    mediaIntroSinglePage && mediaIntroSinglePage.alternativeText
                  }
                  width={685}
                  height={494}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={styles.contentContainer}>
                <div className={`section-title ${styles.title}`}>
                  <h2>{title}</h2>
                  <div className={`bar`}></div>
                </div>
                <BlockRendererClient content={richTextDescription} />
              </div>
            </div>
          </div>

          {textCols && (
            <div className={styles.details}>
              {textCols.map((col, index) => (
                <div className="container" key={index}>
                  <div className="aboutText">
                    <BlockRendererClient content={col.richText} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IntroSinglePage;
