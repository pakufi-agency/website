import React from "react";
import type { Metadata } from "next";
import createApolloClient from "../utils/apolloClient";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import WeBanner from "../components/WeBanner/WeBanner";
import Section from "../components/Sections/Section";
import SectionHalfBackground from "../components/Sections/SectionHalfBackground";
import TextImageButtons from "../components/TextImageButtons/TextImageButtons";
import CtaText from "../components/CtaText/CtaText";
import TeamSection from "../components/TeamSection/TeamSection";
import ServiceBox from "../components/ServicesBox/ServiceBox";
import BoxesText from "../components/BoxesText/BoxesText";
import FaqSection from "../components/FaqSection/FaqSection";
import CtaBig from "../components/CtaBig/CtaBig";
import LoadingError from "../components/Errors/LoadingError";
import { renderMultipleComponents } from "../utils/utils";

import MobileMenuProvider from "../context/MobileMenuProvider";
import { HOMEPAGE_QUERY } from "../graphqlQueries/Homepage";

import "../styles/common.scss";

interface SectionProps {
  [key: string]: any;
}

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  let homepagePage;
  const client = createApolloClient();

  // Reset the Apollo Client cache before fetching data
  client.resetStore(); // or client.clearStore()
  try {
    const { data } = await client.query({
      query: HOMEPAGE_QUERY,
      fetchPolicy: "network-only", // Prevents Apollo from using ANY cache
    });

    if (!data || !data.pages || !data.pages[0]) {
      throw new Error("Homepage data is missing or invalid.");
    }

    homepagePage = data.pages[0];
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    homepagePage = null;
  }

  if (!homepagePage) {
    return (
      <MobileMenuProvider>
        <Navbar />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  function renderSection(
    section: SectionProps,
    ComponentWrapper: React.ComponentType<any>
  ) {
    const componentMap: Record<string, any> = {
      TextImageButtonsComponent: TextImageButtons,
      serviceList: ServiceBox,
      teamMemberList: TeamSection,
      boxesText: BoxesText,
      faqList: FaqSection,
    };
    return renderMultipleComponents({
      section,
      ComponentWrapper,
      componentMap,
    });
  }

  return (
    <MobileMenuProvider>
      <Navbar />

      {homepagePage.sections &&
        homepagePage.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentStaticComponentHero":
              return <HeroBanner {...section} key={index} />;

            case "ComponentStaticComponentWeStatment":
              return <WeBanner {...section} herokey={index} />;

            case "ComponentCommonSection":
              return renderSection(section, Section);

            case "ComponentCommonSectionhalfbackground":
              return renderSection(section, SectionHalfBackground);

            case "ComponentCommonCta":
              if (!section.isBig) {
                return <CtaText {...section} key={index} />;
              } else {
                return <CtaBig {...section} key={index} />;
              }
            default:
              return null;
          }
        })}

      <Footer />
    </MobileMenuProvider>
  );
}
