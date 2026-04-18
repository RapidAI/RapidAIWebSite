# RapidAI Website v2

RapidAI 官网静态站点，基于 Astro 构建。

## 本地开发

安装依赖：

```bash
npm install --ignore-scripts
```

启动开发服务器：

```bash
node ./node_modules/astro/bin/astro.mjs dev --host 127.0.0.1 --port 4321
```

本地访问地址：

```text
http://127.0.0.1:4321/
```

构建：

```bash
node ./node_modules/astro/bin/astro.mjs build
```

构建产物输出到 `dist/`。

## 维护入口总览

站点的可维护内容主要集中在：

- `src/data/`：结构化数据，适合维护首页、项目、成员、研究院、论文等
- `src/content/`：Markdown 内容，适合维护博客和动态
- `src/pages/`：页面入口，适合调整页面结构和区块顺序
- `src/components/`：可复用组件，适合调整卡片样式、列表样式、分页等
- `src/styles/global.css`：全局样式和响应式布局
- `src/layouts/MainLayout.astro`：全站头部、页脚、移动端导航

## 每部分改哪里

### 1. 全站导航、页脚、站点基础信息

- 数据位置：`src/data/site.ts`
- 布局位置：`src/layouts/MainLayout.astro`
- 适合修改：
  - 顶部导航
  - 页脚栏目
  - 页脚品牌说明
  - 移动端汉堡菜单

### 2. 首页

- 页面入口：`src/pages/index.astro`
- 数据位置：`src/data/home.ts`
- 相关组件：
  - `src/components/Hero.astro`
  - `src/components/SectionIntro.astro`
  - `src/components/DynamicProjectsGrid.astro`
- 适合修改：
  - 首页 Hero 文案
  - 首页按钮
  - 首页统计卡片
  - 首页信号区块
  - 首页各栏目入口卡片

### 3. 项目页

- 页面入口：`src/pages/projects.astro`
- 数据位置：`src/data/projects.ts`
- 相关组件：
  - `src/components/DynamicProjectsGrid.astro`
  - `src/components/ProjectCard.astro`
  - `src/components/GitHubStars.astro`
- 适合修改：
  - 项目名称
  - 项目分类
  - 项目简介
  - 项目链接
  - Star 兜底数字

说明：

- 后续新增项目，优先改 `src/data/projects.ts`
- `GitHubStars.astro` 只负责显示卡片右上角的 Star 文案

### 4. 成员页

- 页面入口：`src/pages/members.astro`
- 数据位置：
  - `src/data/members.ts`
  - `src/data/community.ts`
- 相关组件：
  - `src/components/DynamicMembersGrid.astro`
- 适合修改：
  - 成员姓名
  - GitHub 用户名
  - 角色标签
  - 成员简介
  - 社区加入说明

### 5. 研究院页

- 页面入口：`src/pages/research.astro`
- 数据位置：
  - `src/data/research.ts`
  - `src/data/publications.ts`
- 相关组件：
  - `src/components/PublicationCards.astro`
  - `src/components/SectionIntro.astro`
- 适合修改：
  - 研究院首屏文案
  - 招募说明
  - 研究院概述卡片
  - 高亮信息卡片
  - 管理团队
  - 学术委员会规则
  - 论文卡片区

维护建议：

- 研究院介绍类内容改 `src/data/research.ts`
- 论文、预印本、技术报告统一改 `src/data/publications.ts`
- 不要直接在 `src/pages/research.astro` 里手写论文条目

### 6. 论文卡片

- 数据位置：`src/data/publications.ts`
- 渲染组件：`src/components/PublicationCards.astro`
- 页面挂载位置：`src/pages/research.astro`
- 每条论文建议维护字段：
  - `title`
  - `authors`
  - `venue`
  - `year`
  - `type`
  - `summary`
  - `links`

后续新增论文时，直接在 `src/data/publications.ts` 追加一项即可。

### 7. 博客

- 内容目录：`src/content/blog`
- 页面入口：
  - `src/pages/blog/index.astro`
  - `src/pages/blog/[slug].astro`
  - `src/pages/blog/page/[page].astro`
- 相关组件：
  - `src/components/BlogList.astro`
  - `src/components/Pagination.astro`
- 适合修改：
  - 博客标题
  - 摘要
  - 日期
  - 作者
  - 标签
  - 封面
  - 正文

### 8. 近期动态

- 内容目录：`src/content/updates`
- 页面入口：`src/pages/update.astro`
- 适合修改：
  - 动态标题
  - 简介
  - 日期
  - 标签

### 9. Publications 页面

- 页面入口：`src/pages/publications.astro`
- 当前作用：
  - 作为跳转页
  - 自动跳转到 `research#research-publications`

如果以后仍然保持“研究院页面统一展示论文”，这里通常不需要改。

### 10. 全局样式和移动端适配

- 样式位置：`src/styles/global.css`
- 适合修改：
  - 页面间距
  - 卡片样式
  - 响应式断点
  - 移动端导航展开样式
  - 论文卡片区样式

## 常见操作

### 新增一个项目

编辑 `src/data/projects.ts`，按现有对象格式追加一项。

### 新增一位成员

编辑 `src/data/members.ts`，按现有对象格式追加一项。

### 新增一篇论文

编辑 `src/data/publications.ts`，按现有对象格式追加一项。

示例：

```ts
{
  title: "Your Paper Title",
  authors: "Author A, Author B, Author C",
  venue: "Conference / Journal / arXiv",
  year: "2026",
  type: "Conference",
  summary: "用 1 到 2 句话概括论文做了什么、解决了什么问题。",
  links: [
    {
      label: "Paper",
      href: "https://example.com/paper"
    },
    {
      label: "Code",
      href: "https://github.com/example/repo"
    }
  ]
}
```

字段建议：

- `title`：论文标题
- `authors`：作者列表，直接写成字符串
- `venue`：会议、期刊、arXiv 或研究院内部报告名
- `year`：年份，统一用字符串
- `type`：如 `Conference`、`Journal`、`Preprint`、`Tech Report`
- `summary`：一小段摘要式说明
- `links`：可放 `Paper`、`Code`、`Project`、`Poster` 等链接

### 新增一篇博客

在 `src/content/blog` 下新增一个 `.md` 文件，参考现有文章的 frontmatter。

### 新增一条动态

在 `src/content/updates` 下新增一个 `.md` 文件。

### 调整研究院页面区块顺序

编辑 `src/pages/research.astro`。

### 调整首页区块顺序

编辑 `src/pages/index.astro`。

### 调整全站头部或页脚

编辑：

- `src/layouts/MainLayout.astro`
- `src/data/site.ts`

## 目录说明

```text
src/
  components/      复用组件
  content/         博客与动态 Markdown 内容
  data/            结构化维护数据
  layouts/         页面布局
  pages/           路由页面
  styles/          全局样式
public/
  images/          静态图片资源
.github/workflows/
  ci.yml           GitHub Pages 自动部署
```

## 当前建议的维护原则

- 文案和条目优先放到 `src/data/` 或 `src/content/`
- 页面文件 `src/pages/` 主要负责组装，不负责堆大量数据
- 重复使用的展示结构优先抽到 `src/components/`
- 样式统一放到 `src/styles/global.css`
