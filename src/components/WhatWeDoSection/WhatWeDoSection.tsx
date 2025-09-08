"use client";

import AnimatedCard, { CardDataProps } from "../AnimatedCards/AnimatedCard";
import styles from "./WhatWeDoSection.module.scss";

interface SectionProps {
  title?: string;
  subtitle?: string;
  pakufiOffers: CardDataProps[];
}

const WhatWeDoSection: React.FC<SectionProps> = ({ title, pakufiOffers }) => {
  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
      </div>

      <div className={styles.servicesContainer}>
        {pakufiOffers.map((card, index) => (
          <AnimatedCard key={index} {...card} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
