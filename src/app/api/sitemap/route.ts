import { getPosts } from "@/sanity/sanity.query";
import { BhagwanType } from "@/type/index";

const siteUrl = process.env.SITE_URL || "https://dev-aarti.vercel.app";
const defaultPriority = 0.8;
const defaultFrequency = "weekly";

const staticSitemapEntries = [
  {
    url: `${siteUrl}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    url: `${siteUrl}/about`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/contact`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.5,
  },
  {
    url: `${siteUrl}/policies`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.3,
  },
];

export async function GET() {
  const results = await getPosts();

  const dynamicSitemapEntries = results.map((post: BhagwanType) => {
    return `
      <url>
        <loc>${siteUrl}/${post?.slug?.current}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${defaultFrequency}</changefreq>
        <priority>${defaultPriority}</priority>
      </url>`;
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticSitemapEntries
        .map(
          (entry) => `
        <url>
          <loc>${entry.url}</loc>
          <lastmod>${entry.lastModified}</lastmod>
          <changefreq>${entry.changeFrequency}</changefreq>
          <priority>${entry.priority}</priority>
        </url>`
        )
        .join("")}
      ${dynamicSitemapEntries.join("")}
    </urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
