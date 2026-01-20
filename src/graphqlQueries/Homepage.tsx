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
          buttonSectionCtaLabel
          buttonSectionCtaLink
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
          projects {
            coverPicture {
              alternativeText
              url
            }
            metaDescription
            description
            slug
            title
            services
          }
          collaborators {
            name
            absoluteUrl
            logo {
              alternativeText
              url
            }
          }
          timelineSection {
            sideText
            timelineAlign
            timelineStep {
              stepNumber
              title
              description
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
          buttonSectionCtaLabel
          buttonSectionCtaLink
          services {
            name
            descriptionRichText
            icon
          }
        }
      }
    }
  }
`;
