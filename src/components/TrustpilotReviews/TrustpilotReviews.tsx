/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Script from "next/script";

import styles from "./TrustpilotReviews.module.scss";

interface TrustpilotReviewsProps {
  title?: string;
  subtitle?: string;
}

const TrustpilotReviews: React.FC<TrustpilotReviewsProps> = ({
  title = "What our clients say",
  subtitle = "Read verified reviews from our customers on Trustpilot.",
}) => {
  const businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;
  const templateId = process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE_ID;
  const locale = process.env.NEXT_PUBLIC_TRUSTPILOT_LOCALE;
  const reviewUrl = process.env.NEXT_PUBLIC_TRUSTPILOT_REVIEW_URL;

  const isConfigured = Boolean(businessUnitId);

  return (
    <section className={styles.trustpilotSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className={styles.widgetWrapper}>
          {isConfigured ? (
            <>
              <div
                className="trustpilot-widget"
                data-locale={locale}
                data-template-id={templateId}
                data-businessunit-id={businessUnitId}
                data-style-height="240px"
                data-style-width="100%"
                data-theme="light"
              >
                <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
                  Trustpilot
                </a>
              </div>

              <Script
                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                strategy="lazyOnload"
              />
            </>
          ) : (
            <p className={styles.placeholderText}>
              Trustpilot reviews will appear here once you configure your
              Trustpilot business IDs in the environment variables.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
