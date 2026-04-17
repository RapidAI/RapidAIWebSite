# RapidAI Website v2

RapidAI 官网静态站点，基于 Astro 构建，面向 GitHub Pages 部署。

## 本地开发

```bash
npm install
npm run dev
```

默认本地地址：

```text
http://localhost:4321/
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## GitHub Pages 部署

项目已经内置 GitHub Pages 部署工作流：

- 工作流文件：[.github/workflows/ci.yml](/Users/joshuawang/projects/_self/RapidAIWebSitev2/.github/workflows/ci.yml)
- 构建方式：Astro 静态站点
- 发布目录：`dist/`
- 发布分支：`gh-pages`

### 部署逻辑

- 推送到 `main` 或 `master` 时会自动构建并发布。
- `astro.config.mjs` 已根据 `GITHUB_REPOSITORY` 自动设置 `base`，适配仓库名路径部署。
- 如果你使用自定义域名，建议把 `CNAME` 文件放到 `public/CNAME`。

### GitHub Pages 设置建议

1. 仓库 `Settings -> Pages`
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `gh-pages`
4. Folder 选择 `/ (root)`

## 内容维护入口

后续大多数动态增删内容，都已经拆到 `src/data` 或 `src/content`。

### 1. 站点导航和页脚

- 文件：[src/data/site.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/site.ts)
- 可维护内容：
  - 顶部导航
  - 页脚栏目
  - 页脚品牌说明

### 2. 首页内容

- 文件：[src/data/home.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/home.ts)
- 可维护内容：
  - 首页 Hero 文案
  - Hero 按钮
  - Hero 右侧卡片
  - 首页统计卡
  - 首页信号卡
  - 首页栏目入口卡

### 3. 项目卡片

- 文件：[src/data/projects.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/projects.ts)
- 可维护内容：
  - 项目名称
  - 分类
  - 摘要
  - GitHub 仓库地址
  - 兜底收藏数

说明：

- 如果填写了数字型 `stars`，页面可在 GitHub 请求失败时显示兜底值。
- 如果留空，页面会显示 `仓库`，不会显示错误占位。

### 4. 研究院与论文

- 文件：[src/data/research.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/research.ts)
- 可维护内容：
  - 研究院首屏文案
  - 招募说明
  - 研究院概述卡片
  - 高亮信息卡片
  - 管理团队
  - 学术委员会规则
  - 论文与成果列表

### 5. 社区加入说明

- 文件：[src/data/community.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/community.ts)
- 可维护内容：
  - 成员页加入说明卡
  - 申请链接

### 6. 成员信息

- 文件：[src/data/members.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/members.ts)
- 可维护内容：
  - 成员姓名
  - GitHub 用户名
  - 角色
  - 简介

### 7. 博客文章

- 目录：[src/content/blog](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/content/blog)
- 每篇文章为一个 Markdown 文件
- 可维护内容：
  - 标题
  - 摘要
  - 日期
  - 作者
  - 标签
  - 封面图
  - 正文

### 8. 近期动态

- 目录：[src/content/updates](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/content/updates)
- 每条动态为一个 Markdown 文件
- 可维护内容：
  - 标题
  - 简述
  - 日期
  - 标签

## 常见操作

### 新增一个项目

编辑 [src/data/projects.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/projects.ts)，按现有对象格式新增一项。

### 新增一篇博客

在 [src/content/blog](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/content/blog) 下新增 `.md` 文件，参考现有文章 frontmatter。

### 新增一条动态

在 [src/content/updates](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/content/updates) 下新增 `.md` 文件。

### 新增一条论文

编辑 [src/data/research.ts](/Users/joshuawang/projects/_self/RapidAIWebSitev2/src/data/research.ts) 里的 `publications` 数组。

## 目录说明

```text
src/
  components/      页面组件
  content/         博客与动态 Markdown 内容
  data/            可手动维护的数据配置
  layouts/         页面布局
  pages/           路由页面
  styles/          全局样式
public/
  images/          静态图片资源
.github/workflows/
  ci.yml           GitHub Pages 自动部署
```
