import { gql } from "@apollo/client";

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
