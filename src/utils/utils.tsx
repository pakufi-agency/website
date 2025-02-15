export const getStrapiImageUrl = (url: string) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:1337" // Strapi local URL
        : "https://your-strapi-production.com"; // Strapi production URL
  
    return url.startsWith("http") ? url : `${baseUrl}${url}`;
  };