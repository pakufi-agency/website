import { gql } from "@apollo/client";

export const GENERAL_PAGES_LIST_QUERY = gql`
  query getPageGeneralList {
    pageGenerals {
      slug
    }
  }
`;

export const GENERAL_PAGE_BY_SLUG_QUERY = gql`
  query getGeneralPageBySlug($slug: String!) {
    pageGenerals(filters: { slug: { eq: $slug } }) {
      pageTitle
      slug
      pageDescription
      pageBannerTitle
      SEO {
        seoTitle
        seoDescription
        seoPreview {
          url
          alternativeText
        }
      }
      internalBannerMedia {
        alternativeText
        url
      }
      sections {
        __typename
        ... on ComponentCommonCta {
          title
          description
          isBig
          buttonCtaOneLabel
          buttonCtaOneLink
          buttonCtaTwoLabel
          buttonCtaTwoLink
          media {
            url
            alternativeText
          }
        }
        ... on ComponentCommonNewsletter {
          buttonLabel
          title
          subtitle
          footnote
        }
        ... on ComponentCommonSection {
          sectionTitle
          subtitle
          TextImageButtonsComponent {
            ImagePosition
            richText
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
            media {
              url
              alternativeText
            }
          }
          iconTitleSubtitle {
            Title
            subtitle
            iconImg {
              alternativeText
              url
            }
            iconName
          }
          mentorship_programs {
            title
            subtitle
            features
            cta {
              label
              url
              style
            }
          }
          mentors {
            fullName
            jobPosition
            email
            linkedinAbsoluteUrl
            profilePic {
              alternativeText
              url
            }
          }
          timelineSection {
            timelineStep {
              stepNumber
              title
              description
            }
            timelineAlign
            sideText
          }
          TextBlock {
            content
          }
          boxesText {
            content
          }
          price_packages {
            title
            subtitle
            price
            features
            cta {
              label
              url
              style
            }
          }
          services {
            name
            descriptionRichText
            icon
          }
          blogGrid {
            slug
          }
        }
      }
    }
  }
`;
