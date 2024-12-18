import React from "react";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import PageBanner from "../../../components/Legacy/Common/PageBanner";
import TeamMembers from "../../../components/Legacy/TeamPage/TeamMembers";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Team" />

      <TeamMembers />

      <Footer />
    </>
  );
}
