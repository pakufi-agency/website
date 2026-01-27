import { gql } from "@apollo/client";

export const BLOG_POSTS_ALL_QUERY = gql`
  query getBlogPostList {
    blogPosts(sort: "publishedAt:desc", pagination: { limit: 500 }) {
      title
      slug
      content
      coverImage {
        alternativeText
        url
      }
      excerpt
      PostMetaInfo {
        metaDescription
        metaTitle
        metaImage {
          alternativeText
          url
        }
        readingTime
        author
      }
      publishedAt
    }
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = gql`
  query getBlogPostBySlug($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      title
      slug
      content
      coverImage {
        alternativeText
        url
      }
      excerpt
      PostMetaInfo {
        metaDescription
        metaTitle
        metaImage {
          alternativeText
          url
        }
        readingTime
        author
      }
    }
  }
`;

export const BLOG_POSTS_LATEST_QUERY = gql`
  query getLatestBlogPosts {
    blogPosts(sort: "createdAt:desc", pagination: { start: 0, limit: 10 }) {
      title
      slug
      content
      coverImage {
        alternativeText
        url
      }
      excerpt
      PostMetaInfo {
        metaDescription
        metaTitle
        metaImage {
          alternativeText
          url
        }
        readingTime
        author
      }
      publishedAt
    }
  }
`;

export const BLOG_PAGE_QUERY = gql`
  query getBlogPage {
    pages(filters: { documentId: { eq: "hoch66ye8uio5h4kalff2tc8" } }) {
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
          blogGrid {
            slug
          }
        }
        ... on ComponentCommonNewsletter {
          buttonLabel
          title
          subtitle
          footnote
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
      }
    }
  }
`;
