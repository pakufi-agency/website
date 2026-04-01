import React from "react";
import NavbarServer from "@/components/Layout/NavbarServer";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";
import PageBanner from "../../components/PageBanner/PageBanner";
import IntroSinglePage from "../../components/IntroSinglePage/IntroSinglePage";
import Newsletter from "../../components/Newsletter/Newsletter";
import BlogGrid from "../../components/Blog/BlogGrid";

import { getStrapiData, renderMultipleComponents } from "../../utils/utils";
import { generatePageMetadata } from "../../utils/seo";
import { PageProps } from "../../types/types";
import MobileMenuProvider from "../../context/MobileMenuProvider";

import {
  BLOG_PAGE_QUERY,
  BLOG_POSTS_ALL_QUERY,
} from "../../graphqlQueries/Blog";

export const generateMetadata = async () =>
  generatePageMetadata(
    () => getStrapiData({ query: BLOG_PAGE_QUERY, pageType: "Blog Page" }),
    "/blog",
  );

function renderSection(
  section: any,
  ComponentWrapper: React.ComponentType<any>,
  blogPosts: any[] = [],
) {
  const componentMap: Record<string, any> = {
    TextImageButtonsComponent: TextImageButtons,
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
    query: BLOG_PAGE_QUERY,
    pageType: "Blog Page",
  });

  const page = pageData?.pages?.[0];

  const blogData = await getStrapiData<{ blogPosts: any[] }>({
    query: BLOG_POSTS_ALL_QUERY,
    pageType: "Latest Blog Posts",
  });
  const allBlogPosts = blogData?.blogPosts || [];

  if (!page) {
    return (
      <MobileMenuProvider>
        <NavbarServer />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  return (
    <MobileMenuProvider>
      <NavbarServer />

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
              return renderSection(section, Section, allBlogPosts);

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
