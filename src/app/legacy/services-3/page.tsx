import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
// import PageBanner from "../../../components/Legacy/Common/PageBanner";
import ServicesStyle3 from "../../../components/Legacy/Services/ServicesStyle3";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="Services Style Three" /> */}

      <ServicesStyle3 />

      <Footer />
    </>
  );
}
