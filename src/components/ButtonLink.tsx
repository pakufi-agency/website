// components/ButtonLink.tsx
import Link from "next/link";
import React from "react";
import { trackClick } from "../utils/utils";
import { Url } from "url";

type ButtonLinkProps = {
  href: any;
  label: React.ReactNode;
  pathname?: string; // for tracking
  className?: string;
  onClick?: any;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  pathname,
  className = "",
  onClick,
}) => {
  const isExternal = /^https?:\/\//.test(href);

  const handleClick = () => {
    if (pathname) {
      trackClick(
        "CTA:ButtonLink",
        typeof label === "string" ? label : "",
        href,
        pathname
      );
    }
    if (onClick) onClick();
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {label}
    </Link>
  );
};
