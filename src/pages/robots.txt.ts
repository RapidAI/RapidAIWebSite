import type { APIRoute } from "astro";

import { siteSeo } from "../data/seo";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(siteSeo.url);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}`,
    `LLM-Content: ${new URL("/llms.txt", siteUrl).toString()}`,
    `LLM-Full-Content: ${new URL("/llms-full.txt", siteUrl).toString()}`
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

