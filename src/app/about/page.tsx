import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import TeamSection from "../../components/TeamSection/TeamSection";
import CollaboratorsSection from "../../components/CollaboratorsSection/CollaboratorsSection";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";
import PageBanner from "../../components/PageBanner/PageBanner";
import IntroSinglePage from "../../components/IntroSinglePage/IntroSinglePage";
import Newsletter from "../../components/Newsletter/Newsletter";

import { getStrapiData, renderMultipleComponents } from "../../utils/utils";
import { generatePageMetadata } from "../../utils/seo";
import { PageProps, SectionProps } from "../../types/types";
import MobileMenuProvider from "../../context/MobileMenuProvider";
import { ABOUTUS_QUERY } from "../../graphqlQueries/Aboutus";

export const generateMetadata = async () =>
  generatePageMetadata(() =>
    getStrapiData({ query: ABOUTUS_QUERY, pageType: "About Us" })
  );

function renderSection(
  section: SectionProps,
  ComponentWrapper: React.ComponentType<any>
) {
  const componentMap: Record<string, any> = {
    TextImageButtonsComponent: TextImageButtons,
    team_members: TeamSection,
    collaborators: CollaboratorsSection,
  };
  return renderMultipleComponents({
    section,
    ComponentWrapper,
    componentMap,
  });
}

export default async function Page() {
  const pageData = await getStrapiData<PageProps>({
    query: ABOUTUS_QUERY,
    pageType: "About Us",
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
      <PageBanner
        pageTitle={page.pageBannerTitle}
        internalBannerMedia={page.internalBannerMedia}
      />

      {page.sections &&
        page.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentSectionsIntroSinglePage":
              return <IntroSinglePage {...section} key={index} />;

            case "ComponentCommonSection":
              return renderSection(section, Section);

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
