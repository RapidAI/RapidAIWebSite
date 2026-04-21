import type { ActionLink, ExploreCardData, SectionHeroData, SectionIntroData } from "../types/site";
import { defineSections } from "./validators";

export interface SiteSection {
  key: "projects" | "blog" | "members" | "update" | "research" | "publications";
  href: string;
  navLabel: string;
  footerLabel: string;
  pageTitle: string;
  pageDescription: string;
  hero: SectionHeroData;
  intro?: SectionIntroData;
  explore?: Omit<ExploreCardData, "href">;
  homeSpotlight?: SectionIntroData & {
    action?: ActionLink;
  };
}

export const siteSections: SiteSection[] = defineSections([
  {
    key: "projects",
    href: "/projects",
    navLabel: "项目",
    footerLabel: "项目矩阵",
    pageTitle: "项目 | RapidAI",
    pageDescription: "RapidAI 项目矩阵与代码仓库入口。",
    hero: {
      eyebrow: "项目矩阵",
      title: "一组真正能被拿去落地的 AI 工具。",
      description:
        "RapidAI 的项目覆盖 OCR、ASR、文档理解、知识问答与数据处理。重点始终不是“功能很多”，而是“接起来就能用”。",
      panel: {
        tag: "项目方法",
        title: "从单点能力到完整工具链",
        description:
          "每个项目都强调接口清晰、部署直接和真实业务可接入，让模型能力尽快进入系统。"
      }
    },
    intro: {
      eyebrow: "项目列表",
      title: "项目矩阵",
      description:
        "这里汇集 RapidAI 当前公开维护的核心项目，覆盖 OCR、语音、文档智能、知识问答与数据处理等方向。"
    },
    explore: {
      tag: "项目",
      title: "项目矩阵",
      description: "浏览 RapidAI 当前维护的核心项目，了解能力边界、方向和链接入口。",
      meta: "独立页面"
    }
  },
  {
    key: "blog",
    href: "/blog",
    navLabel: "博客",
    footerLabel: "社区博客",
    pageTitle: "博客 | RapidAI",
    pageDescription: "RapidAI 博客与社区内容。",
    hero: {
      eyebrow: "社区博客",
      title: "记录开源协作，也记录工程落地。",
      description:
        "这里汇集 RapidAI 的公告、经验文章与社区内容，保持中文表达与清晰的信息层次。",
      panel: {
        tag: "内容方向",
        title: "公告、经验与协作内容持续更新",
        description:
          "博客记录开源协作、工程实践和阶段性总结，帮助外部读者快速理解 RapidAI 在做什么。"
      }
    },
    intro: {
      eyebrow: "近期文章",
      title: "近期文章",
      description: "这里收录社区公告、实践总结与协作记录，方便持续追踪项目和组织进展。"
    },
    explore: {
      tag: "博客",
      title: "社区博客",
      description: "记录项目更新、开源协作与工程经验，保留中文叙述与清晰的阅读入口。",
      meta: "blog_count"
    }
  },
  {
    key: "members",
    href: "/members",
    navLabel: "成员",
    footerLabel: "成员与加入",
    pageTitle: "成员 | RapidAI",
    pageDescription: "RapidAI 成员结构、加入方式与社区协作。",
    hero: {
      eyebrow: "成员与加入",
      title: "把认同工程价值的人聚在一起。",
      description:
        "RapidAI 欢迎愿意长期投入开源、工程与社区建设的伙伴。不局限于 AI 研发，也包括前端、后端、设计与运营。",
      panel: {
        tag: "社区信号",
        title: "公开成员与加入入口集中展示",
        description:
          "你可以在这里快速了解社区成员、协作方式和加入路径，判断是否适合长期参与。"
      }
    },
    explore: {
      tag: "成员",
      title: "成员与加入方式",
      description: "展示组织定位、加入要求与社区价值，让协作者快速理解适配方式。",
      meta: "社区入口"
    }
  },
  {
    key: "update",
    href: "/update",
    navLabel: "动态",
    footerLabel: "近期动态",
    pageTitle: "动态 | RapidAI",
    pageDescription: "RapidAI 近期更新与组织动态。",
    hero: {
      eyebrow: "近期动态",
      title: "组织动态、项目进展与社区节奏。",
      description:
        "这个页面用于承接 RapidAI 的近期更新，强调时间线、变化点与社区状态。",
      panel: {
        tag: "更新方式",
        title: "围绕项目与社区的公开时间线",
        description:
          "动态页聚焦组织节奏、项目变化和社区动作，方便快速了解最近的重要进展。"
      }
    },
    intro: {
      eyebrow: "时间线",
      title: "近期更新",
      description: "按时间线查看组织更新、项目进展和社区动作，快速了解 RapidAI 最近在推进什么。"
    },
    explore: {
      tag: "动态",
      title: "近期动态",
      description: "查看组织更新、项目进展和社区节奏，快速了解 RapidAI 最近在推进什么。",
      meta: "时间线页面"
    }
  },
  {
    key: "research",
    href: "/research",
    navLabel: "研究院",
    footerLabel: "研究院与论文",
    pageTitle: "研究院 | RapidAI",
    pageDescription:
      "RapidAI 研究院是 RapidAI 开源组织下属的学术研究机构，围绕论文指导、研究协作与工程转化持续建设。",
    hero: {
      eyebrow: "研究院",
      title: "把研究、工程与长期协作放到同一条线上。",
      description:
        "RapidAI 研究院是 RapidAI 开源组织下属的学术研究机构，承接研究训练、论文合作、工程转化与长期学术交流。",
      panel: {
        tag: "研究定位",
        title: "学术研究与工程转化并行推进",
        description:
          "研究院关注论文合作、人才培养与成果转化，让研究工作和工程实践形成长期联动。"
      }
    },
    explore: {
      tag: "研究院",
      title: "研究院与论文",
      description: "查看研究院概览、访问学生招募、团队信息，以及研究成果与论文列表。",
      meta: "独立页面"
    },
    homeSpotlight: {
      eyebrow: "研究院",
      title: "研究院负责承接学术协作与论文训练。",
      description:
        "如果项目页强调工程落地，那么研究院页面承担的是研究训练、论文合作、访问学生招募、长期学术交流与成果展示。",
      action: {
        label: "查看研究院",
        href: "/research"
      }
    }
  },
  {
    key: "publications",
    href: "/publications",
    navLabel: "论文",
    footerLabel: "论文与成果",
    pageTitle: "论文与成果 | RapidAI",
    pageDescription: "RapidAI 研究成果、论文、预印本与技术报告归档页面。",
    hero: {
      eyebrow: "论文与成果",
      title: "把研究成果沉淀成可持续维护的论文归档。",
      description:
        "这里集中整理 RapidAI 的论文、预印本与技术报告，方便按顺序持续维护，也便于后续扩展筛选、归档和详情页。"
    },
    intro: {
      eyebrow: "论文归档",
      title: "按内容顺序维护的论文列表",
      description:
        "论文条目基于内容文件维护，展示顺序以文件名顺序为准，适合长期追加、整理和分组展示。"
    }
  }
]);

export const sectionsByKey = Object.fromEntries(
  siteSections.map((section) => [section.key, section])
) as Record<SiteSection["key"], SiteSection>;

export const primarySiteSections = siteSections.filter((section) => section.key !== "publications");
