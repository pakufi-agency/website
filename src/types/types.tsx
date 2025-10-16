import { Url } from "url";

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
