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
          tagline
          mediaHero {
            url
            alternativeText
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
        ... on ComponentCommonTextImageButtons {
          title
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
        ... on ComponentSectionsServiceSection {
          sectionTitle
          services {
            name
            description
            icon
          }
          sectionSubtitle
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
        ... on ComponentSectionsTeamSection {
          sectionTitle
          sectionSubtitle
          members: team_members {
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
        ... on ComponentSectionsFaqSection {
          title
          description
          questions: question_answers {
            question
            answer
          }
        }
      }
    }
  }
`;
