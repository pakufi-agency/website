import React from "react";
import type { Metadata } from "next";
import { gql } from "@apollo/client";
import client from "../utils/apolloClient";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import WeBanner from "../components/WeBanner/WeBanner";
import TextImage from "../components/TextImage/TextImage";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CtaText from "../components/CtaText/CtaText";
import TeamSection from "../components/TeamSection/TeamSection";
import FaqSection from "../components/FaqSection/FaqSection";
import CtaBig from "../components/CtaBig/CtaBig";

import MobileMenuProvider from "../context/MobileMenuProvider";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  const { data } = await client.query({
    query: gql`
      query getHomepage {
        pages(filters: { pageTitle: { eq: "Homepage" } }) {
          pageTitle
          sections {
            ... on ComponentStaticComponentHero {
              id
              title
              content
              ctaLabel
              ctaLink
              backgroundImage {
                url
              }
            }

            ... on ComponentStaticComponentWeStatment {
              content
            }
          }
        }
      }
    `,
  });

  const homepagePage = data.pages[0];
  const homepageSections = data.pages[0].sections;
  // const homepageAttr = data.pages[0].attributes;
  console.log({ homepagePage, homepageSections });

  return (
    <MobileMenuProvider>
      <Navbar />

      {homepagePage.sections.map((section: any, index: number) => {
        console.log("lalal", section);
        switch (section.__typename) {
          case "ComponentStaticComponentHero":
            // <HeroBanner section={section} />;
            console.log("hello??");
            return (
              <section
                key={index}
                style={{
                  backgroundImage: `url(${section.backgroundImage.url})`,
                }}
              >
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
              </section>
            );
          case "ComponentStaticComponentWeStatment":
            <WeBanner />;
          default:
            return null;
        }
      })}

      <TextImage />

      <ServicesSection />

      <div className="pb-80">
        <CtaText />
      </div>

      <TeamSection />

      <FaqSection />

      <CtaBig />

      <Footer />
    </MobileMenuProvider>
  );
}
