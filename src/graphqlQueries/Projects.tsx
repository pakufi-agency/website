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
