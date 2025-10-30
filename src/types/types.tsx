import { StaticImageData } from "next/image";
import ctaBigImage from "/public/images/people-meeting-contactus-homepage.png";

export interface SinglePageResponse {
  slug: string;
  cta: {
    title: string;
    description: string;
    media: {
      url: string | StaticImageData;
      alternativeText: string;
    };
    buttonCtaTwoLabel: string;
    buttonCtaTwoLink: string;
    isBig: boolean;
    buttonCtaOneLabel: string;
    buttonCtaOneLink: string;
  };
  newsletter: {
    buttonLabel: string;
    title: string;
    subtitle: string;
    footnote: string;
  };
}

// ✅ Default fallback data for pages without Strapi content
export const defaultSinglePageResponse: SinglePageResponse = {
  slug: "CTA",
  cta: {
    title: "Let’s Build Something Meaningful Together",
    description:
      "Whether you’re looking for a custom web solution, need expert guidance for your digital project, or want to collaborate with an ethical agency that values impact and innovation—we’re here to help!",
    media: {
      url: ctaBigImage.src,
      alternativeText: "collaboration",
    },
    buttonCtaOneLabel: "Book a call",
    buttonCtaOneLink: "https://pakufi.zohobookings.com/#/4746283000000044080",
    buttonCtaTwoLabel: "Contact Us",
    buttonCtaTwoLink: "/contact",
    isBig: false,
  },
  newsletter: {
    buttonLabel: "Subscribe",
    title: "Stay in the Loop",
    subtitle:
      "Join our newsletter to receive updates, insights, and community news from Pakufi.",
    footnote: "We respect your privacy — unsubscribe anytime.",
  },
};

export interface PageProps {
  pages: {
    SEO: {
      seoTitle: string;
      seoDescription: string;
      seoPreview: { url: string; alternativeText: string }[];
    };
    pageTitle: string;
    pageDecsription: string;
    pageBannerTitle: string;
    internalBannerMedia: any;
    sections: any[];
  }[];
}

export interface SectionProps {
  [key: string]: any;
}
