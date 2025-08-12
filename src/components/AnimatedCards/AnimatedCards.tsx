"use client";

import AnimatedCard, { CardDataProps } from "./AnimatedCard";
import styles from "./AnimatedCards.module.scss";

interface AnimatedCardsProps {
  title?: string;
  subtitle?: string;
  cards: CardDataProps[];
}

const AnimatedCards: React.FC<AnimatedCardsProps> = ({
  title = "What We Do",
  subtitle = "We combine technology expertise with human-centered mentorship to create lasting impact",
  cards = [],
}) => {
  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        {/* <p>{subtitle}</p> */}
      </div>

      <div className={styles.servicesContainer}>
        {cards.map((card, index) => (
          <AnimatedCard key={card.id} {...card} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedCards;
