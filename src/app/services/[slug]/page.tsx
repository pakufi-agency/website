import React from "react";
import LoadingError from "@/components/Errors/LoadingError";
import MobileMenuProvider from "../../../context/MobileMenuProvider";
import NavbarServer from "@/components/Layout/NavbarServer";
import Footer from "@/components/Layout/Footer";
import ServiceDetails from "@/components/Services/ServiceDetails";
import SinglePageContainer from "@/components/Layout/SinglePageContainer";

import { getStrapiData, getStrapiImageUrl } from "../../../utils/utils";
import {
  SERVICES_ALL_QUERY,
  SERVICE_BY_SLUG_QUERY,
} from "../../../graphqlQueries/Services";
import { SINGLE_PAGE_QUERY } from "../../../graphqlQueries/SinglePage";

interface Service {
  name: string;
  slug: string;
  subtitle: string;
  descriptionRichText: any;
  icon: string;
  createdAt: string;
  seo: {
    seoTitle: string;
    seoDescription: string;
    seoPreview: {
      url: string;
      alternativeText: string;
    }[];
  };
}

interface StrapiResponse<T> {
  services?: T[];
}

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const data: StrapiResponse<Service> =
    (await getStrapiData({
      query: SERVICE_BY_SLUG_QUERY,
      pageType: "Service",
      variables: { slug: params.slug },
    })) ?? {};

  const service = data?.services?.[0];
  if (!service)
    return {
      title: "Service not found – Pakufi",
      description: "This service could not be found.",
    };

  const seo = service.seo;
  const pageUrl = `https://pakufi.com/services/${service.slug}`;

  return {
    title: seo?.seoTitle || service.name,
    description: seo?.seoDescription || service.name,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: seo?.seoTitle || service.name,
      description: seo?.seoDescription || service.name,
      images: seo?.seoPreview ? [getStrapiImageUrl(seo.seoPreview[0].url)] : [],
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.seoTitle || service.name,
      description: seo?.seoDescription || service.name,
      images: seo?.seoPreview ? [getStrapiImageUrl(seo.seoPreview[0].url)] : [],
    },
  };
}

// Static Generation
export async function generateStaticParams(): Promise<Params[]> {
  const data: StrapiResponse<Service> =
    (await getStrapiData({
      query: SERVICES_ALL_QUERY,
      pageType: "Services List",
    })) ?? {};

  return (data?.services || []).map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Params }) {
  const data: StrapiResponse<Service> =
    (await getStrapiData({
      query: SERVICE_BY_SLUG_QUERY,
      pageType: "Service",
      variables: { slug: params.slug },
    })) ?? {};

  const singlePageResponse = await getStrapiData<{
    singlePages: any[];
  }>({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "default" },
    pageType: "SinglePage",
  });

  const service = data?.services?.[0];

  if (!service || !singlePageResponse) {
    return (
      <MobileMenuProvider>
        <NavbarServer />
        <LoadingError />
        <Footer />
      </MobileMenuProvider>
    );
  }

  return (
    <MobileMenuProvider>
      <NavbarServer />
      <div className="service-detail-page">
        <SinglePageContainer singlePageData={singlePageResponse}>
          <ServiceDetails {...service} />
        </SinglePageContainer>
      </div>
      <Footer />
    </MobileMenuProvider>
  );
}
