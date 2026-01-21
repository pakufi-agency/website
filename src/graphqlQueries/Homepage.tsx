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
            subtitle
            icon
          }
        }
        ... on ComponentCommonSectionfullWidth {
          sectionTitle3
          showTitle
          sectionSubtitle3
          backgroundColor3
          titleColor3
          descriptionColor3
          barBallColor3
          shapesVariation3
          backgroundVariation3
          buttonSectionCtaLabel
          buttonSectionCtaLink
          collaborators {
            name
            absoluteUrl
            logo {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
`;
