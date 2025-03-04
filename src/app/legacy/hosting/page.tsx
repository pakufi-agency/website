import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import MainBanner from "../../../components/Legacy/Hosting/MainBanner";
import TopFeatures from "../../../components/Legacy/Hosting/TopFeatures";
import DomainSearch from "../../../components/Legacy/Hosting/DomainSearch";
import WhyChoose from "../../../components/Legacy/Hosting/WhyChoose";
import PricingStyleTwo from "../../../components/Legacy/PricingPlans/PricingStyleTwo";
import FeedbackStyleTwo from "../../../components/Legacy/Common/FeedbackStyleTwo";
import Partner from "../../../components/Legacy/Common/Partner";
import Features from "../../../components/Legacy/Hosting/Features";
import BlogPost from "../../../components/Legacy/Common/BlogPost";
import CTA from "../../../components/Legacy/Common/CTA";
import Footer from "../../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <TopFeatures />

      <DomainSearch />

      <WhyChoose />

      <PricingStyleTwo />

      <FeedbackStyleTwo />

      <div className="pb-80">
        <Partner />
      </div>

      <Features />

      <BlogPost />

      <CTA />

      <Footer />
    </>
  );
}
