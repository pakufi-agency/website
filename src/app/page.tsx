import React from "react";
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
import { getStrapiPageData, renderMultipleComponents } from "../utils/utils";
import { generatePageMetadata } from "../utils/seo"

import MobileMenuProvider from "../context/MobileMenuProvider";
import { HOMEPAGE_QUERY } from "../graphqlQueries/Homepage";

import "../styles/common.scss";

interface SectionProps {
  [key: string]: any;
}

interface PageProps {
  SEO: {
    seoTitle: string;
    seoDescription: string;
    seoPreview: { url: string; alternativeText: string }[];
  };
  pageTitle: string;
  internalBannerMedia: any;
  sections: any[];
}

export const generateMetadata = async () => generatePageMetadata(() => getStrapiPageData<PageProps>({ query: HOMEPAGE_QUERY, pageType: "Homepage" }));

function renderSection(section: SectionProps, ComponentWrapper: React.ComponentType<any>) {
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

export default async function Page() {
  const pageData = await getStrapiPageData<PageProps>({ query: HOMEPAGE_QUERY, pageType: "Homepage" });
  if (!pageData) {
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

      {pageData.sections &&
        pageData.sections.map((section: any, index: number) => {
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
