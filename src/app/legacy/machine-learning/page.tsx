import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import MainBanner from "../../../components/Legacy/MachineLearning/MainBanner";
import Partner from "../../../components/Legacy/MachineLearning/Partner";
import WhatWeOffer from "../../../components/Legacy/MachineLearning/WhatWeOffer";
import AboutUsContent from "../../../components/Legacy/MachineLearning/AboutUsContent";
import OurServices from "../../../components/Legacy/MachineLearning/OurServices";
import FunFactsArea from "../../../components/Legacy/Common/FunFactsArea";
import Projects from "../../../components/Legacy/MachineLearning/Projects";
import PricingStyleFour from "../../../components/Legacy/PricingPlans/PricingStyleFour";
import FeedbackStyleFour from "../../../components/Legacy/Common/FeedbackStyleFour";
import BlogCard from "../../../components/Legacy/MachineLearning/BlogCard";
import Newsletter from "../../../components/Legacy/Common/Newsletter";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Partner />

      <WhatWeOffer />

      <AboutUsContent />

      <OurServices />

      <FunFactsArea />

      <Projects />

      <PricingStyleFour />

      <FeedbackStyleFour />

      <BlogCard />

      <Newsletter />

      <Footer />
    </>
  );
}
