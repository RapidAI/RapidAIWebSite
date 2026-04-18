export interface PublicationLink {
  label: string;
  href: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  summary: string;
  links: PublicationLink[];
}

export const publicationSection = {
  eyebrow: "论文与成果",
  title: "研究院论文卡片",
  description:
    "这里统一维护研究院的论文、预印本、技术报告和代表性研究成果。后续新增条目时，只需要更新 src/data/publications.ts。"
};

export const publications: PublicationItem[] = [
  {
    title: "RapidAI 研究院论文列表待补充",
    authors: "RapidAI Research Institute",
    venue: "RapidAI Research",
    year: "2026",
    type: "占位条目",
    summary:
      "当前仓库还没有正式的论文数据源，这里先把论文卡片结构搭好。后续新增论文时，直接在 src/data/publications.ts 中追加一个对象即可。",
    links: [
      {
        label: "研究院总览",
        href: "https://rapidai.tech/research/overview/"
      }
    ]
  }
];
