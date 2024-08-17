import React, { FC, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{pageTitle}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/logo/favicon.png"
        />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
