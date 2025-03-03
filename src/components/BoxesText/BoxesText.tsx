"use client";

import React from "react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "../BlockRendererClient";

import styles from "./BoxesText.module.scss";

interface BoxesTextProps {
  content: BlocksContent;
}

interface BoxesTextProps {
  items: BoxesTextProps[];
}

const BoxesText: React.FC<BoxesTextProps> = ({ items }) => {
  return (
    <div className={`${styles.container}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.box}>
          <div className={styles.text}>
            <BlockRendererClient content={item.content} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxesText;
