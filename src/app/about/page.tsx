import React from "react";
import Navbar from "../../components/Layout/Navbar";
import TeamSection from "../../components/TeamSection/TeamSection";
import CtaText from "../../components/CtaText/CtaText";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Legacy/Common/PageBanner";
import AboutUsContent1 from "../../components/Legacy/AboutUs/AboutUsContent1";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      <TeamSection />

      <CtaText />

      <Footer />
    </>
  );
}
