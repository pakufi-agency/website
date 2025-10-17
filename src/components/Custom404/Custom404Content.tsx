"use client";

import React from "react";
import { usePathname } from "next/navigation";
import SinglePageContainer from "../Layout/SinglePageContainer";
import { ButtonLink } from "../ButtonLink";
import styles from "./Custom404.module.scss";
import { defaultSinglePageResponse } from "../../types/types";

const Custom404Content = () => {
  const pathname = usePathname();

  return (
    <SinglePageContainer
      singlePageData={{ singlePages: [defaultSinglePageResponse] }}
    >
      <div className={styles.errorArea}>
        <div className="container">
          <div className={styles.errorContent}>
            <div className={styles.notfound}>
              <h1>Oops!</h1>
            </div>
            <h3>404 - Page not found</h3>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            <ButtonLink
              href="/"
              label="Go to Homepage"
              pathname={pathname}
              className={`btn button-pakufi-dark ${styles.button}`}
            />
          </div>
        </div>
      </div>
    </SinglePageContainer>
  );
};

export default Custom404Content;
