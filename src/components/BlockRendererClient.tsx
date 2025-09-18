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

          // Otherwise → safe React rendering with newline handling
          const processedChildren = childArray.flatMap((child, i) => {
            if (
              React.isValidElement(child) &&
              typeof child.props?.text === "string"
            ) {
              // Split text by newline
              const parts = child.props.text.split("\n");
              return parts.flatMap((part: any, j: any) => {
                let formatted: React.ReactNode = part;

                // Preserve formatting
                if (child.props.bold)
                  formatted = <strong key={`b-${i}-${j}`}>{formatted}</strong>;
                if (child.props.italic)
                  formatted = <em key={`i-${i}-${j}`}>{formatted}</em>;
                if (child.props.underline)
                  formatted = <u key={`u-${i}-${j}`}>{formatted}</u>;
                if (child.props.strikethrough)
                  formatted = <s key={`s-${i}-${j}`}>{formatted}</s>;
                if (child.props.code)
                  formatted = <code key={`c-${i}-${j}`}>{formatted}</code>;

                return j < parts.length - 1
                  ? [formatted, <br key={`${i}-${j}`} />]
                  : [formatted];
              });
            }

            return child;
          });

          return <p onClick={handleClick}>{processedChildren}</p>;
        },
      }}
    />
  );
}
