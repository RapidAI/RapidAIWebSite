export interface ProjectConfig {
  name: string;
  stars: string;
  repo: string;
  category: string;
  summary: string;
  href: string;
}

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
    name: "LabelConvert",
    stars: "318",
    repo: "RapidAI/LabelConvert",
    category: "数据",
    summary: "目标检测与图像分割数据集格式转换工具，降低工程迁移成本。",
    href: "https://github.com/RapidAI/LabelConvert"
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
    stars: "236",
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
    name: "RapidTableDetection",
    stars: "",
    repo: "RapidAI/RapidTableDetection",
    category: "文档智能",
    summary: "检测并提取复杂场景中的表格区域，同时处理透视和旋转校正。",
    href: "https://github.com/RapidAI/RapidTableDetection"
  },
  {
    name: "RapidDoc",
    stars: "",
    repo: "RapidAI/RapidDoc",
    category: "文档智能",
    summary: "面向文档图像内容提取，支持后续输出为 Word、Txt、Markdown 等格式。",
    href: "https://github.com/RapidAI/RapidDoc"
  },
  {
    name: "RapidLayout",
    stars: "",
    repo: "RapidAI/RapidLayout",
    category: "版面分析",
    summary: "中英文文档版面分析工具，适合结构化提取和文档理解场景。",
    href: "https://github.com/RapidAI/RapidLayout"
  },
  {
    name: "RapidTable",
    stars: "",
    repo: "RapidAI/RapidTable",
    category: "表格识别",
    summary: "基于 ONNXRuntime 的表格识别方案，强调部署简单和运行稳定。",
    href: "https://github.com/RapidAI/RapidTable"
  },
  {
    name: "RapidTTS",
    stars: "",
    repo: "RapidAI/RapidTTS",
    category: "语音",
    summary: "基于 ONNXRuntime 的跨平台文本转语音工程实现。",
    href: "https://github.com/RapidAI/RapidTTS"
  },
  {
    name: "RapidVoice",
    stars: "",
    repo: "RapidAI/RapidVoice",
    category: "语音",
    summary: "面向 SenseVoice 的工程化实现，服务语音识别和理解相关应用。",
    href: "https://github.com/RapidAI/RapidVoice"
  },
  {
    name: "RapidVAD",
    stars: "",
    repo: "RapidAI/RapidVAD",
    category: "语音",
    summary: "用于语音切分的 VAD 工具库，适合作为 ASR 前处理组件。",
    href: "https://github.com/RapidAI/RapidVAD"
  },
  {
    name: "RapidVideOCR",
    stars: "",
    repo: "RapidAI/RapidVideOCR",
    category: "应用",
    summary: "视频硬字幕提取工具，服务影音处理与内容结构化场景。",
    href: "https://github.com/RapidAI/RapidVideOCR"
  },
  {
    name: "RapidUnWrap",
    stars: "",
    repo: "RapidAI/RapidUnWrap",
    category: "文档智能",
    summary: "文档扭曲矫正工具，围绕轻量 ONNX 部署和实用效果持续迭代。",
    href: "https://github.com/RapidAI/RapidUnWrap"
  }
];
