# Stitch Prompt — AI 产品经理个人网站（中文版原型）

将本提示词作为**一条完整指令**交给 Stitch。**目标：**生成**桌面优先、适配移动端**的 **AI 产品经理**个人站点高保真原型。**禁止**使用任何人物照片、人像插画、头像、剪影等；仅使用抽象 UI、字体排印、几何图形、徽标、图表式 UI 与占位文案。

**语言要求（必须遵守）：** 页面上所有**用户可见文案**（标题、副标题、导航、按钮、标签、卡片正文、辅助说明、占位数据标签等）均使用**简体中文**；品牌名与技术名词可保留英文（如 GPT-4o、LangChain、LinkedIn、Framer）。Stitch 生成的原型应为**中文个人网页**。

---

## Role & Output Expectations

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Produce a **cohesive prototype** that can be handed to engineering—clear hierarchy, consistent components, realistic copy placeholders, and explicit layout structure.

Before you design, assume:
- **Tech vibe:** modern React-grade component thinking (even if the output is visual-only).
- **Accessibility:** strong focus states, readable contrast, motion that can respect reduced motion.
- **Deliverable:** a **single landing experience** with anchored sections (or a shallow multi-section page), not a generic template.

Ask yourself (internally) whether the hero communicates “**技术深度 + 可量化的业务结果**” within **about 3 seconds**.

---

## Product Narrative（站点叙事 — 中文版）

### 定位（英雄区 / Hero）
- **受众：** 招聘方 HR、用人经理、创始人。
- **价值主张（示例表述，可微调）：** 「数据驱动的 LLM 应用产品经理：把复杂模型与算法，做成高留存、可规模化的产品。」
- **领域标签（胶囊标签）：** 自然语言处理 / 大模型应用 · 多模态 / 计算机视觉 · AI Agent / 工作流自动化 · AI 基础设施 / 平台型 PM
- **关键指标（数字强调 / KPI 磁贴）：** 例如「0→1 产品 · **XX 万月活**」「推理成本 **降低 30%**」「模型效果提升 + 业务 ROI」—使用**带说明占位数字**，标签用中文（如「月活」「成本」「准确率」）。

### 英雄区互动模块
- **Prompt 体验区：** 醒目输入框 + 辅助说明，例如：「问我做过什么」「一句话了解我的 PM 方法论」。
- **回复面板：** 展示 **2～3 条**偏「洞察式」的短句（模拟实时感），体现 **AI 原生**产品思维；此为**原型假数据**，无需真实模型。
- 输入框占位符、按钮、小标题一律中文。

### 作品集 / 案例（Portfolio）
用**两种案例结构**各做一组卡片/版块：

1) **大模型 / Agent 类项目**
   - 小节标题：**背景（为何用 AI？）** · **策略（选型、RAG 与 Agent 取舍）** · **数据飞轮（反馈闭环、类 RLHF 迭代）** · **结果（效果指标 + 商业回报）**
2) **传统 AI / 搜索与推荐**
   - 使用 **STAR** 结构（情境 / 任务 / 行动 / 结果），突出数据洞察与算法迭代

每个案例底部展示 **技术栈一行**：GPT-4o、LangChain、向量数据库、Python 等（英文缩写类用标签即可），可加简短中文说明如「编排」「检索」「向量库」。

### 技能矩阵
以 **Bento / 矩阵**呈现四大块（标题与条目描述均为中文）：
- **模型与算法认知：** GPT / Claude / Llama 能力边界；机器学习 / 深度学习基础
- **AI 工程生态：** LangChain / LlamaIndex；Pinecone / Milvus；Prompt 工程
- **数据与工程基础：** SQL、Python 脚本、数据清洗、A/B 测试
- **AI PM 核心能力：** 商业化与变现、PRD 与需求治理、跨团队推进

### 思考 / 博客
- **行业观察类摘要：** 如 Token 成本核算、幻觉风险、AI-Native 界面原则（标题 + 一行摘要，中文）
- **学习速度证明：** 「论文 / 新工具速拆」卡片（中文标题 + 一句话 takeaway）

### 联络与行动召唤（CTA）
- **简历：** 主按钮文案如「下载简历」；辅文可写「提供彩色 / 黑白 PDF 版本（占位说明，无需真实文件）」
- **社交与作品：** LinkedIn · GitHub（提示词 / Demo 仓库）· 即刻、知乎 等——**图标 + 中文标签**
- **直接联系：** 专业邮箱说明文案 + **微信二维码**以「二维码占位框」呈现（不要真实可扫码图，用文字标注「微信二维码占位」即可）

### 页脚小字
- 可保留一句工具向背书，例如：**「使用 Framer 与 AI 搭建」** 或 **「Built with Framer & AI」**（二选一或中英并列一行小字）。

---

## Design System to Enforce: Linear / Modern（暗色、电影感、技术极简）

