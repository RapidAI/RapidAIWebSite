import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName;
const base = process.env.SITE_BASE ?? (isGithubPagesBuild ? `/${repoName}/` : "/");
const site = process.env.SITE_URL ?? "https://rapidai.org";

export default defineConfig({
  site,
  base,
  output: "static"
});
