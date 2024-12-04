import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Legacy/Common/PageBanner";
import ContactInfo from "../../components/Legacy/Contact/ContactInfo";
import GoogleMap from "../../components/Legacy/Contact/GoogleMap";
import ContactForm from "../../components/Legacy/Contact/ContactForm";

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
}
