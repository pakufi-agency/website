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

  const containsHTML = (text: string): boolean => {
    return /<[^>]*>/g.test(text);
  };

  const sanitizeHTML = (html: string): string => {
    // TODO: replace with robust sanitizer (e.g., DOMPurify)
    return html;
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Handle button clicks
    if (target.tagName === "BUTTON") {
      e.preventDefault();
      const dataUrl = target.getAttribute("data-url");
      const anchorTag = target.querySelector("a");
      const href =
        dataUrl || (anchorTag ? anchorTag.getAttribute("href") : null);
      const buttonText = target.textContent || "";

      if (pathname) {
        trackClick(
          "CTA:RichTextButton",
          buttonText,
          href || "#button-click",
          pathname
        );
      }

      if (href) {
        if (href.startsWith("http")) {
          window.open(href, "_blank");
        } else {
          window.location.href = href;
        }
      }
    }

    // Handle direct anchor clicks
    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      const linkText = target.textContent || "";

      if (pathname && href) {
        trackClick("CTA:RichTextLink", linkText, href, pathname);
      }

      if (target.closest("button")) {
        e.preventDefault();
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
          if (!isClient) {
            return <p>{children}</p>;
          }

          const childArray = React.Children.toArray(children);

          // Build raw string version to detect injected HTML
          const rawHTML = childArray
            .map((child: any) =>
              typeof child === "string" ? child : child.props?.text || ""
            )
            .join("");

          // If HTML tags are present → fallback to HTML renderer
          if (containsHTML(rawHTML)) {
            return (
              <div
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(rawHTML) }}
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
                if (child.props.bold) formatted = <strong>{formatted}</strong>;
                if (child.props.italic) formatted = <em>{formatted}</em>;
                if (child.props.underline) formatted = <u>{formatted}</u>;
                if (child.props.strikethrough) formatted = <s>{formatted}</s>;
                if (child.props.code) formatted = <code>{formatted}</code>;

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
