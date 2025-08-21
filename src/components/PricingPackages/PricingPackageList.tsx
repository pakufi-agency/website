"use client";

import React from "react";
import PricingPackage, { PricingPackageProps } from "./PricingPackage";
import styles from "./PricingPackageList.module.scss";

interface PricingPackageListProps {
  price_packages: PricingPackageProps[];
}

const PricingPackageList: React.FC<PricingPackageListProps> = ({
  price_packages = [],
}) => {
  return (
    <div id="priceSection" className={`${styles.pricePackagesArea}`}>
      <div className="container">
        <div className={`row justify-content-center g-4 ${styles.row}`}>
          {price_packages.map((pricePackage, index) => (
            <div
              key={index}
              className={`col-lg-4 col-sm-6 col-md-6 ${styles.col}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <PricingPackage
                key={index}
                title={pricePackage.title}
                subtitle={pricePackage.subtitle}
                price={pricePackage.price}
                features={pricePackage.features}
                cta={pricePackage.cta}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackageList;
