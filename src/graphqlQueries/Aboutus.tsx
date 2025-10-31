import { gql } from "@apollo/client";

export const ABOUTUS_QUERY = gql`
  query getAboutus {
    pages(filters: { documentId: { eq: "v5mtxcrqht85b8xve4lcfhn3" } }) {
      pageTitle
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
        ... on ComponentCommonNewsletter {
          buttonLabel
          title
          subtitle
          footnote
        }
        ... on ComponentCommonSection {
          sectionTitle
          subtitle
          backgroundColor
          titleColor
          descriptionColor
          barBallColor
          shapesVariation
          backgroundVariation
          TextImageButtonsComponent {
            ImagePosition
            richText
            media {
              url
              alternativeText
            }
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
          }
          team_members {
            firstName
            lastName
            jobPosition
            email
            linkedinAbsoluteUrl
            personalWebsiteAbsoluteUrl
            githubAsboluteUrl
            profilePic {
              url
              alternativeText
            }
            shortDescription
          }

          collaborators {
            fullName
            jobPosition
            email
            linkedinAbsoluteUrl
            personalWebsiteAbsoluteUrl
            profilePic {
              url
              alternativeText
            }
          }
        }
        ... on ComponentSectionsIntroSinglePage {
          title
          richTextDescription
          mediaIntroSinglePage {
            url
            alternativeText
          }
          textCols {
            richText
          }
        }
      }
    }
  }
`;
