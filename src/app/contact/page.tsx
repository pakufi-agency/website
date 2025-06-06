import React from "react";
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
import Newsletter from "../../components/Newsletter/Newsletter";
import { getStrapiPageData, renderMultipleComponents } from "../../utils/utils";
import { generatePageMetadata } from "../../utils/seo";

import MobileMenuProvider from "../../context/MobileMenuProvider";
import { CONTACT_QUERY } from "../../graphqlQueries/Contact";

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

export const generateMetadata = async () =>
  generatePageMetadata(() =>
    getStrapiPageData<PageProps>({
      query: CONTACT_QUERY,
      pageType: "Contact Us",
    })
  );

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

export default async function Page() {
  const pageData = await getStrapiPageData<PageProps>({
    query: CONTACT_QUERY,
    pageType: "Contact Us",
  });

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
      <PageBanner
        pageTitle={pageData.pageTitle}
        internalBannerMedia={pageData.internalBannerMedia}
      />

      {pageData.sections &&
        pageData.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentSectionsIntroSinglePage":
              return <IntroSinglePage {...section} key={index} />;

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
