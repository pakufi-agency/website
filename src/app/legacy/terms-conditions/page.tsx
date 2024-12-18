import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Legacy/Common/PageBanner";
import TermsConditionsContent from "../../../components/Legacy/TermsConditions/TermsConditionsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Term & Condition" />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}
