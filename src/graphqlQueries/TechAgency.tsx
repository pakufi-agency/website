import { gql } from "@apollo/client";

export const TECHAGENCY_QUERY = gql`
  query getTechAgency {
    pages(filters: { documentId: { eq: "k42kqa4fvjtkmvrg1rhvdyjt" } }) {
      pageTitle
      pageDescription
      pageBannerTitle
      internalBannerMedia {
        alternativeText
        url
      }
      sections {
        ... on ComponentStaticComponentHero {
          id
          title
          Button {
            label
            url
          }
          descriptionRichText
          mediaHero {
            alternativeText
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
          TextImageButtonsComponent {
            ImagePosition
            richText
            buttonOneLabel
            buttonOneLink
            buttonTwoLabel
            buttonTwoLink
            media {
              url
              alternativeText
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
          timelineSection {
            sideText
            timelineAlign
            timelineStep {
              stepNumber
              title
              description
            }
          }
          price_packages {
            title
            subtitle
            price
            features
            cta {
              label
              url
              style
            }
          }
          services {
            name
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
          price_packages {
            title
            subtitle
            price
            features
            cta {
              label
              url
              style
            }
          }
          services {
            name
            descriptionRichText
            icon
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
        }
      }
    }
  }
`;
