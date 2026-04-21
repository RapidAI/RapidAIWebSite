import { defineMembers } from "./validators";

export const memberGroups = [
  {
    key: "leaders",
    title: "发起者与负责人",
    description: "承担组织方向、项目体系与长期协作节奏的核心角色。",
    roles: ["Creator"]
  },
  {
    key: "members",
    title: "社区成员",
    description: "参与项目协作、工程实践与社区建设的公开成员。",
    roles: ["Member"]
  }
];

export const memberRoleLabels: Record<string, string> = {
  Creator: "发起者",
  Member: "社区成员"
};

export const members = [
  {
    name: "Daniel",
    github: "znsoftm",
    role: "Creator",
    detail: "RapidAI 发起者，负责组织方向、项目体系与长期协作推进。"
  },
  {
    name: "benjamin wan",
    github: "benjaminwan",
    role: "Member",
    detail: "RapidAI 公开成员，参与 OCR 与相关工程方向的社区协作。"
  },
  {
    name: "Joker1212",
    github: "Joker1212",
    role: "Member",
    detail: "RapidAI 公开成员，参与项目协作与工程实践。"
  },
  {
    name: "Lovemefan",
    github: "lovemefan",
    role: "Member",
    detail: "RapidAI 公开成员，参与开源协作与社区建设。"
  },
  {
    name: "SWHL",
    github: "SWHL",
    role: "Member",
    detail: "RapidAI 公开成员，长期围绕 AI 工程化、开源协作与项目体系建设持续投入。"
  },
  {
    name: "hzkitty",
    github: "hzkitty",
    role: "Member",
    detail: "RapidAI 公开成员，参与 Java 生态下的 OCR 与表格识别工具建设。"
  },
  {
    name: "jtss2018",
    github: "jtss2018",
    role: "Member",
    detail: "RapidAI 公开成员，参与开源协作与社区建设。"
  },
  {
    name: "wwwwwwwwwww",
    github: "qixing-ai",
    role: "Member",
    detail: "RapidAI 公开成员，参与开源协作与社区建设。"
  },
  {
    name: "Alex Zhao",
    github: "scottfly189",
    role: "Member",
    detail: "RapidAI 公开成员，参与开源协作与社区建设。",
    joinedAt: "2026-04-17"
  }
];

defineMembers(memberGroups, memberRoleLabels, members);
