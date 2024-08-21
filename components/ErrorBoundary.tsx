import React, { ReactNode, useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: Error) => {
    console.error("Caught by ErrorBoundary:", error);
    setHasError(true);
  };

  // Effectively "catch" errors
  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      handleError(event.error);
      event.preventDefault();
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", (event) => {
      handleError(new Error(event.reason));
    });

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <>{<h1>Something went wrong.</h1>}</>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ErrorBoundary;
