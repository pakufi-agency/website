import React from "react";
import { getStrapiData, getStrapiImageUrl } from "../../../utils/utils";
import ProjectDetails from "@/components/Projects/ProjectDetails";
import {
  PROJECTS_LIST_QUERY,
  PROJECT_BY_SLUG_QUERY,
} from "../../../graphqlQueries/Projects";
import { SINGLE_PAGE_QUERY } from "../../../graphqlQueries/SinglePage";
import { Url } from "url";
import SinglePageContainer from "@/components/Layout/SinglePageContainer";
import LoadingError from "@/components/Errors/LoadingError";
import MobileMenuProvider from "../../../context/MobileMenuProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export interface SinglePageResponse {
  slug: string;
  cta: {
    title: string;
    description: string;
    media: {
      url: string;
      alternativeText: string;
    };
    buttonCtaTwoLabel: string;
    buttonCtaTwoLink: Url;
    isBig: boolean;
    buttonCtaOneLabel: string;
    buttonCtaOneLink: Url;
  };
  newsletter: {
    buttonLabel: string;
    title: string;
    subtitle: string;
    footnote: string;
  };
}

interface Project {
  title: string;
  slug: string;
  description: any;
  metaDescription?: string | null;
  coverPicture: {
    alternativeText: string;
    url: string;
  } | null;
  media: { url: string; alternativeText: string }[];
  livePreviewUrl?: string;
  client: {
    label: string;
    url: string;
  };
  projectDate: string;
}

interface StrapiResponse<T> {
  projects?: T[];
}

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const data: StrapiResponse<Project> =
    (await getStrapiData({
      query: PROJECT_BY_SLUG_QUERY,
      pageType: "Project Details",
      variables: { slug: params.slug },
    })) ?? {};

  const project = data?.projects?.[0];
  if (!project) return <LoadingError />;

  const pageUrl = `https://pakufi.com/projects/${project.slug}`;

  return {
    title: project.title,
    description: (project.metaDescription || "").slice(0, 160),
    openGraph: {
      title: project.title,
      description: project.metaDescription,
      images: project.coverPicture
        ? [getStrapiImageUrl(project.coverPicture.url)]
        : [],
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.metaDescription,
      images: project.coverPicture
        ? [getStrapiImageUrl(project.coverPicture.url)]
        : [],
    },
  };
}

// pre-generate project pages for SSG
export async function generateStaticParams(): Promise<Params[]> {
  const data: StrapiResponse<Project> =
    (await getStrapiData({
      query: PROJECTS_LIST_QUERY,
      pageType: "Project details",
    })) ?? {};
  return (data?.projects || []).map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Params }) {
  const data: StrapiResponse<Project> =
    (await getStrapiData({
      query: PROJECT_BY_SLUG_QUERY,
      pageType: "Project Details",
      variables: { slug: params.slug },
    })) ?? {};

  const singlePageResponse = await getStrapiData<{
    singlePages: SinglePageResponse[];
  }>({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "default" },
    pageType: "SinglePage",
  });

  if (!data || !singlePageResponse) {
    return (
      <MobileMenuProvider>
        <Navbar />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  const project = data?.projects?.[0]!;
  const {
    title,
    description,
    media,
    client,
    projectDate,
    coverPicture,
    livePreviewUrl,
  } = project;

  return (
    <div className="project-detail-page">
      <SinglePageContainer singlePageData={singlePageResponse}>
        <ProjectDetails
          title={title}
          description={description}
          media={media}
          client={client}
          projectDate={projectDate}
          coverPicture={coverPicture}
          livePreviewUrl={livePreviewUrl}
        />
      </SinglePageContainer>
    </div>
  );
}