### Design Philosophy（须作为约束阅读）
- **高端开发者工具气质**（Linear / Vercel / Raycast）：精确、纵深、流畅。
- **拒绝扁平：** 环境光分层、微粒噪点、淡网格、柔和光晕——**不要**单一纯色大背景。
- **动效：** 200–300ms、偏 **expo-out**；位移极小（≤8px）；缩放微妙（0.98–1.02）。避免弹性过冲。

### Tokens（色板骨架保持不变）
- **background-deep:** `#020203`
- **background-base:** `#050506`（禁用纯黑 `#000`）
- **background-elevated:** `#0a0a0c`
- **surface:** `rgba(255,255,255,0.05)`
- **surface-hover:** `rgba(255,255,255,0.08)`
- **foreground:** `#EDEDEF`
- **foreground-muted:** `#8A8F98`
- **foreground-subtle:** `rgba(255,255,255,0.60)`
- **accent:** `#5E6AD2`
- **accent-bright:** `#6872D9`
- **accent-glow:** `rgba(94,106,210,0.30)`
- **border-default:** `rgba(255,255,255,0.06)`
- **border-hover:** `rgba(255,255,255,0.10)`
- **border-accent:** `rgba(94,106,210,0.30)`

### Background composition（签名式背景）
- 顶部辐射纵深渐变、**极低透明度噪点**（约 1–2%）、**缓慢浮动光斑**（大模糊 accent 色块）、**低对比网格**叠层。
- 关键卡片可选用**随光标/静态模拟**的聚光灯高光（若工具不支持交互，则用看起来像可交互的径向高光）。

### Typography（中文显示）
- **西文与数字：** `Inter, Geist Sans, system-ui, sans-serif`
- **中文补充（与西文混排）：** 请使用系统/网页常见中文无衬线 fallback，例如：`"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC"`（写在字体栈后部）。
- **标题：** semibold、紧字距；主标题可用**白→略透明的纵向渐变字**；**仅一句话**可用 accent 渐变强调。
- **标签 / 元信息：** mono + 字距略宽；若中文标签过紧，可适当加大 tracking 或改用半宽空格分隔。

### Components
- **按钮：** 主按钮实色 accent + 多层光晕阴影；次按钮半透明面；幽灵按钮弱对比。
- **卡片：** 玻璃感渐变面、发丝线边框、**多层阴影**（描边高光 + 扩散暗部 + 可选 accent glow）。
- **输入：** 深底 `#0F0F12`，淡边框，聚焦时 accent 光环。
- **导航：** 顶栏简洁；**移动端：** 汉堡菜单 → 全屏半透明模糊面板，纵向链接 + 底部主 CTA。

### Layout
- **不对称 Bento**：指标与技能区使用非等高、非等宽磁贴（一大一小错落）。
- **分区：** `border-top` 使用 `rgba(255,255,255,0.06)` 或细渐变分割线。
- **纵向节奏：** 桌面区段间距充裕，移动端按比例收紧。

### Accessibility
- 聚焦环使用 accent，`ring-offset` 对齐 `background-base`。
- 不单独依赖颜色传达状态；动效时需考虑 **prefers-reduced-motion**（弱视差、简化为淡入淡出）。

### Anti-patterns
- 禁止整页单色平涂、纯黑底、正文纯大白字、花哨多色装饰、夸张弹跳动效、完全等大的卡片矩阵。

---

## Page Structure（原型区块顺序 — 中文导航）

1. **置顶顶栏：** 姓名/文字标（无图），锚点导航（**首页 · 项目 · 技能 · 写作 · 联系**），主 CTA（如「下载简历」）。
2. **Hero：** 中文大标题 + 副标题 + 领域标签 + KPI Bento + **Prompt 模块** + 次 CTA（如「查看案例」「下载简历」）。
3. **精选项目：** 两组案例（按上文结构）+ 技术栈标签行。
4. **技能矩阵：** 四象限 Bento，中文小节标题与要点。
5. **写作：** 3～5 篇中文卡片（标题 + 一行摘要）。
6. **联系：** 邮箱说明 + 社交按钮 + 简历 CTA + 微信二维码占位框。
7. **页脚：** 紧缩链接 + 工具背书小字 + 技术栈小徽章。

---

## Hard Requirements Checklist

- **不出现人物图像**，无头像模块。
- **不依赖素材照片**；视觉用抽象渐变、网格、符号、简易折线/柱状示意、界面外框。
- 叙事遵循上文 **AI 产品经理中文站点**字段，而非泛化作品集模板。
- 视觉语言遵循 **Linear/Modern**：分层背景、靛蓝 accent 克制使用、玻璃卡片、精炼排版、精确动效规范。
- **全站界面文案为简体中文**（品牌与技术名词可保留英文）。

---

## Optional: Engineering Handoff Notes（若支持批注）

- Design tokens 可映射为 CSS 变量。
- 组件拆分建议：`Header`, `Hero`, `KpiBento`, `PromptPlayground`, `CaseStudyCard`, `SkillsBento`, `ArticleCard`, `ContactPanel`, `Footer`。
- Breakpoints：移动单列；平板 2～3 列；桌面不对称 Bento。
