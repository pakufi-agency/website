"use client";

import React from "react";
import SinglePageContainer from "../Layout/SinglePageContainer";
import { ButtonLink } from "../ButtonLink";
import { usePathname } from "next/navigation";
import { defaultSinglePageResponse } from "../../types/types";

const LoadingError = () => {
  const pathname = usePathname();
  return (
    <div style={{ textAlign: "center", padding: "80px 0", marginTop: "110px" }}>
      <h1>Error Loading Page</h1>
      <p>
        We encountered an issue while loading this page. Please try refreshing
        or come back later.
      </p>

      <ButtonLink
        href="/"
        label="Go to Homepage"
        pathname={pathname}
        className={`btn button-pakufi-dark`}
      />
    </div>
  );
};

export default LoadingError;
