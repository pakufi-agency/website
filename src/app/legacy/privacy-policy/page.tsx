import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Legacy/Common/PageBanner";
import PrivacyPolicyContent from "../../../components/Legacy/PrivacyPolicy/PrivacyPolicyContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
