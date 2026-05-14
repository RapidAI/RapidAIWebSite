import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

import { seoRoutes, siteSeo } from "../data/seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL(siteSeo.url);
  const [blogPosts, publications] = await Promise.all([
    getCollection("blog"),
    getCollection("publications")
  ]);
  const today = new Date().toISOString().slice(0, 10);
  const routes = [
    ...seoRoutes.map((route) => ({
      loc: new URL(route.path, siteUrl).toString(),
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: today
    })),
    ...blogPosts.map((post) => ({
      loc: new URL(`/blog/${post.id}/`, siteUrl).toString(),
      changefreq: "monthly",
      priority: "0.7",
      lastmod: post.data.date.toISOString().slice(0, 10)
    })),
    ...publications.map((publication) => ({
      loc: new URL(`/publications/${publication.id}/`, siteUrl).toString(),
      changefreq: "monthly",
      priority: "0.7",
      lastmod: today
    }))
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (route) => `  <url>
    <loc>${escapeXml(route.loc)}</loc>
    <lastmod>${escapeXml(route.lastmod)}</lastmod>
    <changefreq>${escapeXml(route.changefreq)}</changefreq>
    <priority>${escapeXml(route.priority)}</priority>
  </url>`
    )
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
