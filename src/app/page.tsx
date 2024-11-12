import React from "react";
import type { Metadata } from "next";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import MainBanner from "../components/Hosting/MainBanner";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Footer />
    </>
  );
}
