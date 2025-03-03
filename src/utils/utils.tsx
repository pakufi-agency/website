import React from "react";

export const getStrapiImageUrl = (url: string) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337" // Strapi local URL
      : "https://your-strapi-production.com"; // Strapi production URL

  return url.startsWith("http") ? url : `${baseUrl}${url}`;
};

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
