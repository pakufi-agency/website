"use client";

import Script from "next/script";

declare global {
  interface Window {
    trackingFunctions?: {
      onLoad?: (args: { appId: string }) => void;
    };
  }
}

interface Props {
  apolloId: string;
  apolloSrc: string;
}

export default function ApolloTracker({ apolloId, apolloSrc }: Props) {
  return (
    <Script
      src={`${apolloSrc}?nocache=${Math.random().toString(36).substring(7)}`}
      strategy="lazyOnload"
      onLoad={() => {
        if (window.trackingFunctions?.onLoad) {
          window.trackingFunctions.onLoad({ appId: apolloId });
        }
      }}
      defer
    />
  );
}
