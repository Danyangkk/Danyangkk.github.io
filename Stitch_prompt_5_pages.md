# Stitch — Five English Prompts (5 First-Level Pages)

Use **one block at a time** in Stitch. Each block generates **one full-screen prototype** for an **AI Product Manager** personal site.

**Always enforce (every page):**

- **Language:** All user-visible UI copy (nav, headings, body, buttons, labels, placeholders, helper text, KPI captions) must be **Simplified Chinese**. Keep proper nouns / tools in English when natural (e.g., GPT-4o, LangChain, LinkedIn, Framer).
- **No imagery of people:** No portraits, avatars, silhouettes, stock photos of humans. Use abstract gradients, grids, glyphs, sparklines, glass cards only.
- **Style:** Linear / modern dark “developer tool” aesthetic — **not** flat, **not** pure black `#000`, **not** pure white body text.
- **Canvas:** Desktop-first (e.g., 1440×900 or 1280×800), include a **sticky header** with these **Chinese** nav labels: **首页 · 案例 · 技能 · 写作 · 联系** + primary CTA **「下载简历」** (visual only; no real file).

---

## Shared design system (paste mindset for every prompt)

**Background layers:** base canvas `#050506`, deeper footer layer `#020203`, elevated panels `#0a0a0c`. Add subtle **radial depth** from top-center, **very light noise**, **slow blurred accent blobs** using `#5E6AD2` at low opacity, and a **faint grid** overlay.

**Text:** primary `#EDEDEF`, muted `#8A8F98`. **Accent:** `#5E6AD2` / hover `#6872D9` with soft glow `rgba(94,106,210,0.30)`.

**Surfaces:** translucent cards `rgba(255,255,255,0.05)` with hairline borders `rgba(255,255,255,0.06)`; hover `rgba(255,255,255,0.08)`. Multi-layer shadows (hairline highlight + soft diffuse + optional accent glow).

**Type:** Inter / Geist / system UI for Latin; add CJK fallbacks: **PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC**. Headlines semibold, tight tracking; **one** accent-gradient phrase max in hero.

**Motion:** 200–300ms, calm easing (expo-out feel), tiny transforms (≤8px). No bouncy springs.

**A11y:** visible focus rings; respect reduced-motion thinking.

---

## Prompt 01 — Page: **首页 / Home (Hero)**

```text
Design a single desktop-first screen: **Home / Hero** for an AI Product Manager portfolio (Chinese UI).

Scope (this page ONLY): above-the-fold hero + a compact preview row (2 small “teaser” cards linking to 案例 / 写作 — labels only, no second page layout).

Must include (Simplified Chinese copy):
- H1 + lead paragraph selling “**技术背景 + 业务结果**” within ~3 seconds. Example line you may adapt: “数据驱动的 LLM 应用产品经理：把复杂模型做成高留存、可规模化的产品。”
- Pill tags: 自然语言处理/大模型应用 · 多模态/计算机视觉 · AI Agent/工作流自动化 · AI 基础设施/平台型 PM
- **Asymmetric Bento KPI tiles** (3–4 tiles) with Chinese labels, e.g. 0→1 产品 / 月活占位 / 推理成本降幅 / 准确率与 ROI（占位数字）.
- **Prompt playground module:** input + helper text (e.g. “问我做过什么” / “一句话了解我的 PM 方法论”) + a panel showing **2–3** fake “insight” lines in Chinese (prototype only).
- Two CTAs: **「查看案例」** (secondary) and **「下载简历」** (primary).
- Sticky header with Chinese nav + logo text only (no photos).

Visual: layered ambient background, indigo glow accents, glass cards, subtle gradient typography on headline (not entire page).

Do NOT add: avatar, portrait photography, or full case-study writeups (only teasers).
```

---

## Prompt 02 — Page: **案例 / Portfolio (Case Studies)**

