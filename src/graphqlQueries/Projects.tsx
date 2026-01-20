import { gql } from "@apollo/client";

export const PROJECTS_LIST_QUERY = gql`
  query getProjectsList {
    projects {
      title
      slug
      metaDescription
      coverPicture {
        alternativeText
        url
      }
      client {
        label
        url
      }
      services
    }
  }
`;

export const PROJECT_BY_SLUG_QUERY = gql`
  query getProjectBySlug($slug: String!) {
    projects(filters: { slug: { eq: $slug } }) {
      title
      slug
      description
      metaDescription
      client {
        label
        url
      }
      livePreviewUrl
      coverPicture {
        url
        alternativeText
      }
      media {
        url
        alternativeText
      }
      services
      projectTypes
    }
  }
`;

export const PROJECTS_PAGE_QUERY = gql`
  query getProjectsPage {
    pages(filters: { documentId: { eq: "r4er6juhuum7k96ek0d2fxn2" } }) {
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
          subtitle
          backgroundColor
          titleColor
          descriptionColor
          barBallColor
          shapesVariation
          backgroundVariation
          buttonSectionCtaLabel
          buttonSectionCtaLink
          projects {
            coverPicture {
              alternativeText
              url
            }
            metaDescription
            description
            slug
            title
            services
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
