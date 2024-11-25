"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./FaqAccordion.module.scss";

const FAQs = [
  {
    question: "How do permissions work in Google Play Instant?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is Smart Lock required for instant apps?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I have multiple activities in a single feature?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I share resources between features?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is multidex supported for instant apps?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore magna aliqua.",
  },
];

const FaqSection = () => {
  return (
    <>
      <div className={styles.faqAccordion}>
        <Accordion className={styles.accordionCustom}>
          {FAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              uuid={String(index)}
              className={styles.accordionItem}
            >
              <AccordionItemHeading>
                <AccordionItemButton
                  className={`accordion__button ${styles.accordionButton}`}
                >
                  <span>{faq.question}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionPanel}>
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FaqSection;
