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
  slug: "404",
  cta: {
    title: "Page Not Found",
    description:
      "It seems you’ve reached a page that doesn’t exist. Let’s get you back to something meaningful.",
    media: {
      url: "/images/404-illustration.png", // optional local image
      alternativeText: "404 illustration",
    },
    buttonCtaOneLabel: "Go Home",
    buttonCtaOneLink: "/",
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
