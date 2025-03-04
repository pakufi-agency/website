import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
  query getHomepage {
    pages(filters: { documentId: { eq: "liqb7hs6ksgzj1k4129d892d" } }) {
      pageTitle
      sections {
        ... on ComponentStaticComponentHero {
          id
          title
          ctaLabel
          ctaLink
          descriptionRichText
          mediaHero {
            alternativeText
            url
          }
        }

        ... on ComponentStaticComponentWeStatment {
          sectionTitle
          backgroundImage {
            url
            alternativeText
          }
          statmentOne
          statmentThree
          statmentTwo
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
            media {
              url
              alternativeText
            }
            richText
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
            textColor
          }
          serviceList {
            services {
              name
              subtitle
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
          boxesText {
            content
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
            media {
              url
              alternativeText
            }
            richText
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
            textColor
          }
          serviceList {
            services {
              name
              subtitle
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
