import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

import { aiSummarySections, siteSeo } from "../data/seo";
import { members } from "../data/members";
import { projectCards } from "../data/projects";
import { siteSections } from "../data/sections";
import { orderContentEntriesByFile } from "../utils/content-order";

function normalizeBody(value: string | undefined) {
  return (value ?? "")
    .replace(/^---[\s\S]*?---/, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL(siteSeo.url);
  const [blogPosts, updates, publications] = await Promise.all([
    getCollection("blog"),
    getCollection("updates"),
    getCollection("publications")
  ]);
  const orderedBlogPosts = orderContentEntriesByFile(blogPosts);
  const orderedPublications = orderContentEntriesByFile(publications);
  const body = [
    "# RapidAI 完整 AI 上下文",
    "",
    `站点: ${new URL("/", siteUrl).toString()}`,
    `语言: ${siteSeo.language}`,
    `简介: ${siteSeo.description}`,
    `关键词: ${siteSeo.keywords.join(", ")}`,
    "",
    "## 站点栏目",
    "",
    ...siteSections.map(
      (section) => `- ${section.navLabel}: ${section.pageDescription} ${new URL(section.href, siteUrl).toString()}`
    ),
    "",
    "## 核心事实",
    "",
    ...aiSummarySections.map((section) => [`### ${section.title}`, "", section.body, ""].join("\n")),
    "## 项目矩阵",
    "",
    ...projectCards.map((project) =>
      [
        `### ${project.name}`,
        "",
        `- 分类: ${project.category}`,
        `- 仓库: ${project.repo}`,
        `- 链接: ${project.href}`,
        `- 摘要: ${project.summary}`,
        ""
      ].join("\n")
    ),
    "## 成员",
    "",
    ...members.map((member) =>
      [
        `### ${member.name}`,
        "",
        `- 角色: ${member.role}`,
        member.github ? `- GitHub: https://github.com/${member.github}` : "",
        member.homepage ? `- 主页: ${member.homepage}` : "",
        `- 简介: ${member.detail}`,
        ""
      ]
        .filter(Boolean)
        .join("\n")
    ),
    "## 博客文章",
    "",
    ...orderedBlogPosts.map((post) =>
      [
        `### ${post.data.title}`,
        "",
        `- 链接: ${new URL(`/blog/${post.id}/`, siteUrl).toString()}`,
        `- 日期: ${post.data.date.toISOString().slice(0, 10)}`,
        `- 作者: ${post.data.author}`,
        `- 摘要: ${post.data.description}`,
        normalizeBody(post.body),
        ""
      ].join("\n")
    ),
    "## 近期动态",
    "",
    ...updates.map((item) => `- ${item.data.date} ${item.data.title}: ${item.data.description}`),
    "",
    "## 论文与成果",
    "",
    ...orderedPublications.map((publication) =>
      [
        `### ${publication.data.title}`,
        "",
        `- 链接: ${new URL(`/publications/${publication.id}/`, siteUrl).toString()}`,
        `- 作者: ${publication.data.authors}`,
        `- 刊物: ${publication.data.venue}`,
        `- 年份: ${publication.data.year}`,
        `- 类型: ${publication.data.type}`,
        `- 摘要: ${publication.data.summary}`,
        ...publication.data.links.map((link) => `- ${link.label}: ${link.href}`),
        normalizeBody(publication.body),
        ""
      ].join("\n")
    )
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8"
    }
  });
};

