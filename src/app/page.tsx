import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import Section from "../components/Sections/Section";
import SectionHalfBackground from "../components/Sections/SectionHalfBackground";
import TextImageButtons from "../components/TextImageButtons/TextImageButtons";
import CtaText from "../components/CtaText/CtaText";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import TeamSection from "../components/TeamSection/TeamSection";
import ServiceBox from "../components/ServicesBox/ServiceBox";
import BoxesText from "../components/BoxesText/BoxesText";
import FaqSection from "../components/FaqSection/FaqSection";
import CollaboratorsSection from "../components/CollaboratorsSection/CollaboratorsSection";
import CtaBig from "../components/CtaBig/CtaBig";
import Newsletter from "../components/Newsletter/Newsletter";
import LoadingError from "../components/Errors/LoadingError";
import BlogGrid from "../components/Blog/BlogGrid";

import MobileMenuProvider from "../context/MobileMenuProvider";
import { HOMEPAGE_QUERY } from "../graphqlQueries/Homepage";
import { BLOG_POSTS_LATEST_QUERY } from "../graphqlQueries/Blog";
import { renderMultipleComponents, getStrapiData } from "../utils/utils";
import { generatePageMetadata } from "../utils/seo";
import { PageProps, SectionProps } from "../types/types";

import "../styles/common.scss";

// Fetch SEO metadata
export const generateMetadata = async () => {
  return generatePageMetadata(
    () =>
      getStrapiData({
        query: HOMEPAGE_QUERY,
        pageType: "Homepage",
      }) as Promise<any>,
    "/"
  );
};

// Render a section based on componentMap
function renderSection(
  section: SectionProps,
  ComponentWrapper: React.ComponentType<any>,
  blogPosts: any[] = []
) {
  const componentMap: Record<string, any> = {
    TextImageButtonsComponent: TextImageButtons,
    services: ServiceBox,
    collaborators: CollaboratorsSection,
    team_members: TeamSection,
    boxesText: BoxesText,
    question_answers: FaqSection,
    blogGrid: () => <BlogGrid posts={blogPosts} />,
  };
  return renderMultipleComponents({
    section,
    ComponentWrapper,
    componentMap,
  });
}

export default async function Page() {
  const pageData = await getStrapiData<PageProps>({
    query: HOMEPAGE_QUERY,
    pageType: "Homepage",
  });

  const page = pageData?.pages[0];

  const blogData = await getStrapiData<{ blogPosts: any[] }>({
    query: BLOG_POSTS_LATEST_QUERY,
    pageType: "Latest Blog Posts",
  });
  const latestBlogPosts = blogData?.blogPosts || [];

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
    <div className="homepage-page">
      <MobileMenuProvider>
        <Navbar />

        {page.sections &&
          page.sections.map((section: any, index: number) => {
            switch (section.__typename) {
              case "ComponentStaticComponentHero":
                return <HeroBanner {...section} key={index} />;

              case "ComponentStaticComponentWhatWeDo":
                return <WhatWeDoSection {...section} key={index} />;

              case "ComponentCommonNewsletter":
                return <Newsletter {...section} key={index} />;

              case "ComponentCommonSection":
                return renderSection(section, Section, latestBlogPosts);

              case "ComponentCommonSectionhalfbackground":
                return renderSection(
                  section,
                  SectionHalfBackground,
                  latestBlogPosts
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
    </div>
  );
}
