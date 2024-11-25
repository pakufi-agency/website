import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
};
