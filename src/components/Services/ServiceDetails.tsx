"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import BlockRendererClient from "../BlockRendererClient";
import styles from "./ServiceDetails.module.scss";
import { getStrapiImageUrl } from "@/utils/utils";

// Import icons
import brush from "/public/images/brush.svg";
import devices from "/public/images/devices.svg";
import maintenance from "/public/images/maintenance.svg";
import management from "/public/images/management.svg";
import planning from "/public/images/planning.svg";
import socialMedia from "/public/images/social-media.svg";

type ServiceDetailsProps = {
  name: string;
  slug: string;
  subtitle: string;
  descriptionRichText: any;
  descriptionShort?: any;
  icon: string;
  createdAt: string;
  Seo: {
    seoTitle?: string;
    seoDescription?: string;
    seoPreview?: {
      url: string;
      alternativeText?: string;
    };
  };
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  name,
  subtitle,
  descriptionRichText,
  icon,
}) => {
  const getImage = (iconName: string): StaticImageData => {
    switch (iconName) {
      case "brush":
        return brush;
      case "devices":
        return devices;
      case "maintenance":
        return maintenance;
      case "management":
        return management;
      case "planning":
        return planning;
      case "socialMedia":
        return socialMedia;
      default:
        return devices; // Fallback image
    }
  };

  return (
    <div className={styles.serviceDetailsArea}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <article className={styles.serviceDetailsDesc}>
              {/* Service Header */}
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  <Image
                    src={getImage(icon)}
                    alt={name}
                    width={120}
                    height={120}
                  />
                </div>
                <div className={styles.serviceInfo}>
                  <h1>{name}</h1>
                  <h3>{subtitle}</h3>
                </div>
              </div>

              {/* Service Content */}
              <div className={styles.serviceContent}>
                <BlockRendererClient content={descriptionRichText} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
