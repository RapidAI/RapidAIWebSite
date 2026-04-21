import type { ActionLink, ProjectConfig } from "../types/site";
import { sectionsByKey } from "./sections";
import { defineProjects } from "./validators";

export const projectsPageHero = sectionsByKey.projects.hero;

export const projectsSectionIntro = sectionsByKey.projects.intro!;

export const projectsShowcase = {
  homeLimit: 6,
  pageLimit: 12
};

export const projectsSectionActions: Record<"browseAll" | "openProjectsPage", ActionLink> = {
  browseAll: {
    label: "查看全部项目",
    href: "https://github.com/orgs/RapidAI/repositories",
    external: true
  },
  openProjectsPage: {
    label: "打开项目页",
    href: sectionsByKey.projects.href,
    external: false
  }
};

export const projectCards: ProjectConfig[] = defineProjects([
  {
    name: "RapidOCR",
    stars: "6300",
    repo: "RapidAI/RapidOCR",
    category: "OCR",
    summary: "面向多语言场景的 OCR 工具链，覆盖识别、检测、结构化解析与跨平台部署。",
    href: "https://github.com/RapidAI/RapidOCR"
  },
  {
    name: "RapidASR",
    stars: "607",
    repo: "RapidAI/RapidASR",
    category: "语音",
    summary: "商用级开源语音识别程序库，支持全平台、中英文混合识别与快速集成。",
    href: "https://github.com/RapidAI/RapidASR"
  },
  {
    name: "MaClaw",
    stars: "84",
    repo: "RapidAI/MaClaw",
    category: "应用",
    summary: "面向智能体协作场景的应用型项目，强调多角色编排与业务流程落地。",
    href: "https://github.com/RapidAI/MaClaw"
  },
  {
    name: "TableStructureRec",
    stars: "942",
    repo: "RapidAI/TableStructureRec",
    category: "表格识别",
    summary: "聚焦表格结构识别的工程方案，补齐前后处理与 ONNX 部署链路。",
    href: "https://github.com/RapidAI/TableStructureRec"
  },
  {
    name: "LabelConvert",
    stars: "318",
    repo: "RapidAI/LabelConvert",
    category: "数据",
    summary: "目标检测与图像分割数据集格式转换工具，降低工程迁移成本。",
    href: "https://github.com/RapidAI/LabelConvert"
  },
  {
    name: "RapidOCRCSharp",
    stars: "73",
    repo: "RapidAI/RapidOCRCSharp",
    category: "OCR",
    summary: "面向 Windows 平台的 C# OCR 集成示例，适合快速验证桌面端接入方案。",
    href: "https://github.com/RapidAI/RapidOCRCSharp"
  },
  {
    name: "RapidLaTeXOCR",
    stars: "383",
    repo: "RapidAI/RapidLaTeXOCR",
    category: "公式识别",
    summary: "基于 LaTeX-OCR 与 ONNXRuntime 的公式识别方案，适合科研与文档场景。",
    href: "https://github.com/RapidAI/RapidLaTeXOCR"
  },
  {
    name: "RapidRAG",
    stars: "248",
    repo: "RapidAI/RapidRAG",
    category: "知识问答",
    summary: "结合本地知识库与大模型的问答系统，聚焦私有化与低门槛落地。",
    href: "https://github.com/RapidAI/RapidRAG"
  },
  {
    name: "RapidStructure",
    stars: "201",
    repo: "RapidAI/RapidStructure",
    category: "文档智能",
    summary: "版面分析、表格识别、文档方向分类一体化工具，适配真实业务流。",
    href: "https://github.com/RapidAI/RapidStructure"
  },
  {
    name: "RapidOCRPDF",
    stars: "188",
    repo: "RapidAI/RapidOCRPDF",
    category: "文档智能",
    summary: "基于 RapidOCR 的 PDF 内容提取工具，覆盖文本抽取与文档处理流程。",
    href: "https://github.com/RapidAI/RapidOCRPDF"
  },
  {
    name: "RapidDoc",
    stars: "148",
    repo: "RapidAI/RapidDoc",
    category: "文档智能",
    summary: "面向文档图像内容提取，支持导出为 Word、Txt、Markdown 等常见格式。",
    href: "https://github.com/RapidAI/RapidDoc"
  },
  {
    name: "RapidLayout",
    stars: "267",
    repo: "RapidAI/RapidLayout",
    category: "版面分析",
    summary: "中英文文档版面分析工具，适合结构化提取和文档理解场景。",
    href: "https://github.com/RapidAI/RapidLayout"
  },
  {
    name: "RapidTable",
    stars: "414",
    repo: "RapidAI/RapidTable",
    category: "表格识别",
    summary: "基于 ONNXRuntime 的表格识别方案，强调部署简单和运行稳定。",
    href: "https://github.com/RapidAI/RapidTable"
  }
]);
