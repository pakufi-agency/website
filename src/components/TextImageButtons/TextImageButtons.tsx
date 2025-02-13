"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

import styles from "./TextImageButtons.module.scss";
interface TextImageButtons {
  richText: BlocksContent;
  buttonOneLabel: String;
  buttonOneLink: URL;
  buttonTwoLabel: String;
  buttonTwoLink: URL;
  media: { url: string; alternativeText: string };
}

const TextImageButtons: React.FC<TextImageButtons> = ({
  richText,
  media,
  buttonOneLabel,
  buttonOneLink,
  buttonTwoLabel,
  buttonTwoLink,
}) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 ${styles.content}`}>
              <BlockRendererClient content={richText} />

              <Link
                href={buttonOneLink}
                className={`btn btn-primary ${styles.buttonLink}`}
              >
                {buttonOneLabel}
              </Link>

              <Link
                href={buttonTwoLink}
                className={`btn btn-primary ${styles.buttonLink}`}
              >
                {buttonTwoLabel}
              </Link>
            </div>

            <div
              className={`col-lg-6 ${styles.image}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Image
                src={media.url}
                alt={media.alternativeText}
                width={499}
                height={370}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextImageButtons;
