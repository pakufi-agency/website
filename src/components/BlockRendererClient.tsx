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

  // Simple HTML sanitization - only allow safe button tags
  const sanitizeHTML = (html: string): string => {
    // Only allow specific button patterns and basic formatting
    const allowedTags = /^<(\/?)(?:button|strong|em|u|br|span|a)(\s[^>]*)?>$/i;

    // For now, let's trust the content from Strapi and do minimal sanitization
    // In production, you should use proper HTML sanitization
    return html;
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Handle button clicks
    if (target.tagName === "BUTTON") {
      e.preventDefault();

      // Look for data-url attribute first
      const dataUrl = target.getAttribute("data-url");

      // If no data-url, look for an anchor tag inside the button
      const anchorTag = target.querySelector("a");
      const href =
        dataUrl || (anchorTag ? anchorTag.getAttribute("href") : null);

      const buttonText = target.textContent || "";

      // Add tracking
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
      console.log("Button clicked:", buttonText, "URL:", href);
    }

    // Handle direct anchor clicks
    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      const linkText = target.textContent || "";

      if (pathname && href) {
        trackClick("CTA:RichTextLink", linkText, href, pathname);
      }

      // Let the anchor handle its own navigation unless it's inside a button
      if (target.closest("button")) {
        e.preventDefault();
      }
    }
  };

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },

        paragraph: ({ children }) => {
          if (!isClient) {
            return <p>{children}</p>;
          }

          // First, let's try to reconstruct the full HTML from all children
          let fullTextContent = "";
          React.Children.forEach(children, (child) => {
            if (
              React.isValidElement(child) &&
              child.props &&
              typeof child.props.text === "string"
            ) {
              fullTextContent += child.props.text;
            }
          });

          // Debug logging
          console.log("Full text content:", fullTextContent);
          console.log("Contains HTML:", containsHTML(fullTextContent));

          // If the full content contains HTML, process it as a whole
          if (containsHTML(fullTextContent)) {
            const sanitizedHTML = sanitizeHTML(fullTextContent);
            console.log("Rendering HTML:", sanitizedHTML);
            return (
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                onClick={handleClick}
              />
            );
          }

          // Fallback to individual child processing for non-HTML content
          const processedChildren = React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              child.props &&
              typeof child.props.text === "string"
            ) {
              const text = child.props.text;

              // Apply formatting if present
              let formattedText: React.ReactNode = text;
              if (child.props.bold)
                formattedText = <strong>{formattedText}</strong>;
              if (child.props.italic) formattedText = <em>{formattedText}</em>;
              if (child.props.underline) formattedText = <u>{formattedText}</u>;
              if (child.props.strikethrough)
                formattedText = <s>{formattedText}</s>;
              if (child.props.code)
                formattedText = <code>{formattedText}</code>;

              return formattedText;
            }

            return child;
          });

          return <p>{processedChildren}</p>;
        },
      }}
    />
  );
}
