"use client";

import React, {ReactNode} from "react";

import styles from "./SinglePageContainer.module.scss";

interface SinglePageContainerProps {
  children: ReactNode;
}

const SinglePageContainer: React.FC<SinglePageContainerProps> = ({ children}) => {

  return (
    <div className={styles.container}>
        {children}
    </div>
  );
};

export default SinglePageContainer;
