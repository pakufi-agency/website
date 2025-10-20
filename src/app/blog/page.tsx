import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { getStrapiData } from "@/utils/utils";
import { BLOG_POSTS_LIST_QUERY } from "@/graphqlQueries/Blog";
import { SINGLE_PAGE_QUERY } from "@/graphqlQueries/SinglePage";
import BlogGrid from "@/components/Blog/BlogGrid";
import MobileMenuProvider from "@/context/MobileMenuProvider";
import LoadingError from "@/components/Errors/LoadingError";
import SinglePageContainer from "@/components/Layout/SinglePageContainer";
import { SinglePageResponse } from "@/types/types";

export async function generateMetadata() {
  return {
    title: "Blog | Pakufi",
    description: "Latest blog posts from Pakufi",
  };
}

export default async function BlogPage() {
  const blogData = await getStrapiData<{ blogPosts: any[] }>({
    query: BLOG_POSTS_LIST_QUERY,
    pageType: "Blog Page",
  });

  const singlePageResponse = await getStrapiData<{
    singlePages: SinglePageResponse[];
  }>({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "default" },
    pageType: "SinglePage",
  });

  if (!blogData || !singlePageResponse) {
    return (
      <MobileMenuProvider>
        <Navbar />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  return (
    <div className="blog-page">
      <SinglePageContainer singlePageData={singlePageResponse}>
        <BlogGrid posts={blogData.blogPosts} hasSidebar={false} />
      </SinglePageContainer>
    </div>
  );
}
