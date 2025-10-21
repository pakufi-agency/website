import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Section from "@/components/Sections/Section";
import SectionHalfBackground from "@/components/Sections/SectionHalfBackground";
import Custom404Content from "@/components/Custom404/Custom404Content";
import CtaText from "@/components/CtaText/CtaText";
import CtaBig from "@/components/CtaBig/CtaBig";
import Newsletter from "@/components/Newsletter/Newsletter";
import TextImageButtons from "@/components/TextImageButtons/TextImageButtons";
import BoxesText from "@/components/BoxesText/BoxesText";
import BlogGrid from "@/components/Blog/BlogGrid";

import { getStrapiData, renderMultipleComponents } from "@/utils/utils";
import {
  GENERAL_PAGES_LIST_QUERY,
  GENERAL_PAGE_BY_SLUG_QUERY,
} from "@/graphqlQueries/GeneralPageBySlug";
import { BLOG_POSTS_LATEST_QUERY } from "@/graphqlQueries/Blog";
import { generatePageMetadata } from "@/utils/seo";
import MobileMenuProvider from "@/context/MobileMenuProvider";
import PageBanner from "@/components/PageBanner/PageBanner";

// -----------------------------------
// COMPONENT MAP
// -----------------------------------
const componentMap: Record<string, any> = {
  TextImageButtonsComponent: TextImageButtons,
  boxesText: BoxesText,
  ComponentCommonCta: (props: any) =>
    props.isBig ? <CtaBig {...props} /> : <CtaText {...props} />,
  ComponentCommonNewsletter: Newsletter,
  ComponentCommonSection: Section,
  ComponentCommonSectionhalfbackground: SectionHalfBackground,
};

// -----------------------------------
// METADATA
// -----------------------------------
export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = Array.isArray(params?.slug)
    ? params.slug.join("/")
    : params?.slug || "home";

  return generatePageMetadata(() =>
    getStrapiData({
      query: GENERAL_PAGE_BY_SLUG_QUERY,
      pageType: "Generic Page",
      variables: { slug },
    })
  );
}

export async function generateStaticParams() {
  const data: any = await getStrapiData({
    query: GENERAL_PAGES_LIST_QUERY,
    pageType: "Generic Page List Query",
  });

  const pages = data?.pageGenerals || [];

  return pages
    .filter((page: any) => page.slug)
    .map((page: any) => ({
      slug: page.slug,
    }));
}

export default async function Page({
  params,
}: {
  params?: { slug?: string[] };
}) {
  const slug = Array.isArray(params?.slug)
    ? params.slug.join("/")
    : params?.slug || "home";

  const pageData: any = await getStrapiData({
    query: GENERAL_PAGE_BY_SLUG_QUERY,
    pageType: "Generic Page",
    variables: { slug },
  });

  if (!pageData || !pageData.pageGenerals || !pageData.pageGenerals[0]) {
    return (
      <MobileMenuProvider>
        <Navbar />
        <Custom404Content />
        <Footer />
      </MobileMenuProvider>
    );
  }

  const page = pageData.pageGenerals[0];
  const sections = page.sections || [];

  const renderedSections = await Promise.all(
    sections.map(async (section: any, idx: number) => {
      if (section.__typename === "ComponentCommonSection" && section.blogGrid) {
        const blogData = await getStrapiData<{ blogPosts: any[] }>({
          query: BLOG_POSTS_LATEST_QUERY,
          pageType: "Latest Blog Posts",
        });

        const latestBlogPosts = blogData?.blogPosts || [];

        return (
          <BlogGrid key={idx} posts={latestBlogPosts} hasSidebar={false} />
        );
      }

      // Default render
      return renderMultipleComponents({
        section,
        ComponentWrapper: Section,
        componentMap,
      });
    })
  );

  // -----------------------------------
  // FINAL RENDER
  // -----------------------------------
  return (
    <div className="generic-page">
      <MobileMenuProvider>
        <Navbar />
        <PageBanner
          pageTitle={page.pageTitle}
          internalBannerMedia={page.internalBannerMedia}
        />
        <div className="generic-page-content">{renderedSections}</div>
        <Footer />
      </MobileMenuProvider>
    </div>
  );
}
