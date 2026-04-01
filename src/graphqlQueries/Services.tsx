import { gql } from "@apollo/client";

export const SERVICES_ALL_QUERY = gql`
  query getAllServices {
    services(sort: "createdAt:desc", pagination: { limit: 500 }) {
      name
      slug
      icon
      subtitle
      descriptionRichText
      descriptionShort
      seo {
        seoTitle
        seoDescription
        seoPreview {
          url
          alternativeText
        }
      }
      createdAt
    }
  }
`;

export const SERVICE_BY_SLUG_QUERY = gql`
  query getServiceBySlug($slug: String!) {
    services(filters: { slug: { eq: $slug } }) {
      name
      slug
      icon
      subtitle
      descriptionRichText
      descriptionShort
      seo {
        seoTitle
        seoDescription
        seoPreview {
          url
          alternativeText
        }
      }
    }
  }
`;

export const SERVICES_PAGE_QUERY = gql`
  query getServicesPage {
    pages(filters: { documentId: { eq: "fdswublmto4hb0ja26divsnb" } }) {
      pageTitle
      pageBannerTitle
      SEO {
        seoTitle
        seoDescription
        seoPreview {
          url
          alternativeText
        }
      }
      sections {
        ... on ComponentCommonSection {
          sectionTitle
          showTitle
          subtitle
          backgroundColor
          titleColor
          descriptionColor
          barBallColor
          shapesVariation
          backgroundVariation
          buttonSectionCtaLabel
          buttonSectionCtaLink
          services {
            name
            slug
            subtitle
            descriptionRichText
            icon
          }
        }
        ... on ComponentCommonNewsletter {
          buttonLabel
          title
          subtitle
          footnote
        }
        ... on ComponentCommonCta {
          title
          description
          media {
            url
            alternativeText
          }
          buttonCtaTwoLabel
          buttonCtaTwoLink
          isBig
          buttonCtaOneLabel
          buttonCtaOneLink
        }
      }
    }
  }
`;
