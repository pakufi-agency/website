import React from "react";
import type { Metadata } from "next";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import HeroBanner from "../components/Hero/Hero";
import WeBanner from "../components/WeBanner/WeBanner";
import TextImage from "../components/TextImage/TextImage";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import CtaText from "../components/CtaText/CtaText";
import TeamSection from "../components/TeamSection/TeamSection";
import FaqSection from "../components/FaqSection/FaqSection";
import CtaBig from "../components/CtaBig/CtaBig";

import MobileMenuProvider from "../context/MobileMenuProvider";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  return (
    <MobileMenuProvider>
      <Navbar />

      <HeroBanner />

      <WeBanner />

      <TextImage />

      <ServicesSection />

      <div className="pb-80">
        <CtaText />
      </div>

      <TeamSection />

      <FaqSection />

      <CtaBig />

      <Footer />
    </MobileMenuProvider>
  );
}
