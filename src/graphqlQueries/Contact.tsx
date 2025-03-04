import { gql } from "@apollo/client";

export const CONTACT_QUERY = gql`
  query getContact {
    pages(filters: { documentId: { eq: "feli3eyi8vf1pi56v3jct7js" } }) {
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
          faqList {
            question_answers {
              question
              answer
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
        ... on ComponentCommonSectionhalfbackground {
          sectionTitle
          sectionSubtitle
          backgroundColor
          titleColor
          descriptionColor
          barBallColor2
          TextImageButtonsComponent {
            ImagePosition
            richText
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
          }
          serviceList {
            services {
              name
              descriptionRichText
              icon
            }
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
          faqList {
            question_answers {
              question
              answer
            }
          }
        }
      }
    }
  }
`;
