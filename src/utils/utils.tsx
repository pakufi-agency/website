import React from "react";
import createApolloClient from "./apolloClient";
import { Url } from "url";

export const getStrapiImageUrl = (url: string) => {
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_CMS_ENDPOINT}${url}`;
};

interface StrapiDataOptions {
  query: any;
  variables?: Record<string, any>;
  pageType: string;
}

export async function getStrapiData<T>(
  options: StrapiDataOptions,
): Promise<T | null> {
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: options.query,
      variables: options.variables,
      fetchPolicy: "network-only",
    });

    if (!data) {
      console.warn(`${options.pageType} data is missing or invalid.`);
      return null;
    }

    return data as T;
  } catch (error) {
    console.error(`Error fetching ${options.pageType} data:`, error);
    return null;
  }
}

interface SectionProps {
  [key: string]: any;
}

interface RenderSectionProps {
  section: SectionProps;
  ComponentWrapper: React.ComponentType<any>;
  componentMap: Record<string, React.ComponentType<any>>;
}

export function renderMultipleComponents({
  section,
  ComponentWrapper,
  componentMap,
}: RenderSectionProps): JSX.Element {
  const validKeys = Object.keys(componentMap);

  return (
    <ComponentWrapper key={section.id || Math.random()} {...section}>
      {validKeys.map((key) => {
        const Component = componentMap[key];
        const sectionData = section[key];

        if (!Component || !sectionData) {
          return null;
        }

        return Array.isArray(sectionData) ? (
          sectionData.length > 0 ? (
            <Component key={key} items={sectionData} />
          ) : null
        ) : (
          <Component key={key} {...sectionData} />
        );
      })}
    </ComponentWrapper>
  );
}

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data: Record<string, any>) => void;
    };
  }
}

export const trackClick = (
  eventName: string,
  label: string,
  link: Url | string,
  pathname: string,
) => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, {
      label,
      link,
      page: pathname,
    });
  }
};

export function truncateText(text: string, maxLength = 150) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

const URL_PATTERN = /https?:\/\/[^\s)]+/g;

export function linkifyUrls(
  text: string,
  linkClassName: string,
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const matches = Array.from(text.matchAll(URL_PATTERN));

  matches.forEach((match) => {
    const url = match[0];
    const start = match.index ?? 0;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    parts.push(
      React.createElement(
        "a",
        {
          key: key++,
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: linkClassName,
        },
        url
      )
    );

    lastIndex = start + url.length;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}