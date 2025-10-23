import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

import "../styles/common.scss";

import Head from "next/head";
import Script from "next/script";
import { Roboto } from "next/font/google";

import ApolloTracker from "../utils/ApolloSalesTracker";

import AosAnimation from "../components/Layout/AosAnimation";
import GoTop from "../components/Layout/GoTop";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
        {/* Umami Analytics Tracking with Next/Script */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID &&
          process.env.NEXT_PUBLIC_UMAMI_SCRIPT_SRC && (
            <Script
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_SRC}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              data-domains="pakufi.agency"
              strategy="lazyOnload"
              defer={true}
            />
          )}

        {/* Apollo Sales Tracking with Next/Script */}
        {process.env.NEXT_PUBLIC_APOLLO_ID &&
          process.env.NEXT_PUBLIC_APOLLO_SRC && (
            <ApolloTracker
              apolloId={process.env.NEXT_PUBLIC_APOLLO_ID}
              apolloSrc={process.env.NEXT_PUBLIC_APOLLO_SRC}
            />
          )}
      </body>
    </html>
  );
}
