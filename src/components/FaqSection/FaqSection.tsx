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
      <div className="row justify-content-center">
        <div className="container">
          <FaqAccordion questions={questions} />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
