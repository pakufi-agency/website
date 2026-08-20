"use client";

import React from "react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "../BlockRendererClient";

import styles from "./BoxesText.module.scss";

type BoxVariant = "positive" | "negative" | "neutral";

interface BoxesTextItem {
  content: BlocksContent;
  variant?: BoxVariant;
}

interface BoxesTextProps {
  items: BoxesTextItem[];
}

const variantStyles: Record<BoxVariant, string> = {
  positive: styles.positive,
  negative: styles.negative,
  neutral: styles.neutral,
};

const DEFAULT_VARIANT: BoxVariant = "neutral";

const BoxesText: React.FC<BoxesTextProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const variant = item.variant ?? DEFAULT_VARIANT;

        return (
          <div
            key={index}
            className={`${styles.box} ${variantStyles[variant]}`}
          >
            <div className={styles.text}>
              <BlockRendererClient content={item.content} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BoxesText;
