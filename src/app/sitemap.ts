import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-kallarari.vercel.app/"!,
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'aboutMe',
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'bestBugs',
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'robots.txt',
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'projects',
      lastModified: new Date(),
    },
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'contact',
      lastModified: new Date(),
    }, 
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'copyright/privacy',
      lastModified: new Date(),
    }, 
    {
      url: "https://portfolio-kallarari.vercel.app/" + 'copyright/terms',
      lastModified: new Date(),
    }
  ];
}