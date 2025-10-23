"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./GlobalBanner.module.scss";
import { appConfig } from "../../utils/appConfig";
import * as Icon from "react-feather";

interface GlobalBannerProps {
  onClose?: () => void;
}

const GlobalBanner: React.FC<GlobalBannerProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
  };

  if (!appConfig.features.mentorshipBanner || !visible) return null;

  return (
    <div className={`${styles.banner} ${closing ? styles.hidden : ""}`}>
      <p>
        {appConfig.mentorshipBannerText}{" "}
        <Link href={appConfig.mentorshipBannerLink}>Apply here</Link>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close banner"
        >
          <Icon.XCircle />
        </button>
      </p>
    </div>
  );
};

export default GlobalBanner;
