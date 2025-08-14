import React from "react";
import createApolloClient from "./apolloClient";
import { Url } from "url";

export const getStrapiImageUrl = (url: string) => {
  return url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_CMS_ENDPOINT}${url}`;
};

/**
 * Fetches data for a Strapi page.
 * This function is used to fetch data for a specific page type from Strapi.
 * @param {any} query - The GraphQL query to fetch the page data.
 * @param {Record<string, any>} variables - The variables to pass to the query.
 * @param {string} pageType - The type of page being fetched.
 */
interface StrapiPageDataOptions {
  query: any;
  variables?: Record<string, any>;
  pageType: string;
}

export async function getStrapiPageData<T>(
  options: StrapiPageDataOptions
): Promise<T | null> {
  const client = createApolloClient();

  try {
    const { data } = await client.query({
      query: options.query,
      fetchPolicy: "cache-first",
    });

    if (!data || !data.pages || !data.pages[0]) {
      console.warn(`${options.pageType} data is missing or invalid.`);
      return null;
    }

    return data.pages[0] as T;
  } catch (error) {
    console.error(`Error fetching ${options.pageType} data:`, error);
    return null;
  }
}

/**
 * Renders multiple components within a section based on a component map.
 * This function is used mostly in pages to render the different data type
 * added to a Section like Common Section, as defined in Strapi Content-Type.
 *
 * Wit this function we can render one or several data type included in a section
 * and they can be either an array or an object. The possibility of undefined is also handled.
 *
 * @param {RenderSectionProps} props - Props for the function.
 * @param {SectionProps} props.section - The section data containing the different component data.
 * @param {React.ComponentType<any>} props.ComponentWrapper - The wrapper component for the entire section.
 * @param {Record<string, React.ComponentType<any>>} props.componentMap - A map of component keys to React components.
 *
 * @returns {JSX.Element} - A React element containing the rendered components within the ComponentWrapper.
 */
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

        console.log(`Rendering section: ${key}`, sectionData);

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
  pathname: string
) => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, {
      label,
      link,
      page: pathname,
    });
  }
};
