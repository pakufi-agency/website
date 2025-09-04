import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
  query getHomepage {
    pages(filters: { documentId: { eq: "liqb7hs6ksgzj1k4129d892d" } }) {
      pageTitle
      SEO {
        seoTitle
        seoDescription
        seoPreview {
          url
          alternativeText
        }
      }
      sections {
        ... on ComponentStaticComponentHero {
          id
          title
          descriptionRichText
          mediaHero {
            alternativeText
            url
          }
          Button {
            label
            url
          }
        }
        ... on ComponentStaticComponentWhatWeDo {
          title
          pakufiOffers {
            cardStyle
            title
            content
            button {
              label
              url
              style
            }
            iconAsText
            iconAsImg {
              url
              alternativeText
            }
          }
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
            buttonStyle
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
          collaboratorList {
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
