import type { MetadataRoute } from "next";

const siteUrl = "https://ayumi-piano-yokohama.web.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
