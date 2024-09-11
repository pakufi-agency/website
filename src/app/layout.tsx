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

// Comment out if you want this just one color
// import '../../public/css/colors/brink-pink-style.css'
// import '../../public/css/colors/pink-style.css'
// import '../../public/css/colors/purple-style.css'

// Different themes
// comment out the template you chose
// import '../../public/css/themes/rapair.css'
// import '../../public/css/themes/agency.css'

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AosAnimation from "@/components/Layout/AosAnimation";
import GoTop from "@/components/Layout/GoTop";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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
      <body className={roboto.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
