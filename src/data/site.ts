import { primarySiteSections } from "./sections";

export const footerBrand = {
  name: "RapidAI",
  description: "致力于搭建 AI 模型从学术界到工程界之间的桥梁，解决应用落地最后一公里。",
  meta: "支持明亮与黑暗主题切换，公众号可微信搜一搜 RapidAI，社区交流可加入 Discord。"
};

export const navItems = primarySiteSections.map((section) => ({
  href: section.href,
  label: section.navLabel
}));

export const footerColumns = [
  {
    title: "站点导航",
    links: primarySiteSections.map((section) => ({
      href: section.href,
      label: section.footerLabel
    }))
  },
  {
    title: "社区链接",
    links: [
      { href: "https://github.com/RapidAI", label: "GitHub 组织", external: true },
      { href: "https://github.com/orgs/RapidAI/repositories", label: "全部仓库", external: true },
      { href: "https://discord.gg/q99Yjvraxx", label: "Discord 社区", external: true },
      { href: "https://www.wjx.cn/vm/exOE5FA.aspx", label: "加入申请", external: true },
      { href: "mailto:admissions@rapidai.tech", label: "联系邮箱", external: true }
    ]
  }
];
