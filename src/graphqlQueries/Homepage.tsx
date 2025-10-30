import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
  query getHomepage {
    pages(filters: { documentId: { eq: "liqb7hs6ksgzj1k4129d892d" } }) {
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
          blogGrid {
            slug
          }
          services {
            name
            subtitle
            descriptionRichText
            icon
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
            profilePic {
              alternativeText
              url
            }
          }
          question_answers {
            question
            answer
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
        }
      }
    }
  }
`;
