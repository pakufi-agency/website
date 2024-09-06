import React from "react";
import Navbar from "../../components/Layout/Navbar";
import MainBanner from "../../components/IOT/MainBanner";
import PartnerStyleTwo from "../../components/Common/PartnerStyleTwo";
import OurServices from "../../components/IOT/OurServices";
import Cta from "../../components/IOT/Cta";
import FunFactsArea from "../../components/Common/FunFactsArea";
import Features from "../../components/IOT/Features";
import TeamStyleTwo from "../../components/Common/TeamStyleTwo";
import Feedback from "../../components/Common/Feedback";
import WhyWeAreBest from "../../components/IOT/WhyWeAreBest";
import BlogPost from "../../components/Common/BlogPost";
import Footer from "../../components/Layout/Footer";

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
};
