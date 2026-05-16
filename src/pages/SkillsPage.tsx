function BarMeter({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`h-3 w-1 ${i < level ? 'bg-primary-container' : 'bg-white/10'}`}
        />
      ))}
    </div>
  )
}

export function SkillsPage() {
  return (
    <>
      <div className="mb-16 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1.5 bg-primary-container" />
          <h1 className="font-headline-xl text-headline-xl text-on-surface">技能矩阵 / 技术栈与能力</h1>
        </div>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          作为 AI 产品经理，我构建了以算法深度感知为核心，向工程落地与商业策略辐射的能力体系，确保从 0 到 1
          打造具有技术护城河的 AI 驱动产品。
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-4">
        <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
          熟练度等级:
        </span>
        {[
          ['核心聚焦 / 专家', 'bg-primary-container'],
          ['工程实践 / 熟练', 'bg-on-surface-variant/40'],
          ['理论认知 / 了解', 'bg-on-surface-variant/20'],
        ].map(([label, dot]) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
          >
            <div className={`h-2 w-2 rounded-full ${dot}`} />
            <span className="font-label-mono text-label-mono text-on-surface-variant">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-12">
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl glass-panel p-8 transition-all duration-500 hover:scale-[1.01] md:col-span-8">
          <div className="absolute -right-32 -top-32 h-64 w-64 bg-primary-container/10 blur-[80px] transition-colors group-hover:bg-primary-container/20" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">neurology</span>
              <h3 className="font-headline-md text-headline-md">模型与算法认知</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-label-mono text-label-mono uppercase text-primary">Generative AI</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-on-surface">GPT-4 / Claude 3.5 / Llama 3</span>
                    <BarMeter level={3} />
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-on-surface">Multimodal (DALL·E, Sora)</span>
                    <BarMeter level={2} />
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-label-mono text-label-mono uppercase text-primary">Core ML/DL</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-on-surface">Transformer Architecture</span>
                    <BarMeter level={3} />
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-on-surface">Fine-tuning & RLHF</span>
                    <BarMeter level={2} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-8 border-t border-white/5 pt-6">
            <p className="font-body-md text-sm italic text-on-surface-variant">
              能够解析 Attention 机制并根据业务场景选择最适切的基础模型。
            </p>
          </div>
        </div>

        <div className="rounded-xl glass-panel p-8 transition-all duration-500 hover:scale-[1.01] md:col-span-4">
          <div className="mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">account_tree</span>
            <h3 className="font-headline-md text-headline-md">AI 工程生态</h3>
          </div>
          <div className="space-y-6">
            {[
              ['LangChain / LlamaIndex', 'CORE', 90],
              ['Vector DB (Pinecone/Milvus)', 'SKILLED', 75],
              ['Prompt Engineering', 'EXPERT', 95],
              ['RAG Architecture', 'CORE', 85],
            ].map(([name, tag, pct]) => (
              <div key={name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-on-surface">{name}</span>
                  <span
                    className={`rounded border px-2 py-0.5 font-label-mono text-[10px] ${
                      tag === 'SKILLED'
                        ? 'border-white/10 bg-white/5 text-on-surface-variant'
                        : 'border-primary-container/20 bg-primary-container/10 text-primary'
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full bg-primary-container" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl glass-panel p-8 transition-all duration-500 hover:scale-[1.01] md:col-span-4">
          <div className="mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <h3 className="font-headline-md text-headline-md">数据与工程基础</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ['PYTHON', 'Pandas/NumPy'],
              ['SQL', 'ETL/Analysis'],
              ['EXPERIMENT', 'A/B Testing & Evaluation'],
            ].map(([a, b]) => (
              <div
                key={a}
                className="min-w-[120px] flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center transition-colors hover:bg-white/10"
              >
                <span className="mb-1 block font-label-mono text-primary">{a}</span>
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 rounded border border-secondary-container/20 bg-secondary-container/10 p-3">
            <span className="material-symbols-outlined text-sm text-secondary">info</span>
            <p className="text-xs text-on-surface-variant">具备阅读与维护脚本的能力，能深度参与工程评审。</p>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl glass-panel p-8 transition-all duration-500 hover:scale-[1.01] md:col-span-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-tertiary opacity-10" />
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">strategy</span>
              <h3 className="font-headline-md text-headline-md">AI PM 核心能力</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                ['token', '商业化策略', 'Token 成本优化、SaaS 定价模型、AI 算力治理。'],
                ['description', 'AI PRD 定义', '从模型幻觉防御到 Evaluation 系统定义的深度文档。'],
                ['insights', '产品增长 & 评估', '建立基于 LLM 的意图识别与满意度量化体系。'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-container/20">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                  </div>
                  <h5 className="font-bold text-on-surface">{title}</h5>
                  <p className="text-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-8 rounded-lg border border-white/5 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                核心护城河: 将复杂算法抽象为用户价值。
              </span>
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="mb-12 text-center font-headline-lg text-headline-lg">正在深耕的领域</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {['AI Agents 生态', '私有化部署方案', '端侧大模型集成', '模型安全与合规'].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-white/5 p-6 text-center transition-colors hover:border-primary/40"
            >
              <span className="mb-2 block font-label-mono text-[10px] text-on-surface-variant">
                NEXT PHASE
              </span>
              <p className="font-medium text-on-surface">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
