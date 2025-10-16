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
      PostMetaInfo {
        metaDescription
        metaTitle
        metaImage {
          alternativeText
          url
        }
        readingTime
      }
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
      PostMetaInfo {
        metaDescription
        metaTitle
        metaImage {
          alternativeText
          url
        }
        readingTime
      }
    }
  }
`;
