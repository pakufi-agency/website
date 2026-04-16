// app/projects/page.tsx
import React from "react";
import Navbar from "../../components/Layout/NavbarServer";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";
import PageBanner from "../../components/PageBanner/PageBanner";
import IntroSinglePage from "../../components/IntroSinglePage/IntroSinglePage";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProjectsCard from "../../components/Projects/ProjectsCard";

import { getStrapiData, renderMultipleComponents } from "../../utils/utils";
import { generatePageMetadata } from "../../utils/seo";
import { PageProps } from "../../types/types";
import MobileMenuProvider from "../../context/MobileMenuProvider";

import { PROJECTS_PAGE_QUERY } from "../../graphqlQueries/Projects";

export const generateMetadata = async () =>
  generatePageMetadata(
    () =>
      getStrapiData({
        query: PROJECTS_PAGE_QUERY,
        pageType: "Projects Page",
      }),
    "/projects",
  );

function renderSection(
  section: any,
  ComponentWrapper: React.ComponentType<any>,
) {
  const componentMap: Record<string, any> = {
    TextImageButtonsComponent: TextImageButtons,
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
    query: PROJECTS_PAGE_QUERY,
    pageType: "Projects Page",
  });

  const page = pageData?.pages?.[0];

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
              return (
                <React.Fragment key={index}>
                  {renderSection(section, Section)}
                </React.Fragment>
              );

            case "ComponentCommonNewsletter":
              return <Newsletter {...section} key={index} />;

            case "ComponentCommonCta":
              return !section.isBig ? (
                <CtaText {...section} key={index} />
              ) : (
                <CtaBig {...section} key={index} />
              );

            default:
              return null;
          }
        })}

      <Footer />
    </MobileMenuProvider>
  );
}
