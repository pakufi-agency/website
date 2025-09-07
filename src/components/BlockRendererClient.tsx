"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { trackClick } from "../utils/utils";

export default function BlockRendererClient({
  content,
  pathname,
}: {
  readonly content: BlocksContent;
  pathname?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!content) return null;

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      const linkText = target.textContent || "";

      if (pathname && href) {
        trackClick("CTA:RichTextLink", linkText, href, pathname);
      }
    }
  };

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ""}
          />
        ),

        paragraph: ({ children }) => {
          const childArray = React.Children.toArray(children);
          const rawHTML = childArray
            .map((child: any) =>
              typeof child === "string" ? child : child.props?.text || ""
            )
            .join("");

          // If rawHTML contains any HTML tags, render it as HTML
          if (/<[^>]+>/.test(rawHTML)) {
            return (
              <div
                dangerouslySetInnerHTML={{ __html: rawHTML }}
                onClick={handleClick}
              />
            );
          }

          return <p onClick={handleClick}>{childArray}</p>;
        },
      }}
    />
  );
}
