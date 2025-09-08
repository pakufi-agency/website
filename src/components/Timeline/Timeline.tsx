"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.scss";

interface MousePosition {
  x: number;
  y: number;
}

export interface TimelineStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TimelineComponentProps {
  steps: TimelineStepProps[];
}

const Timeline: React.FC<TimelineComponentProps> = ({ steps }) => {
  const delay = 0.3;
  const isLast = false;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePositions, setMousePositions] = useState<MousePosition[]>(
    steps.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    setMousePositions((prev) =>
      prev.map((pos, i) => (i === index ? { x: rotateX, y: rotateY } : pos))
    );
  };

  const handleMouseLeave = (index: number) => {
    setMousePositions((prev) =>
      prev.map((pos, i) => (i === index ? { x: 0, y: 0 } : pos))
    );
  };

  return (
    <div ref={containerRef} className={`${styles.container}`}>
      {steps.map(({ stepNumber, title, description }, index) => {
        const mousePos = mousePositions[index];
        return (
          <div
            key={index}
            className={`${styles.timelineStep} ${
              isVisible ? styles.animate : ""
            }`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transform:
                mousePos.x !== 0 || mousePos.y !== 0
                  ? `perspective(1000px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg) translateY(-5px) scale(1.02)`
                  : "",
            }}
          >
            <div className={styles.stepNumber}>
              <span suppressHydrationWarning>{stepNumber}</span>
            </div>

            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDescription}>{description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className={styles.connector}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
