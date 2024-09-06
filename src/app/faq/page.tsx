import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import FaqContent from "../../components/FAQ/FaqContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="FAQ" />

      <FaqContent />

      <Footer />
    </>
  );
};
