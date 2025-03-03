import { gql } from "@apollo/client";

export const ABOUTUS_QUERY = gql`
  query getAboutus {
    pages(filters: { pageTitle: { eq: "About us" } }) {
      pageTitle
      pageDescription
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
        ... on ComponentCommonSection {
          sectionTitle
          sectionSubtitle
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
          teamMemberList {
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
          }
          boxesText {
            content
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
