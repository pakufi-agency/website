"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlockRendererClient from "../BlockRendererClient";
import styles from "./ServiceDetails.module.scss";
import { getStrapiImageUrl } from "@/utils/utils";

// Import icons

type ServiceDetailsProps = {
  name: string;
  slug: string;
  subtitle: string;
  descriptionRichText: any;
  icon: string;
  createdAt: string;
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  name,
  subtitle,
  descriptionRichText,
  icon,
}) => {
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

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <Link
                  href="https://cal.com/tahir-qalliu-m7pygj/client-call-pakufi-30-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-secondary ${styles.firstCTA}`}
                >
                  Chat with us
                </Link>
                <Link
                  href="/services/"
                  className={`btn btn-primary ${styles.secondCTA}`}
                >
                  Go back to services overview
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
