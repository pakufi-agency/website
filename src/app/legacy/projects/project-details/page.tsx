import React from "react";
import Navbar from "../../../../components/Layout/Navbar";
import Footer from "../../../../components/Layout/Footer";
import PageBanner from "../../../../components/Legacy/Common/PageBanner";
import ProjectsDetailsContent from "../../../../components/Legacy/Projects/ProjectsDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Details" />

      <ProjectsDetailsContent />

      <Footer />
    </>
  );
}
