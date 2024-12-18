import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Legacy/Common/PageBanner";
import PricingStyleOne from "../../../components/Legacy/PricingPlans/PricingStyleOne";
import PricingStyleTwo from "../../../components/Legacy/PricingPlans/PricingStyleTwo";
import PricingStyleFour from "../../../components/Legacy/PricingPlans/PricingStyleFour";

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
}
