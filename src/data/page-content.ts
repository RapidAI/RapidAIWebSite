import type {
  ContentCardData,
  DetailListCardData,
  ImageActionCardData,
  RecruitmentInfo,
  SectionIntroData,
  SignalCardData
} from "../types/site";
import {
  defineBlogPageContent,
  defineMembersPageContent,
  definePublicationsPageContent,
  defineResearchPageContent,
  defineUpdatesPageContent
} from "./validators";

export const blogPageContent = defineBlogPageContent({
  latest: {
    eyebrow: "近期文章",
    title: "近期文章",
    description: "这里收录社区公告、工程总结与协作记录，保持中文表达和清晰的信息层次。"
  },
  paged: {
    eyebrow: "近期文章",
    title: "近期文章",
    description: "文章列表支持分页浏览，方便按时间查看 RapidAI 的内容沉淀与阶段总结。"
  }
} satisfies {
  latest: SectionIntroData;
  paged: SectionIntroData;
});

export const membersPageContent = defineMembersPageContent({
  directory: {
    eyebrow: "公开成员",
    title: "社区成员",
    description:
      "这里展示 RapidAI 当前公开成员，并按社区职责分组，方便快速了解协作结构。"
  },
  join: {
    eyebrow: "加入方式",
    title: "加入我们，需要什么能力？",
    description: "我们欢迎认同工程价值、愿意长期协作的伙伴加入，一起把开源项目做深做实。"
  },
  joinCards: [
    {
      tag: "要求",
      title: "加入要求",
      description: "喜欢开源文化和社区协作，并愿意为现有仓库提交实际功能或改进。"
    },
    {
      tag: "价值",
      title: "你会获得",
      description: "项目背书、志同道合的伙伴、技术碰撞、职业发展建议与更多成长机会。"
    },
    {
      tag: "行动",
      title: "申请方式",
      description: "填写现有申请表，或通过社区渠道联系 RapidAI 了解参与方式。",
      meta: "问卷链接",
      href: "https://www.wjx.cn/vm/exOE5FA.aspx",
      actionLabel: "立即申请"
    },
    {
      tag: "公众号",
      title: "微信公众号",
      description: "打开微信搜一搜，搜索 RapidAI，或直接扫码关注公众号，持续获取组织动态与社区信息。",
      image: "https://raw.githubusercontent.com/RapidAI/.github/main/assets/RapidAI_poster.png",
      imageAlt: "RapidAI 公众号二维码"
    },
    {
      tag: "Discord",
      title: "Discord 社区",
      description: "加入 Discord 频道，和社区成员交流项目、研究、协作与开源话题。",
      meta: "邀请链接",
      href: "https://discord.gg/q99Yjvraxx",
      actionLabel: "加入社区"
    }
  ]
} satisfies {
  directory: SectionIntroData;
  join: SectionIntroData;
  joinCards: ImageActionCardData[];
});

export const updatesPageContent = defineUpdatesPageContent({
  timeline: {
    eyebrow: "时间线",
    title: "近期更新",
    description: "围绕组织节奏、项目推进和社区动作，持续记录 RapidAI 的公开更新。"
  },
  paged: {
    eyebrow: "时间线",
    title: "近期更新",
    description: "更新列表支持分页浏览，方便按阶段查看 RapidAI 的组织动态与项目推进。"
  }
} satisfies {
  timeline: SectionIntroData;
  paged: SectionIntroData;
});

export const researchPageContent = defineResearchPageContent({
  overview: {
    eyebrow: "概览",
    title: "研究院是组织内的学术延伸",
    description:
      "它不是独立于工程之外的展示页，而是围绕论文指导、算力资源、长期学术身份与工程转化能力搭建的研究协作模块。"
  },
  structure: {
    eyebrow: "组织结构",
    title: "管理团队与学术委员会",
    description:
      "研究院围绕管理团队、学术委员会与协作规则展开，保证研究工作具备连续性和组织支撑。"
  },
  recruitment: {
    eyebrow: "访问学生招募",
    title: "长期招募远程访问学生。",
    description:
      "主要面向大学本科二年级下学期及以上学生，优秀学生可适度放宽。研究院可提供论文指导、计算资源，并协助完成论文发表与研究积累。",
    email: "admissions@rapidai.tech",
    primaryAction: {
      label: "联系招生邮箱",
      href: "mailto:admissions@rapidai.tech"
    }
  },
  overviewCards: [
    {
      tag: "定位",
      title: "组织下属学术机构",
      description: "用于承接研究训练、论文协作、学术交流与工程转化。"
    },
    {
      tag: "支持",
      title: "论文指导与算力资源",
      description: "为访问学生提供导师指导、计算资源和持续的研究支持。"
    },
    {
      tag: "连接",
      title: "研究和工程打通",
      description: "研究成果可以回流到 RapidAI 的工程项目中，形成从论文到可部署工具链的衔接。"
    }
  ],
  highlights: [
    {
      tag: "最新消息",
      description: "录用论文与研究成果会汇总到论文列表，作为研究院的持续展示入口。"
    },
    {
      tag: "学术身份",
      description: "研究成员可获得研究院署名、长期邮箱等支持，便于持续参与学术协作。"
    },
    {
      tag: "基础资源",
      description: "研究院长期维护算力与存储资源，用于支撑研究训练和工程验证。",
      accent: true
    }
  ],
  leadership: [
    "荣誉院长：由外部学术顾问担任",
    "执行院长：马勇（znsoft）",
    "首席科学家：持续邀请中",
    "工程总监：SWHL"
  ],
  committeeRules: [
    "相关学术机构学员可成为见习研究员。",
    "卓越工程师计划硕博研究生可成为见习研究员。",
    "由研究院导师指导的合作高校研究生可成为见习研究员。",
    "依据论文成果与毕业阶段逐步晋升研究员等级。"
  ],
  structureCards: [
    {
      tag: "管理团队",
      title: "当前公开信息",
      items: [
        "荣誉院长：由外部学术顾问担任",
        "执行院长：马勇（znsoft）",
        "首席科学家：持续邀请中",
        "工程总监：SWHL"
      ]
    },
    {
      tag: "学术委员会",
      title: "成员规则",
      items: [
        "相关学术机构学员可成为见习研究员。",
        "卓越工程师计划硕博研究生可成为见习研究员。",
        "由研究院导师指导的合作高校研究生可成为见习研究员。",
        "依据论文成果与毕业阶段逐步晋升研究员等级。"
      ]
    },
    {
      tag: "成果入口",
      title: "研究成果持续沉淀到论文卡片",
      description:
        "研究院页面同时承担组织介绍与成果展示，论文、预印本与技术报告会持续补充到成果区。",
      meta: "1 条论文记录",
      href: "#research-publications",
      actionLabel: "查看论文卡片"
    }
  ]
} satisfies {
  overview: SectionIntroData;
  structure: SectionIntroData;
  recruitment: RecruitmentInfo;
  overviewCards: ContentCardData[];
  highlights: SignalCardData[];
  leadership: string[];
  committeeRules: string[];
  structureCards: DetailListCardData[];
});

export const publicationsPageContent = definePublicationsPageContent({
  listing: {
    eyebrow: "论文与成果",
    title: "研究成果与论文卡片",
    description:
      "这里集中展示研究院的论文、预印本、技术报告与代表性研究成果，方便按条目持续归档。"
  },
  openResearchActionLabel: "查看研究院页面"
} satisfies {
  listing: SectionIntroData;
  openResearchActionLabel: string;
});
