"use client";

import AnimatedCard, { CardDataProps } from "../AnimatedCards/AnimatedCard";
import styles from "./WhatWeDoSection.module.scss";

interface SectionProps {
  title?: string;
  subtitle?: string;
  cards: CardDataProps[];
}

const WhatWeDoSection: React.FC<SectionProps> = ({
  title = "What We Do",
  cards = [],
}) => {
  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
      </div>

      <div className={styles.servicesContainer}>
        {cards.map((card, index) => (
          <AnimatedCard key={card.id} {...card} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
