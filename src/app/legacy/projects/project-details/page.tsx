import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Common/PageBanner";
import ProjectsDetailsContent from "../../../components/Projects/ProjectsDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Details" />

      <ProjectsDetailsContent />

      <Footer />
    </>
  );
};
