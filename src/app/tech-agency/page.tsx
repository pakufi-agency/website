import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import HeroBanner from "../../components/Hero/Hero";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import ServiceBox from "../../components/ServicesBox/ServiceBox";
import OfferPackageList from "../../components/OfferPackages/OfferPackageList";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";
import Newsletter from "../../components/Newsletter/Newsletter";
import SectionHalfBackground from "@/components/Sections/SectionHalfBackground";
import ProjectsCard from "@/components/Projects/ProjectsCard";

import { PageProps, SectionProps } from "../../types/types";
import { getStrapiData, renderMultipleComponents } from "../../utils/utils";
import { generatePageMetadata } from "../../utils/seo";
import MobileMenuProvider from "../../context/MobileMenuProvider";
import { TECHAGENCY_QUERY } from "../../graphqlQueries/TechAgency";

export const generateMetadata = async () =>
  generatePageMetadata(() =>
    getStrapiData({
      query: TECHAGENCY_QUERY,
      pageType: "Tech Agency",
    })
  );

function renderSection(
  section: SectionProps,
  ComponentWrapper: React.ComponentType<any>
) {
  const componentMap: Record<string, any> = {
    TextImageButtonsComponent: TextImageButtons,
    services: ServiceBox,
    price_packages: OfferPackageList,
    timelineSection: TimelineSection,
    projects: ProjectsCard,
  };
  return renderMultipleComponents({
    section,
    ComponentWrapper,
    componentMap,
  });
}

export default async function Page() {
  const pageData = await getStrapiData<PageProps>({
    query: TECHAGENCY_QUERY,
    pageType: "Tech Agency",
  });

  const page = pageData?.pages[0];

  if (!page) {
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

      {page.sections &&
        page.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentStaticComponentHero":
              return <HeroBanner {...section} key={index} />;

            case "ComponentCommonSection":
              return renderSection(section, Section);

            case "ComponentCommonSectionhalfbackground":
              return renderSection(section, SectionHalfBackground);

            case "ComponentCommonNewsletter":
              return <Newsletter {...section} key={index} />;

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
