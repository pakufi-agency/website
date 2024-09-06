import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Team from "../../components/Common/Team";
import FunFactsArea from "../../components/Common/FunFactsArea";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import AboutUsContent1 from "../../components/AboutUs/AboutUsContent1";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      <Team />

      <Partner />

      <FunFactsArea />

      <Footer />
    </>
  );
};
