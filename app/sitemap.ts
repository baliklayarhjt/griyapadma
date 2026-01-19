import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://griyapadmasample.netlify.app",
      lastModified: new Date(),
    },
    {
      url: "https://griyapadmasample.netlify.app/unit",
      lastModified: new Date(),
    },
  ];
}
