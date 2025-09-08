"use client";

import React, { useEffect, useRef, useState } from "react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "../BlockRendererClient";
import { usePathname } from "next/navigation";

import styles from "./OfferPackage.module.scss";
import { ButtonLink } from "../ButtonLink";

interface MousePosition {
  x: number;
  y: number;
}

export interface OfferPackageProps {
  title: string;
  subtitle?: string;
  price?: number;
  features: BlocksContent;
  delay?: number;
  cta: {
    label: string;
    url: string;
    style?: string;
  };
}

const OfferPackage: React.FC<OfferPackageProps> = ({
  title,
  subtitle,
  price,
  features,
  delay = 0,
  cta,
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

  useEffect(() => {
    // Function to equalize header heights
    const equalizeHeaderHeights = () => {
      const headers = document.querySelectorAll(`.${styles.offerHeader}`);
      let maxHeight = 0;

      // Reset heights first
      headers.forEach((header) => {
        (header as HTMLElement).style.height = "auto";
      });

      // Find the maximum height
      headers.forEach((header) => {
        const height = header.getBoundingClientRect().height;
        maxHeight = Math.max(maxHeight, height);
      });

      // Set all headers to the maximum height
      headers.forEach((header) => {
        (header as HTMLElement).style.height = `${maxHeight}px`;
      });
    };

    // Run after content loads and on resize
    const timer = setTimeout(equalizeHeaderHeights, 100);
    window.addEventListener("resize", equalizeHeaderHeights);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", equalizeHeaderHeights);
    };
  }, []);

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
      className={`${styles.offerCard} ${isVisible ? styles.animate : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.offerHeader}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      {price && (
        <div className={styles.price}>
          <span>
            from <sup>€</sup>
            {price}
          </span>
        </div>
      )}

      <div className={styles.offerFeatures}>
        <BlockRendererClient content={features} />
      </div>

      <div className={styles.offerFooter}>
        <ButtonLink
          href={cta.url}
          label={
            <>
              {cta.label}
              <span className={`arrow`}>→</span>
            </>
          }
          pathname={pathname}
          className={`btn btn-primary ${cta.style} ${styles.offerCta}`}
          onClick={handleCtaClick}
        />
      </div>
    </div>
  );
};

export default OfferPackage;
