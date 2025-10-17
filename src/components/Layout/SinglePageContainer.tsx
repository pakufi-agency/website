"use client";

import React, { ReactNode } from "react";
import MobileMenuProvider from "../../context/MobileMenuProvider";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import CtaBig from "../../components/CtaBig/CtaBig";
import Newsletter from "../../components/Newsletter/Newsletter";

import styles from "./SinglePageContainer.module.scss";

export interface SinglePageData {
  newsletter: any;
  cta: any;
}

interface SinglePageContainerProps {
  children: ReactNode;
  singlePageData: { singlePages: SinglePageData[] };
}

const SinglePageContainer: React.FC<SinglePageContainerProps> = ({
  children,
  singlePageData,
}) => {
  const sections = singlePageData.singlePages[0];

  return (
    <div className={`single-page-container ${styles.container}`}>
      <MobileMenuProvider>
        <Navbar />
        <div className={styles.mainContent}>{children}</div>
        <Newsletter {...sections.newsletter} />
        <CtaBig {...sections.cta} />
        <Footer />
      </MobileMenuProvider>
    </div>
  );
};

export default SinglePageContainer;
