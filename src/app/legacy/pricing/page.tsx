import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import PricingStyleOne from "../../components/PricingPlans/PricingStyleOne";
import PricingStyleTwo from "../../components/PricingPlans/PricingStyleTwo";
import PricingStyleFour from "../../components/PricingPlans/PricingStyleFour";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Pricing" />

      <PricingStyleOne />

      <PricingStyleTwo />

      <div className="pt-80">
        <PricingStyleFour />
      </div>

      <Footer />
    </>
  );
};
