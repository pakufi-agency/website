"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { ButtonLink } from "../ButtonLink";
import styles from "./AnimatedCards.module.scss";

export interface CardDataProps {
  title: string;
  cardStyle?: string;
  content?: BlocksContent;
  button?: { url: string; label: string; style?: string }[];
  iconAsText?: string;
  iconAsImg?: {
    url: string;
    alternativeText: string;
  };
  delay?: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const AnimatedCard: React.FC<CardDataProps> = ({
  title,
  cardStyle,
  content,
  button,
  iconAsText,
  iconAsImg,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const pathname = usePathname();

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
      className={`${styles.serviceCard} ${cardStyle && styles[cardStyle]} ${
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
      <div
        className={`${styles.serviceIcon} 
        ${cardStyle && styles[`${cardStyle}Icon`]}`}
      >
        {iconAsText && iconAsText}
        {iconAsImg && (
          <img src={iconAsImg.url} alt={iconAsImg.alternativeText} />
        )}
      </div>

      <h3 className={styles.serviceTitle}>{title}</h3>

      {content && (
        <div className={styles.serviceFeatures}>
          <BlockRendererClient content={content} />
        </div>
      )}

      {button &&
        button.map((btn, index) => (
          <ButtonLink
            key={index}
            href={btn.url}
            label={
              <>
                {btn.label}
                <span className={`arrow`}>→</span>
              </>
            }
            pathname={pathname} // or any tracking context
            className={`btn ${btn.style} ${styles.serviceCta} ${
              styles[`${cardStyle && cardStyle}Cta`]
            }`}
            onClick={handleCtaClick}
          />
        ))}
    </div>
  );
};

export default AnimatedCard;
