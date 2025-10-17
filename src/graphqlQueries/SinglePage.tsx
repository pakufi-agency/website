import { gql } from "@apollo/client";

export const SINGLE_PAGE_QUERY = gql`
  query getSinglePageBySlug($slug: String!) {
    singlePages(filters: { slug: { eq: $slug } }) {
      slug
      cta {
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
      newsletter {
        buttonLabel
        title
        subtitle
        footnote
      }
    }
  }
`;
