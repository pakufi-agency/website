import React from "react";
import "../../public/css/bootstrap.min.css";
import "animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../public/css/style.css";
// Global Responsive Style
import "../../public/css/responsive.css";

// Multicolor if you want this just one color comment out
// import '../../public/css/colors/brink-pink-style.css'
// import '../../public/css/colors/pink-style.css'
// import '../../public/css/colors/purple-style.css'

import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AosAnimation from "@/components/Layout/AosAnimation";
import GoTop from "@/components/Layout/GoTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartP - React Next.js IT Startup & Digital Agency Template",
  description: "React Next.js IT Startup & Digital Agency Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
