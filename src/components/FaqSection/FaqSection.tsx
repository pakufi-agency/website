"use client";

import React from "react";
import FaqAccordion from "../FAQ/FaqAccordion";

interface FaqSectionProps {
  items: [];
}

const FaqSection: React.FC<FaqSectionProps> = ({ items }) => {
  console.log("FAQ items:", items);
  return (
    <>
      <div id="faqSection" className="row justify-content-center">
        <div className="container">
          <FaqAccordion questions={items} />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
