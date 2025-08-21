"use client";

import React from "react";
import BlockRendererClient from "../BlockRendererClient";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import Timeline, { TimelineStepProps } from "../Timeline/Timeline";

import styles from "./TimelineSection.module.scss";

interface TimelineSection {
  sideText?: BlocksContent;
  timelineAlign: "left" | "right" | "center";
  timelineStep: TimelineStepProps[];
}

const TimelineSection: React.FC<TimelineSection> = ({
  sideText,
  timelineAlign,
  timelineStep,
}) => {
  const hasSideText = sideText && sideText.length > 0;

  // Helper function to get container classes based on alignment
  const getContainerClasses = () => {
    const baseClasses = [styles.container];

    if (timelineAlign === "center") {
      baseClasses.push(styles.centerLayout);
    } else {
      baseClasses.push(styles.sideLayout);
    }

    return baseClasses.join(" ");
  };

  const renderSideText = () => {
    if (!hasSideText) return null;

    return (
      <div className={`col-lg-6 ${styles.col6}`}>
        <div className={styles.sideTextWrapper}>
          <BlockRendererClient content={sideText} />
        </div>
      </div>
    );
  };

  const renderTimeline = () => {
    return (
      <div className={`col-lg-6 ${styles.col6}`}>
        <Timeline steps={timelineStep} />
      </div>
    );
  };

  // Render center layout (timeline above, sideText below)
  const renderCenterLayout = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className={styles.centerContent}>
            <div className={styles.timelineWrapper}>
              <Timeline steps={timelineStep} />
            </div>
            {hasSideText && (
              <div className={styles.sideTextBelow}>
                <BlockRendererClient content={sideText} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render side layout (timeline and sideText side by side)
  const renderSideLayout = () => {
    if (!hasSideText) {
      // No side text, center the timeline
      return (
        <div className="row justify-content-center">
          <div className={`col-12 ${styles.col12}`}>
            <div className={styles.centerContent}>
              <div className={styles.timelineWrapper}>
                <Timeline steps={timelineStep} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Timeline left, sideText right
    if (timelineAlign === "left") {
      return (
        <div className="row align-items-center">
          {renderTimeline()}
          {renderSideText()}
        </div>
      );
    }

    // sideText left, Timeline right (timelineAlign === 'right')
    return (
      <div className="row align-items-center">
        {renderSideText()}
        {renderTimeline()}
      </div>
    );
  };

  return (
    <div className={getContainerClasses()}>
      <div className="container">
        {timelineAlign === "center" ? renderCenterLayout() : renderSideLayout()}
      </div>
    </div>
  );
};

export default TimelineSection;
