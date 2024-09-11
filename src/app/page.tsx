import React from "react";
import ComingSoonContent from "../components/ComingSoon/ComingSoonContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedom.",
};

export default async function Page() {
  return (
    <>
      <ComingSoonContent />
    </>
  );
}
