"use client";

import React from "react";
import FaqAccordion from "../FAQ/FaqAccordion";

const FaqSection = () => {
  return (
    <>
      <div className="pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Why choose us?</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="container">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
