import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
// import PageBanner from "../../../components/Legacy/Common/PageBanner";
import Faq from "../../../components/FAQ/FaqAccordion";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="FAQ" /> */}

      <Faq questions={[]} />

      <Footer />
    </>
  );
}
