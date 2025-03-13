// utils/seo.ts

import { Metadata } from "next";
import { getStrapiImageUrl } from "./utils";

interface PageProps {
    SEO: {
        seoTitle: string;
        seoDescription: string;
        seoPreview: { url: string; alternativeText: string }[];
    }
    pageTitle: string;
    internalBannerMedia: any;
    sections: any[];
}

export const DEFAULT_METADATA = {
    seoTitle: "Pakufi - Ethical tech Agency",
    seoDescription: "At Pakufi, we are a web agency driven by social impact. We craft high-quality, ethical, and human-centered digital solutions while empowering IT and digital professionals from underrepresented regions.",
    seoPreview: {
        url: "/images/logo.png",
        alternativeText: "Pakufi Logo"
    }
}

// Nextjs function to generate metadata
export async function generatePageMetadata(
    getPageData: () => Promise<PageProps | null>
): Promise<Metadata> {
    const pageData = await getPageData();

    if (!pageData || !pageData.SEO) {
        return {
            title: DEFAULT_METADATA.seoTitle,
            description: DEFAULT_METADATA.seoDescription,
            openGraph: {
                title: DEFAULT_METADATA.seoTitle,
                description: DEFAULT_METADATA.seoDescription,
                images: [getStrapiImageUrl(DEFAULT_METADATA.seoPreview.url)],
            },
            twitter: {
                card: "summary_large_image",
                title: DEFAULT_METADATA.seoTitle,
                description: DEFAULT_METADATA.seoDescription,
                images: [getStrapiImageUrl(DEFAULT_METADATA.seoPreview.url)], 
            }
        };
    }

    const {SEO: { seoTitle, seoDescription, seoPreview }} = pageData;
    return {
        title: seoTitle,
        description: seoDescription,
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            images: [getStrapiImageUrl(seoPreview[0].url)],
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [getStrapiImageUrl(seoPreview[0].url)],
        },
    };
}