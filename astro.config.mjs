import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://rapidai.org";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName;
const siteHost = new URL(site).hostname;
const usesProjectSubpath = siteHost.endsWith(".github.io");
const base = process.env.SITE_BASE ?? (isGithubPagesBuild && usesProjectSubpath ? `/${repoName}/` : "/");

export default defineConfig({
  site,
  base,
  output: "static"
});
