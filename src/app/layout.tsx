import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

import "../styles/common.scss";

import type { Metadata } from "next";
import Head from "next/head";
import { Roboto } from "next/font/google";
import AosAnimation from "@/components/Layout/AosAnimation";
import GoTop from "@/components/Layout/GoTop";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Pakufi - Ethical Tech Agency",
  description:
    "We help you bring your ideas online pofessionally and tailored to you. We work just with talente freelancers from less priviledge countries, offering opportunity to achieve economical and geographical freedome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/grafita_normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={roboto.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
