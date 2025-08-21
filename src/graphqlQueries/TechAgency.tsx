import { gql } from "@apollo/client";

export const TECHAGENCY_QUERY = gql`
  query getTechAgency {
    pages(filters: { documentId: { eq: "k42kqa4fvjtkmvrg1rhvdyjt" } }) {
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
          pricePackageList {
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
          serviceList {
            services {
              name
              descriptionRichText
              icon
            }
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
          pricePackageList {
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
          serviceList {
            services {
              name
              descriptionRichText
              icon
            }
          }
        }
        ... on ComponentCommonNewsletter {
          buttonLabel
          title
          subtitle
          footnote
        }
      }
    }
  }
`;
