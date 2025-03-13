"use client";

import React from "react";
import FaqAccordion from "../FAQ/FaqAccordion";

interface FaqSectionProps {
  question_answers: [];
}

const FaqSection: React.FC<FaqSectionProps> = ({ question_answers }) => {
  return (
    <>
      <div id="faqSection" className="row justify-content-center">
        <div className="container">
          <FaqAccordion questions={question_answers} />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
