import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
// import PageBanner from "../../../components/Legacy/Common/PageBanner";
import ServicesStyle2 from "../../../components/Legacy/Services/ServicesStyle2";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="Services Style Two" /> */}

      <ServicesStyle2 />

      <Footer />
    </>
  );
}
