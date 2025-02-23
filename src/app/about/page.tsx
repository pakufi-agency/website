import React from "react";
import type { Metadata } from "next";
import createApolloClient from "../../utils/apolloClient";

import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Section from "../../components/Sections/Section";
import SectionHalfBackground from "../../components/Sections/SectionHalfBackground";
import TextImageButtons from "../../components/TextImageButtons/TextImageButtons";
import CtaText from "../../components/CtaText/CtaText";
import TeamSection from "../../components/TeamSection/TeamSection";
import CtaBig from "../../components/CtaBig/CtaBig";
import LoadingError from "../../components/Errors/LoadingError";

import PageBanner from "../../components/PageBanner/PageBanner";
import IntroSinglePage from "../../components/IntroSinglePage/IntroSinglePage";

import MobileMenuProvider from "../../context/MobileMenuProvider";
import { ABOUTUS_QUERY } from "../../graphqlQueries/Aboutus";

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
      query: ABOUTUS_QUERY,
      fetchPolicy: "cache-first", // Prevents Apollo from using ANY cache
    });

    if (!data || !data.pages || !data.pages[0]) {
      throw new Error("Aboutus data is missing or invalid.");
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

  function renderSection(section: any, ComponentWrapper: any) {
    const componentMap: Record<string, any> = {
      TextImageButtonsComponent: TextImageButtons,
      teamMemberList: TeamSection,
    };
    const validKeys = Object.keys(componentMap);
    const detectedKey = validKeys.find((key) => section[key]);
    const Component = detectedKey ? componentMap[detectedKey] : null;
    return (
      <ComponentWrapper key={section.id || Math.random()} {...section}>
        {detectedKey && Component ? (
          <Component {...section[detectedKey]} />
        ) : null}
      </ComponentWrapper>
    );
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
