"use client";

import React from "react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import Image, { StaticImageData } from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import { ButtonLink } from "../ButtonLink";


import styles from "./ServiceBox.module.scss";

interface ServiceBoxProps {
  name: string;
  subtitle: string;
  descriptionRichText: BlocksContent;
  descriptionShort: BlocksContent;
  icon: string;
  slug: string;
}

interface ServiceBoxesProps {
  items: ServiceBoxProps[];
}

const ServiceBox: React.FC<ServiceBoxesProps> = ({ items }) => {
  const getImage = (iconName: string): string => {
    switch (iconName) {
      case "brush":
        return "/images/brush.svg";
      case "devices":
        return "/images/devices.svg";
      case "maintenance":
        return "/images/maintenance.svg";
      case "management":
        return "/images/management.svg";
      case "planning":
        return "/images/planning.svg";
      case "socialMedia":
        return "/images/social-media.svg";
      default:
        return "/images/devices.svg"; // Fallback image
    }
  };

  return (
    <div id="serviceSection" className={`${styles.solutionsArea}`}>
      <div className="container">
        <div className="row justify-content-center g-4">
          {items.map((item, index) => (
            <div key={index} className={`col-lg-4 col-sm-6 col-md-6`}>
              <div className={styles.singleSolutionsBox}>
                <div className={styles.singleSolutionsBoxTitle}>
                  <div className={styles.icon}>
                    <Image
                      src={getImage(item.icon)}
                      alt={item.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <h2>{item.name}</h2>
                </div>
                <div className={styles.description}>
                  {" "}
                  {item.descriptionShort ? (
                    <BlockRendererClient content={item.descriptionShort} />
                  ) : (
                    <BlockRendererClient content={item.descriptionRichText} />
                  )}
                </div>
                <div className={styles.buttonContainer}>
                  <ButtonLink
                    href={`/services/${item.slug}`}
                    label="Learn More"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
