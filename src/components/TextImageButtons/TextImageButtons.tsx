"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiImageUrl, trackClick } from "../../utils/utils";

import styles from "./TextImageButtons.module.scss";
import { Url } from "url";
interface TextImageButtons {
  ImagePosition: string;
  richText: BlocksContent;
  buttonOneLabel: string;
  buttonOneLink: Url;
  buttonTwoLabel: string;
  buttonTwoLink: Url;
  media: { url: string; alternativeText: string };
  textColor: string;
  buttonStyle: string;
}

const TextImageButtons: React.FC<TextImageButtons> = ({
  ImagePosition,
  richText,
  media,
  buttonOneLabel,
  buttonOneLink,
  buttonTwoLabel,
  buttonTwoLink,
  textColor,
  buttonStyle,
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className={`${styles.container}`}>
        <div className="container">
          <div className="row align-items-center">
            {ImagePosition === "right" && (
              <>
                <div
                  className={`col-lg-6 ${styles.content}`}
                  style={{ color: textColor }}
                >
                  <BlockRendererClient content={richText} />

                  <div className={styles.buttons}>
                    {buttonOneLink && (
                      <Link
                        href={buttonOneLink}
                        className={`btn btn-primary ${buttonStyle} ${styles.buttonLink}`}
                      >
                        <span
                          onClick={() =>
                            trackClick(
                              "CTA:TextImageSection",
                              buttonOneLabel,
                              buttonOneLink,
                              pathname
                            )
                          }
                        >
                          {buttonOneLabel}
                        </span>
                      </Link>
                    )}

                    {buttonTwoLink && (
                      <Link
                        href={buttonTwoLink}
                        className={`btn btn-primary ${buttonStyle} ${styles.buttonLink}`}
                      >
                        <span
                          onClick={() =>
                            trackClick(
                              "CTA:TextImageSection",
                              buttonTwoLabel,
                              buttonTwoLink,
                              pathname
                            )
                          }
                        >
                          {buttonTwoLabel}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>

                {media && (
                  <div
                    className={`col-lg-6 ${styles.image}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <Image
                      src={media && getStrapiImageUrl(media.url)}
                      alt={media && media.alternativeText}
                      width={499}
                      height={370}
                    />
                  </div>
                )}
              </>
            )}

            {ImagePosition === "left" && (
              <>
                {media && (
                  <div
                    className={`col-lg-6 ${styles.image} ${styles.imageLeft}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <Image
                      src={getStrapiImageUrl(media.url)}
                      alt={media.alternativeText}
                      width={499}
                      height={370}
                    />
                  </div>
                )}

                <div
                  className={`col-lg-6 ${styles.content}`}
                  style={{ color: textColor }}
                >
                  <BlockRendererClient content={richText} />

                  <div className={styles.buttons}>
                    {buttonOneLink && (
                      <Link
                        href={buttonOneLink}
                        className={`btn btn-primary ${styles.buttonLink}`}
                      >
                        <span
                          onClick={() =>
                            trackClick(
                              "CTA:TextImageSection",
                              buttonOneLabel,
                              buttonOneLink,
                              pathname
                            )
                          }
                        >
                          {buttonOneLabel}
                        </span>
                      </Link>
                    )}

                    {buttonTwoLink && (
                      <Link
                        href={buttonTwoLink}
                        className={`btn btn-primary ${styles.buttonLink}`}
                      >
                        <span
                          onClick={() =>
                            trackClick(
                              "CTA:TextImageSection",
                              buttonTwoLabel,
                              buttonTwoLink,
                              pathname
                            )
                          }
                        >
                          {buttonTwoLabel}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </>
            )}

            {ImagePosition === "central" && (
              <div
                className={`col-12 ${styles.content} ${styles.centralAlign}`}
                style={{ color: textColor }}
              >
                <BlockRendererClient content={richText} />

                <div className={styles.buttons}>
                  {buttonOneLink && (
                    <Link
                      href={buttonOneLink}
                      className={`btn btn-primary ${styles.buttonLink}`}
                    >
                      <span
                        onClick={() =>
                          trackClick(
                            "CTA:TextImageSection",
                            buttonOneLabel,
                            buttonOneLink,
                            pathname
                          )
                        }
                      >
                        {buttonOneLabel}
                      </span>
                    </Link>
                  )}

                  {buttonTwoLink && (
                    <Link
                      href={buttonTwoLink}
                      className={`btn btn-primary ${styles.buttonLink}`}
                    >
                      <span
                        onClick={() =>
                          trackClick(
                            "CTA:TextImageSection",
                            buttonTwoLabel,
                            buttonTwoLink,
                            pathname
                          )
                        }
                      >
                        {buttonTwoLabel}
                      </span>
                    </Link>
                  )}
                </div>

                {media && (
                  <div
                    className={`${styles.image}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <Image
                      src={getStrapiImageUrl(media.url)}
                      alt={media.alternativeText}
                      width={499}
                      height={370}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextImageButtons;
