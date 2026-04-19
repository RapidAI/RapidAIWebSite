export interface ProjectConfig {
  name: string;
  stars: string;
  repo: string;
  category: string;
  summary: string;
  href: string;
}

export const projectsPageHero = {
  eyebrow: "项目矩阵",
  title: "一组真正能被拿去落地的 AI 工具。",
  description:
    "RapidAI 的项目覆盖 OCR、ASR、文档理解、知识问答与数据处理。重点始终不是“功能很多”，而是“接起来就能用”。",
  panelTag: "维护方式",
  panelTitle: "首页精选与项目页列表已统一",
  panelDescription:
    "项目卡片、排序逻辑和说明文案都集中在同一套配置里维护。首页只做精选预览，项目页负责完整展开。"
};

export const projectsSectionIntro = {
  eyebrow: "项目列表",
  title: "项目矩阵",
  description:
    "这里动态展示 RapidAI 当前公开仓库中按收藏数排序的项目。首页与项目页现在共用同一套项目入口，只是展示数量不同。"
};

export const projectsSectionActions = {
  browseAll: {
    label: "查看全部项目",
    href: "https://github.com/orgs/RapidAI/repositories",
    external: true
  },
  openProjectsPage: {
    label: "打开项目页",
    href: "/projects",
    external: false
  }
};

export const projectCards: ProjectConfig[] = [
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
    summary: "爱马仕智能体系统，非传统小龙虾。。",
    href: "https://github.com/RapidAI/MaClaw"
  },
  {
    name: "TableStructureRec",
    stars: "942",
    repo: "RapidAI/TableStructureRec",
    category: "表格识别",
    summary: "整理目前开源的最优表格识别模型，完善前后处理，模型转换为ONNX",
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
    summary: "本项目为Windows平台C# WinForm范例",
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
    summary: "Based on RapidOCR, extract the PDF content",
    href: "https://github.com/RapidAI/RapidOCRPDF"
  },
  {
    name: "RapidDoc",
    stars: "148",
    repo: "RapidAI/RapidDoc",
    category: "文档智能",
    summary: "面向文档图像内容提取，支持后续输出为 Word、Txt、Markdown 等格式。",
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
];
