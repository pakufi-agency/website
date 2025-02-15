import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
  query getHomepage {
    pages(filters: { pageTitle: { eq: "Homepage" } }) {
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
          TextImageButtonsComponent {
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
