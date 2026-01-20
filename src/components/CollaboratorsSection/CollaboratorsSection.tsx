"use client";

import React from "react";

import styles from "./CollaboratorsSection.module.scss";
interface CollaboratorsSectionProps {
  items: [];
}

const CollaboratorsSection: React.FC<CollaboratorsSectionProps> = ({
  items,
}) => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          {items.map(({ name, logo, absoluteUrl }, index) => (
            <div
              className={`col-8 col-lg-4 ${styles.card}`}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
              key={index}
            >
              Sliders here
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollaboratorsSection;
