import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ProjectsCardStyle1 from "../../components/Projects/ProjectsCardStyle1";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style One" />

      <ProjectsCardStyle1 />

      <Footer />
    </>
  );
};