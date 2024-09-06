import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import GoogleMap from "../../components/Contact/GoogleMap";
import ContactForm from "../../components/Contact/ContactForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact Us" />

      <ContactInfo />

      <GoogleMap />

      <ContactForm />

      <Footer />
    </>
  );
};
