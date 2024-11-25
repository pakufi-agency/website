import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
};
