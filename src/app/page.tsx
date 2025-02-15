import React from "react";
import type { Metadata } from "next";
import createApolloClient from "../utils/apolloClient";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import WeBanner from "../components/WeBanner/WeBanner";
import Section from "../components/Section/Section";
import TextImageButtons from "../components/TextImageButtons/TextImageButtons";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CtaText from "../components/CtaText/CtaText";
import TeamSection from "../components/TeamSection/TeamSection";
import FaqSection from "../components/FaqSection/FaqSection";
import CtaBig from "../components/CtaBig/CtaBig";
import LoadingError from "../components/Errors/LoadingError";

import MobileMenuProvider from "../context/MobileMenuProvider";
import { HOMEPAGE_QUERY } from "../graphqlQueries/Homepage";

import "../styles/common.scss";

import greenCross from "/public/images/backgrounds/green-cross.svg";
import whiteCross from "/public/images/backgrounds/white-cross.svg";
import greenTriangle from "/public/images/backgrounds/green-triangle.svg";
import whiteTriangle from "/public/images/backgrounds/white-triangle.svg";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  let homepagePage;
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: HOMEPAGE_QUERY,
      fetchPolicy: "cache-first", // Prevents Apollo from using ANY cache
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
              const component =
                section.TextImageButtonsComponent ||
                section.serviceList ||
                section.teamMemberList ||
                section.faqList;
              let componentContent;

              switch (component) {
                case section.TextImageButtonsComponent:
                  componentContent = (
                    <TextImageButtons {...section.TextImageButtonsComponent} />
                  );
                  break;
                case section.serviceList:
                  componentContent = (
                    <ServicesSection {...section.serviceList} />
                  );
                  break;
                case section.teamMemberList:
                  componentContent = (
                    <TeamSection {...section.teamMemberList} />
                  );
                  break;
                case section.faqList:
                  componentContent = <FaqSection {...section.faqList} />;
                  break;
                default:
                  componentContent = null;
              }

              return (
                <Section
                  sectionTitle={section.sectionTitle}
                  sectionSubtitle={section.sectionSubtitle}
                  backgroundColor={section.backgroundColor}
                  titleColor={section.titleColor}
                  descriptionColor={section.descriptionColor}
                  barBallColor={section.barBallColor}
                >
                  {componentContent}
                </Section>
              );

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
