import { Metadata } from "next";
import { getStrapiImageUrl } from "./utils";

interface PageProps {
  pages?: {
    SEO: {
      seoTitle: string;
      seoDescription: string;
      seoPreview: { url: string; alternativeText: string }[];
    };
    pageTitle: string;
    pageDescription: string;
    internalBannerMedia: any;
    sections: any[];
  }[];
  pageGenerals?: {
    SEO: {
      seoTitle: string;
      seoDescription: string;
      seoPreview: { url: string; alternativeText: string }[];
    };
    pageTitle: string;
    pageDescription: string;
    internalBannerMedia: any;
    sections: any[];
  }[];
}

export const DEFAULT_METADATA = {
  seoTitle: "Pakufi - Ethical tech Agency",
  seoDescription:
    "At Pakufi, we are a web agency driven by social impact. We craft high-quality, ethical, and human-centered digital solutions while empowering IT and digital professionals from underrepresented regions.",
  seoPreview: {
    url: "/images/logo.png",
    alternativeText: "Pakufi Logo",
  },
};

// Nextjs function to generate metadata in the head
export async function generatePageMetadata(
  getPageData: () => Promise<PageProps | null>,
  pathname: string = "/"
): Promise<Metadata> {
  const pageData = await getPageData();
  const canonical = `https://pakufi.agency${pathname}`;

  if (!pageData) {
    return getDefaultMetadata(canonical);
  }

  // Determine key dynamically
  const key = pageData.pages
    ? "pages"
    : pageData.pageGenerals
    ? "pageGenerals"
    : null;

  if (!key) {
    return getDefaultMetadata(canonical);
  }

  const list = key === "pages" ? pageData.pages : pageData.pageGenerals;
  if (!list || list.length === 0 || !list[0].SEO) {
    return getDefaultMetadata(canonical);
  }

  const page = list[0];
  const SEO = page.SEO;

  return {
    title: page.pageTitle,
    description: page.pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: SEO.seoTitle,
      description: SEO.seoDescription,
      url: "https://pakufi.com",
      images: [getStrapiImageUrl(SEO.seoPreview[0].url)],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.seoTitle,
      description: SEO.seoDescription,
      images: [getStrapiImageUrl(SEO.seoPreview[0].url)],
    },
  };
}

function getDefaultMetadata(canonical: string): Metadata {
  return {
    title: DEFAULT_METADATA.seoTitle,
    description: DEFAULT_METADATA.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: DEFAULT_METADATA.seoTitle,
      description: DEFAULT_METADATA.seoDescription,
      url: "https://pakufi.com",
      images: [getStrapiImageUrl(DEFAULT_METADATA.seoPreview.url)],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_METADATA.seoTitle,
      description: DEFAULT_METADATA.seoDescription,
      images: [getStrapiImageUrl(DEFAULT_METADATA.seoPreview.url)],
    },
  };
}
