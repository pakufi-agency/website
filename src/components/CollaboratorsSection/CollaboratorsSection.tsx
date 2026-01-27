"use client";

import React from "react";
import Carousel from "./Carousel";

import styles from "./CollaboratorsSection.module.scss";

export interface PartnerItem {
  name: string;
  absoluteUrl: string;
  logo: { url: string; alternativeText?: string | null };
  logoHeight?: number;
  logoWidth?: number;
}

interface CollaboratorsSectionProps {
  items: [];
}

const CollaboratorsSection: React.FC<CollaboratorsSectionProps> = ({
  items,
}: {
  items: PartnerItem[];
}) => {
  return (
    <>
      <div>
        <div className={`row justify-content-center ${styles.container}`}>
          <h3 className={styles.title}>Our valued clients and partners</h3>
          <Carousel items={items} />
        </div>
      </div>
    </>
  );
};

export default CollaboratorsSection;
