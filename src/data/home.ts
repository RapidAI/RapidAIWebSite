import type { ExploreCardData, HomeHeroData, SectionIntroData } from "../types/site";
import { sectionsByKey } from "./sections";

export const homeHero: HomeHeroData = {
  eyebrow: "RapidAI",
  title: "把模型能力，交付成真实可部署的产品。",
  description:
    "RapidAI 是一个聚焦 AI 工程化落地的开源组织。我们围绕视觉、语音、文档智能与知识问答，持续打磨简单、稳定、开箱即用的解决方案。",
  primaryAction: {
    label: "查看项目",
    href: sectionsByKey.projects.href
  },
  secondaryAction: {
    label: "加入社区",
    href: sectionsByKey.members.href
  },
  badges: ["开源组织", "工程导向", "真实落地"],
  panels: [
    {
      tag: "开源",
      title: "AI 工程化"
    },
    {
      tag: "桥梁",
      title: "研究到落地",
      accent: true
    },
    {
      tag: "交付",
      title: "开箱即用、跨平台、面向真实业务",
      wide: true
    }
  ],
  panelFoot: "围绕 OCR、ASR、文档智能与知识问答持续建设可复用的工程资产。"
};

export const homeSections: {
  positioning: SectionIntroData;
  signal: SectionIntroData;
  research: SectionIntroData & { action?: { label: string; href: string } };
  explore: SectionIntroData;
} = {
  positioning: {
    eyebrow: "组织定位",
    title: "做最后一公里，而不是停在演示。",
    description:
      "我们希望搭建 AI 模型从学术界到工程界之间的桥梁。重点不是重复训练模型，而是让模型在真实系统里被部署、被维护、被持续使用。"
  },
  signal: {
    eyebrow: "为什么是 RapidAI",
    title: "不是再造一个模型，而是把能力接进系统。",
    description:
      "RapidAI 关注推理、部署、接口封装、跨平台兼容和持续维护。我们希望每一个项目都能从实验结果变成可以复用的工程资产。"
  },
  research: sectionsByKey.research.homeSpotlight!,
  explore: {
    eyebrow: "站点结构",
    title: "五个栏目，分别承接研究、项目、内容与社区。",
    description:
      "每个栏目都拥有独立页面，用于展示 RapidAI 的项目矩阵、博客文章、成员协作与近期动态。",
    className: "section-intro-wide"
  }
};

export const homeStats = [
  {
    label: "方向",
    value: "CV",
    description: "计算机视觉相关能力，包括 OCR、文档理解与结构化解析。"
  },
  {
    label: "方向",
    value: "NLP",
    description: "本地知识问答、文本处理与模型应用集成。"
  },
  {
    label: "方向",
    value: "ASR",
    description: "聚焦语音识别与多平台部署能力的实际落地。"
  },
  {
    label: "方法",
    value: "交付",
    description: "追求简洁有效、开箱即用、面向业务而非只面向演示。"
  }
];

export const homeSignals = [
  {
    tag: "工程优先",
    description: "优先考虑稳定性、可接入性和维护成本，而不是只看单次效果展示。"
  },
  {
    tag: "开箱即用",
    description: "强调清晰接口、低接入门槛与跨环境部署，让项目具备真正的落地效率。"
  },
  {
    tag: "长期迭代",
    description: "围绕真实业务场景持续演进，保持项目不是一次性演示，而是能长期被使用。",
    accent: true
  }
];

export const homeExploreCards: ExploreCardData[] = [
  sectionsByKey.projects,
  sectionsByKey.blog,
  sectionsByKey.members,
  sectionsByKey.update,
  sectionsByKey.research
].map((section) => ({
  ...section.explore!,
  href: section.href
}));
