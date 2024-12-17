"use client";

import React from "react";
import FaqAccordion from "../FAQ/FaqAccordion";

interface FaqSectionProps {
  title: String;
  questions: [];
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, questions }) => {
  return (
    <>
      <div className="pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="container">
              <FaqAccordion questions={questions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
