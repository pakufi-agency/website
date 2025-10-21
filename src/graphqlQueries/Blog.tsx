import { gql } from "@apollo/client";

export const BLOG_POSTS_LIST_QUERY = gql`
  query getBlogPostList {
    blogPosts {
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
