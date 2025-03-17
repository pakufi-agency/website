import React from "react";
import * as Icons from "react-feather";
import BlockRendererClient from "../BlockRendererClient";
import Image from 'next/image';
import { type BlocksContent } from "@strapi/blocks-react-renderer";

import styles from "./iconTitleSubtitle.module.scss";

interface Item {
  Title: string;
  subtitle?: BlocksContent;
  iconImg?: {
    url: string;
    alternativeText?: string;
  };
  iconName?: keyof typeof Icons;
}

interface Props {
  items: Item[];
}

const IconTitleSubtitle: React.FC<Props> = ({ items }) => {
  const renderIcon = (item: Item) => {
    if (!item.iconName && !item.iconImg?.url) {
      return null;
    }

    return (
      <div className={styles.icon}>
        {item.iconName && Icons[item.iconName] !== undefined
          ? React.createElement(Icons[item.iconName] as any, {
              size: 24,
            })
          : React.createElement(Icons.Info as any, {
              size: 24,
            })}

        {item.iconImg?.url && (
          <Image
            src={item.iconImg?.url}
            alt={item.iconImg?.alternativeText || "Icon"}
            width="24"
            height="24"
          />
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.contactInfoBox}>
          {renderIcon(item)}
          <h3>{item.Title}</h3>
          {item.subtitle && <BlockRendererClient content={item.subtitle} />}
        </div>
      ))}
    </div>
  );
};

export default IconTitleSubtitle;
