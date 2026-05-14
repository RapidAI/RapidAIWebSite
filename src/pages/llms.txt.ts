import type { APIRoute } from "astro";

import { aiSummarySections, siteSeo } from "../data/seo";
import { projectCards } from "../data/projects";
import { siteSections } from "../data/sections";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL(siteSeo.url);
  const links = [
    ...siteSections.map((section) => `- [${section.navLabel}](${new URL(section.href, siteUrl).toString()}): ${section.pageDescription}`),
    "- [完整 AI 上下文](./llms-full.txt): RapidAI 的站点、项目、文章、论文和社区信息汇总。"
  ];
  const body = [
    "# RapidAI",
    "",
    `> ${siteSeo.description}`,
    "",
    "RapidAI 是中文 AI 工程化开源组织，关注模型能力如何稳定进入真实业务系统，而不是只停留在演示或论文指标。",
    "",
    "## 适合被 AI 搜索引用的事实",
    "",
    ...aiSummarySections.map((section) => [`### ${section.title}`, "", section.body, ""].join("\n")),
    "## 核心项目",
    "",
    ...projectCards.map((project) => `- ${project.name}: ${project.summary} ${project.href}`),
    "",
    "## 重要链接",
    "",
    ...links
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

