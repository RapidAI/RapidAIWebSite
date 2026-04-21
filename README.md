# RapidAI Website

RapidAI 官网静态站点，基于 Astro 构建。

这个仓库现在的维护思路是：

- 栏目级信息统一放在 `src/data/sections.ts`
- 各页面内部内容统一放在 `src/data/page-content.ts`
- 项目、成员、论文等结构化条目分别维护在各自的数据文件
- 博客和动态正文使用 `src/content/` 下的 Markdown
- 页面文件 `src/pages/` 主要负责组装，不负责堆积大段静态数据

## 技术栈

- Astro
- TypeScript
- Markdown Content Collections
- GitHub Actions

## 本地开发

安装依赖：

```bash
npm install --ignore-scripts
```

启动开发服务器：

```bash
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:4321/
```

生产构建：

```bash
npm run build
```

构建产物输出到 `dist/`。

说明：

- 仓库已忽略 `node_modules/`、`dist/`、`.astro/` 等本地输出目录
- 核心数据和页面内容都带构建期校验
- 站点支持 `light`、`dark`、`system` 三种主题模式，浏览器会记住上次选择

## 目录结构

```text
src/
  components/      复用组件
  content/         博客与动态 Markdown
  data/            栏目配置与结构化内容
  layouts/         页面布局
  pages/           路由页面
  styles/          样式入口与分模块样式
  types/           共享类型
public/
  images/          静态资源
.github/workflows/
  ci.yml           GitHub Pages 自动部署
```

## 数据分层

### 1. 栏目级配置

文件：

- `src/data/sections.ts`

负责内容：

- 导航名称
- 页脚名称
- 页面 title / description
- 栏目 hero 文案
- 首页栏目入口卡片

适合修改的场景：

- 改一个栏目名，希望导航、页脚、首页入口、页面标题一起变
- 调整栏目页 hero 文案
- 调整栏目链接地址

### 2. 页面内部内容

文件：

- `src/data/page-content.ts`

负责内容：

- 博客列表说明
- 成员页加入方式卡片
- 动态页时间线说明
- 研究院页概览、招募、亮点、结构说明
- 论文区说明与占位条目

适合修改的场景：

- 修改某个页面内部的区块标题或描述
- 新增研究院说明卡片
- 调整成员页加入卡片文案

### 3. 业务条目数据

文件：

- `src/data/projects.ts`
- `src/data/members.ts`
- `src/data/publications.ts`

负责内容：

- 项目卡片
- 成员名单
- 页面级结构化配置

## 常见维护入口

### 首页

- 页面：`src/pages/index.astro`
- 数据：`src/data/home.ts`

首页项目预览和栏目入口已经接入统一配置，不建议再在页面里手写重复文案。

### 项目页

- 页面：`src/pages/projects.astro`
- 数据：`src/data/projects.ts`

项目维护重点：

- `projectCards`：项目条目
- `projectsShowcase`：首页和项目页显示数量

说明：

- 首页和 `/projects` 会共用同一份项目数据
- 项目展示顺序以 `src/data/projects.ts` 中的声明顺序为准
- GitHub API 只负责补充星标数和仓库链接，不再重排项目

### 成员页

- 页面：`src/pages/members.astro`
- 数据：
    - `src/data/members.ts`
    - `src/data/community.ts`
    - `src/data/page-content.ts`

### 研究院与论文

- 页面：
    - `src/pages/research.astro`
    - `src/pages/publications.astro`
- 数据：
    - `src/data/research.ts`
    - `src/data/publications.ts`
    - `src/data/page-content.ts`
- 内容：
    - `src/content/publications/`

说明：

- `/publications` 现在是论文归档页
- `/research` 会展示论文预览，并链接到完整论文页
- 每篇论文都支持独立详情页：`/publications/[slug]`
- 论文条目按内容文件名顺序展示

### 博客

- 页面：
    - `src/pages/blog/index.astro`
    - `src/pages/blog/[slug].astro`
    - `src/pages/blog/page/[page].astro`
