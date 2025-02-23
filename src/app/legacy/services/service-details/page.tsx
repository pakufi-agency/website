import React from "react";
import Navbar from "../../../../components/Layout/Navbar";
import Footer from "../../../../components/Layout/Footer";
// import PageBanner from "../../../../components/Legacy/Common/PageBanner";
import ServiceDetailsContent from "../../../../components/Legacy/Services/ServiceDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="Services Style Five" /> */}

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
