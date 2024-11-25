import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import MainBanner from "../../../components/Legacy/IOT/MainBanner";
import PartnerStyleTwo from "../../../components/Legacy/Common/PartnerStyleTwo";
import OurServices from "../../../components/Legacy/IOT/OurServices";
import Cta from "../../../components/Legacy/IOT/Cta";
import FunFactsArea from "../../../components/Legacy/Common/FunFactsArea";
import Features from "../../../components/Legacy/IOT/Features";
import TeamStyleTwo from "../../../components/Legacy/Common/TeamStyleTwo";
import Feedback from "../../../components/Legacy/Common/Feedback";
import WhyWeAreBest from "../../../components/Legacy/IOT/WhyWeAreBest";
import BlogPost from "../../../components/Legacy/Common/BlogPost";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <PartnerStyleTwo />

      <OurServices />

      <Cta />

      <FunFactsArea />

      <Features />

      <TeamStyleTwo />

      <Feedback />

      <WhyWeAreBest />

      <BlogPost />

      <Footer />
    </>
  );
}