- 内容：
    - `src/content/blog/`

说明：

- 博客列表按照内容文件名顺序展示，不再按日期自动重排
- 如果需要调整展示顺序，直接调整文件命名顺序即可

### 动态

- 页面：`src/pages/update.astro`
- 内容：
    - `src/content/updates/`

说明：

- 动态时间线按照内容文件名顺序展示，保持和内容文件管理顺序一致

## 复用组件

常见展示结构已经做了复用，优先改组件，不要在页面里重新写一套：

- `src/components/Hero.astro`
- `src/components/PageHero.astro`
- `src/components/SectionIntro.astro`
- `src/components/ProjectsShowcaseSection.astro`
- `src/components/ContentCardGrid.astro`
- `src/components/SignalCardGrid.astro`
- `src/components/DetailListCardGrid.astro`
- `src/components/PublicationCards.astro`

## 样式结构

样式入口仍然是：

- `src/styles/global.css`

但现在它只负责聚合，实际样式按职责拆分到：

- `src/styles/foundation.css`
- `src/styles/hero.css`
- `src/styles/cards.css`
- `src/styles/pages.css`
- `src/styles/responsive.css`

主题样式补充在：

- `src/styles/theme.css`

建议：

- 改颜色变量、基础布局、导航外壳，优先看 `foundation.css`
- 改首页 Hero、内页 Hero、按钮、SectionIntro，优先看 `hero.css`
- 改卡片、成员卡、项目卡、博客卡、分页，优先看 `cards.css`
- 改研究院、论文、页脚、Markdown 正文，优先看 `pages.css`
- 改断点和移动端样式，优先看 `responsive.css`

## 常见操作

### 新增一个项目

编辑 `src/data/projects.ts`，追加一项：

```ts
{
  name: "New Project",
  stars: "0",
  repo: "RapidAI/NewProject",
  category: "工具",
  summary: "一句话说明项目做什么、适合什么场景、强调什么工程价值。",
  href: "https://github.com/RapidAI/NewProject"
}
```

说明：

- 项目顺序就是文件里的书写顺序
- 首页项目预览会直接取前几项，因此调整展示优先级时直接移动条目位置

### 新增一位成员

编辑 `src/data/members.ts`。

### 新增一篇论文

在 `src/content/publications/` 下新增 Markdown 文件，例如：

```md
---
title: "Your Paper Title"
authors: "Author A, Author B"
venue: "Conference / Journal / arXiv"
year: "2026"
type: "Conference"
summary: "用 1 到 2 句话说明论文解决了什么问题。"
links:
  - label: "Paper"
    href: "https://example.com/paper"
  - label: "Code"
    href: "https://github.com/example/repo"
---
```

说明：

- 论文展示顺序以文件名顺序为准，建议用 `01-...md`、`02-...md` 这类命名
- 目前论文列表页读取 frontmatter
- 如果需要单篇详情页展示更多内容，可以在 Markdown 正文里继续补充摘要、方法、结果等内容

### 新增一篇博客

在 `src/content/blog/` 下新增 Markdown 文件，参考现有 frontmatter。

### 新增一条动态

在 `src/content/updates/` 下新增 Markdown 文件。

### 调整导航、页脚、栏目标题

优先改：

- `src/data/sections.ts`

### 调整页面区块文案

优先改：

- `src/data/page-content.ts`

### 调整页面结构顺序

再改：

- `src/pages/*.astro`

## 当前维护原则

- 同一份文案不要在首页、栏目页、页脚各写一遍
- 数据优先放在 `src/data/` 或 `src/content/`
- 页面负责组装，组件负责复用
- 样式统一放在 `src/styles/global.css`
- 新增重复 UI 时，优先抽组件，不要复制粘贴页面结构
- 核心数据现在带有构建期校验，重复 key、空字段、排序冲突会在 `npm run build` 时直接报错
- 涉及预览分享的页面默认带 SEO / OG 元信息，跳转页可以显式设置 `noindex`
