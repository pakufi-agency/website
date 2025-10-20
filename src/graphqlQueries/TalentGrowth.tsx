import { gql } from "@apollo/client";

export const TALENTGROWTH_QUERY = gql`
  query getTalentGrowth {
    pages(filters: { documentId: { eq: "qlh6njvxulawqnkmxe49v8v3" } }) {
      pageTitle
      pageDescription
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
          mentorship_programs {
            title
            subtitle
            features
            cta {
              label
              url
              style
            }
          }
          mentors {
            fullName
            jobPosition
            email
            linkedinAbsoluteUrl
            profilePic {
              alternativeText
              url
            }
          }
          timelineSection {
            timelineStep {
              stepNumber
              title
              description
            }
            timelineAlign
            sideText
          }
          TextBlock {
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
        }
      }
    }
  }
`;
