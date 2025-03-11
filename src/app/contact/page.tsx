import React from "react";
import type { Metadata } from "next";
import createApolloClient from "../../utils/apolloClient";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import SectionHalfBackground from "../../components/Sections/SectionHalfBackground";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import FaqSection from "../../components/FaqSection/FaqSection";
import IconTitleSubtitle from "../../components/IconTitleSubtitle/IconTitleSubtitle";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";
import BoxesText from "../../components/BoxesText/BoxesText";
import PageBanner from "../../components/PageBanner/PageBanner";
import IntroSinglePage from "../../components/IntroSinglePage/IntroSinglePage";
import { renderMultipleComponents } from "../../utils/utils";

import MobileMenuProvider from "../../context/MobileMenuProvider";
import { CONTACT_QUERY } from "../../graphqlQueries/Contact";

interface SectionProps {
  [key: string]: any;
}

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  let page;
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: CONTACT_QUERY,
      fetchPolicy: "cache-first", // Uses cache when available
    });

    if (!data || !data.pages || !data.pages[0]) {
      throw new Error("Contact data is missing or invalid.");
    }

    page = data.pages[0];
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    page = null;
  }

  if (!page) {
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
      boxesText: BoxesText,
      faqList: FaqSection,
      iconTitleSubtitle: IconTitleSubtitle,
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
      <PageBanner
        pageTitle={page.pageTitle}
        internalBannerMedia={page.internalBannerMedia}
      />
      ;
      {page.sections &&
        page.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentSectionsIntroSinglePage":
              return <IntroSinglePage {...section} key={index} />;

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