```text
Design a single desktop-first screen: **Portfolio / Case Studies** for an AI Product Manager portfolio (Chinese UI).

Scope (this page ONLY): **two flagship case studies** as large glass cards (stacked or side-by-side on wide screens), each with Chinese section headings and paragraph placeholders.

Case A — **大模型 / Agent 项目** structure (use these Chinese headings):
1) **背景** — 为何要做 AI？业务痛点与约束  
2) **策略** — 模型选型；RAG 与 Agent 路径取舍  
3) **数据飞轮** — 反馈闭环；类 RLHF/持续迭代  
4) **结果** — 模型效果指标 + 商业回报（占位）

Case B — **传统 AI / 搜索与推荐** structure: **STAR** in Chinese — **情境 / 任务 / 行动 / 结果**，强调数据洞察与算法迭代。

Each case must include a **tech stack badge row** (mix OK): GPT-4o, LangChain, 向量数据库 (Pinecone/Milvus), Python, plus 1–2 plausible extras.

Add a small **page title band** (“精选项目” or similar) and sticky header consistent with other pages.

No people images. Use charts-as-UI only if minimal (tiny sparkline blocks), no fake screenshots with faces.
```

---

## Prompt 03 — Page: **技能 / Skills Matrix**

```text
Design a single desktop-first screen: **Skills Matrix** for an AI Product Manager portfolio (Chinese UI).

Content: an **asymmetric Bento grid** (not uniform) with **four parent categories**, all titles and bullets in Chinese:

1) **模型与算法认知** — GPT/Claude/Llama 边界；ML/DL 基础  
2) **AI 工程生态** — LangChain/LlamaIndex；Pinecone/Milvus；Prompt 工程  
3) **数据与工程基础** — SQL；Python；数据清洗；A/B 测试  
4) **AI PM 核心能力** — 商业化/变现；PRD；跨团队推进

Each tile: title + 3–5 short bullet lines (Chinese), mono micro-labels optional for tool names.

Include a slim **“熟练度/聚焦领域”** legend row using pills (Chinese) — do NOT use fake percentages unless clearly labeled “示意”.

Sticky header + page title (“技能矩阵” / “技术栈与能力”).

Visual: glass bento tiles, soft borders, optional mouse-spotlight look on one hero tile. No photos.
```

---

## Prompt 04 — Page: **写作 / Thoughts & Blog**

```text
Design a single desktop-first screen: **Thoughts / Blog index** for an AI Product Manager portfolio (Chinese UI).

Include:
- Page title + one-line intro in Chinese (positioning: 行业观察 + 学习速度证明).
- **3–5 article cards** in a responsive grid. Each card: Chinese title + one-line summary + meta row (日期占位 · 阅读时长占位).

Suggested topics (write real Chinese titles/summaries, not lorem ipsum):
- Token 成本核算 / 推理经济性  
- 幻觉风险与评测/护栏产品化  
- AI-Native 界面原则（聊天式/生成式 UI）  
- 新论文/新工具速拆（2 张卡片体现“上手快”）

Optional: a **“订阅/RSS”** ghost button (non-functional) with Chinese label.

Sticky header consistent with site.

No avatars/authors photos. Abstract cover motifs only (gradients, grid, typographic mark).
```

---

## Prompt 05 — Page: **联系 / Contact & CTA**

```text
Design a single desktop-first screen: **Contact & CTA** for an AI Product Manager portfolio (Chinese UI).

Must include (Chinese copy):
- **Primary CTA:** **「下载简历」** + helper note: 提供彩色/黑白 PDF（占位说明，无真实文件）  
- **Email block:** label **「工作邮箱」** + placeholder address text  
- **Social row** as buttons with Chinese labels + English platform names where needed: LinkedIn · GitHub（提示词/Demo 仓库）· 即刻 · 知乎  
- **WeChat:** a **QR placeholder tile** labeled **「微信二维码占位」** (no real QR).

Footer strip with compact links mirroring nav + microcopy: **“使用 Framer 与 AI 搭建”** (or bilingual tiny line).

Optional: small “技术栈徽章” row (mono badges) — tools only, no logos if unclear.

Sticky header. Visual language matches prior pages (layered dark BG, indigo accent glow). No people imagery.
```

---

## Usage notes

- Generate **5 separate Stitch outputs** by running each fenced prompt block **on its own**.
- If Stitch supports **project theme**, paste **Shared design system** once globally, then only the page-specific paragraph.
- Keep **nav labels identical** across all five screens so the set reads like one site.
