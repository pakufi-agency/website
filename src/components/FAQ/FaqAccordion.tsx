"use client";

import React from "react";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import BlockRendererClient from "../BlockRendererClient";

import styles from "./FaqAccordion.module.scss";

interface FaqProps {
  questions: { question: String; answer: BlocksContent }[];
}

const Faq: React.FC<FaqProps> = ({ questions }) => {
  return (
    <>
      <div className={styles.faqAccordion}>
        <Accordion className={styles.accordionCustom} allowZeroExpanded>
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              uuid={String(index)}
              className={styles.accordionItem}
            >
              <AccordionItemHeading>
                <AccordionItemButton
                  className={`accordion__button ${styles.accordionButton}`}
                >
                  <span>{question.question}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionPanel}>
                <BlockRendererClient content={question.answer} />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
