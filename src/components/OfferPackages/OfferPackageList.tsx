"use client";

import React from "react";
import OfferPackage, { OfferPackageProps } from "./OfferPackage";
import styles from "./OfferPackageList.module.scss";

interface OfferPackageListProps {
  items: OfferPackageProps[];
}

const OfferPackageList: React.FC<OfferPackageListProps> = ({ items = [] }) => {
  return (
    <div id="offerSection" className={`${styles.offerPackagesArea}`}>
      <div className="container">
        <div className={`row justify-content-center g-4 ${styles.row}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-sm-6 col-md-6 ${styles.col}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <OfferPackage
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                features={item.features}
                cta={item.cta}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPackageList;
