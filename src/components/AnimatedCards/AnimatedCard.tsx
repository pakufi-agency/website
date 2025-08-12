"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./AnimatedCards.module.scss";

export interface CardDataProps {
  id: string;
  title: string;
  icon: string;
  variant: "tech" | "talent";
  features: string[];
  ctaText: string;
  ctaLink: string;
  delay?: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const AnimatedCard: React.FC<CardDataProps> = ({
  title,
  icon,
  features,
  ctaText,
  ctaLink,
  variant = "tech",
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setMousePos({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.currentTarget.style.transform = "";
    }, 150);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.serviceCard} ${styles[variant]} ${
        isVisible ? styles.animate : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          mousePos.x !== 0 || mousePos.y !== 0
            ? `perspective(1000px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg) translateY(-10px) scale(1.02)`
            : "",
      }}
    >
      <div className={`${styles.serviceIcon} ${styles[`${variant}Icon`]}`}>
        {icon}
      </div>

      <h3 className={styles.serviceTitle}>{title}</h3>

      <ul className={styles.serviceFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={`btn ${styles.serviceCta} ${styles[`${variant}Cta`]}`}
        onClick={handleCtaClick}
      >
        {ctaText}
        <span className={styles.ctaArrow}>→</span>
      </Link>
    </div>
  );
};

export default AnimatedCard;
