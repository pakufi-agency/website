import React from "react";
import { getStrapiData, getStrapiImageUrl } from "../../../utils/utils";
import {
  BLOG_POSTS_LIST_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
} from "../../../graphqlQueries/Blog";
import { SINGLE_PAGE_QUERY } from "../../../graphqlQueries/SinglePage";
import SinglePageContainer from "@/components/Layout/SinglePageContainer";
import LoadingError from "@/components/Errors/LoadingError";
import MobileMenuProvider from "../../../context/MobileMenuProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BlogDetailsContent from "@/components/Blog/BlogDetails";
import { SinglePageResponse } from "../../../types/types";

interface BlogPost {
  title: string;
  slug: string;
  content: any;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  PostMetaInfo?: {
    metaDescription?: string;
    metaTitle?: string;
    metaImage?: {
      url: string;
      alternativeText?: string;
    };
    readingTime?: string;
  };
}

interface StrapiResponse<T> {
  blogPosts?: T[];
}

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const data: StrapiResponse<BlogPost> =
    (await getStrapiData({
      query: BLOG_POST_BY_SLUG_QUERY,
      pageType: "Blog Post",
      variables: { slug: params.slug },
    })) ?? {};

  const post = data?.blogPosts?.[0];
  if (!post) return { title: "Blog | Pakufi" };

  const meta = post.PostMetaInfo;
  const pageUrl = `https://pakufi.com/blog/${post.slug}`;

  return {
    title: meta?.metaTitle || post.title,
    description: meta?.metaDescription || post.content?.slice(0, 160),
    openGraph: {
      title: meta?.metaTitle || post.title,
      description: meta?.metaDescription || post.content?.slice(0, 160),
      images: meta?.metaImage
        ? [getStrapiImageUrl(meta.metaImage.url)]
        : post.coverImage
        ? [getStrapiImageUrl(post.coverImage.url)]
        : [],
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.metaTitle || post.title,
      description: meta?.metaDescription || post.content?.slice(0, 160),
      images: meta?.metaImage
        ? [getStrapiImageUrl(meta.metaImage.url)]
        : post.coverImage
        ? [getStrapiImageUrl(post.coverImage.url)]
        : [],
    },
  };
}

// Static Generation
export async function generateStaticParams(): Promise<Params[]> {
  const data: StrapiResponse<BlogPost> =
    (await getStrapiData({
      query: BLOG_POSTS_LIST_QUERY,
      pageType: "Blog Post List",
    })) ?? {};

  return (data?.blogPosts || []).map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const data: StrapiResponse<BlogPost> =
    (await getStrapiData({
      query: BLOG_POST_BY_SLUG_QUERY,
      pageType: "Blog Post",
      variables: { slug: params.slug },
    })) ?? {};

  const singlePageResponse = await getStrapiData<{
    singlePages: SinglePageResponse[];
  }>({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "default" },
    pageType: "SinglePage",
  });

  const post = data?.blogPosts?.[0];

  if (!post || !singlePageResponse) {
    return (
      <MobileMenuProvider>
        <Navbar />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  const formattedProps = {
    title: post.title,
    slug: post.slug,
    content: post.content,
    coverImage: post.coverImage,
    PostMetaInfo: post.PostMetaInfo,
    navigation: {
      previous: undefined,
      next: undefined,
    },
  };

  return (
    <div className="blog-detail-page">
      <SinglePageContainer singlePageData={singlePageResponse}>
        <BlogDetailsContent {...formattedProps} />
      </SinglePageContainer>
    </div>
  );
}
