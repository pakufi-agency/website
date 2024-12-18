import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Legacy/Common/PageBanner";
import ServicesStyle1 from "../../../components/Legacy/Services/ServicesStyle1";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style One" />

      <ServicesStyle1 />

      <Footer />
    </>
  );
}
