import React from "react";
import type { Metadata } from "next";
import client from "../utils/apolloClient";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import WeBanner from "../components/WeBanner/WeBanner";
import TextImageButtons from "../components/TextImageButtons/TextImageButtons";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CtaText from "../components/CtaText/CtaText";
import TeamSection from "../components/TeamSection/TeamSection";
import FaqSection from "../components/FaqSection/FaqSection";
import CtaBig from "../components/CtaBig/CtaBig";
import LoadingError from "../components/Errors/LoadingError";

import MobileMenuProvider from "../context/MobileMenuProvider";
import { HOMEPAGE_QUERY } from "../graphqlQueries/Homepage";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  let homepagePage;

  try {
    const { data } = await client.query({
      query: HOMEPAGE_QUERY,
    });

    if (!data || !data.pages || !data.pages[0]) {
      throw new Error("Homepage data is missing or invalid.");
    }

    homepagePage = data.pages[0];
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    homepagePage = null;
  }

  if (!homepagePage) {
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

      {homepagePage.sections &&
        homepagePage.sections.map((section: any, index: number) => {
          switch (section.__typename) {
            case "ComponentStaticComponentHero":
              return <HeroBanner {...section} key={index} />;

            case "ComponentStaticComponentWeStatment":
              return <WeBanner {...section} key={index} />;

            case "ComponentCommonTextImageButtons":
              return <TextImageButtons {...section} key={index} />;

            case "ComponentSectionsServiceSection":
              return <ServicesSection {...section} key={index} />;

            case "ComponentCommonCta":
              return (
                <div className="pb-80">
                  <CtaText {...section} key={index} />
                </div>
              );

            case "ComponentSectionsTeamSection":
              return <TeamSection {...section} key={index} />;

            case "ComponentSectionsFaqSection":
              return <FaqSection {...section} key={index} />;

            case "ComponentCommonCta":
              return <CtaBig {...section} key={index} />;

            default:
              return null;
          }
        })}

      <Footer />
    </MobileMenuProvider>
  );
}
