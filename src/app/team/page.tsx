import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import TeamMembers from "../../components/Team/TeamMembers";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Team" />

      <TeamMembers />

      <Footer />
    </>
  );
};