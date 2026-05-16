const posts = [
  {
    tag: 'Economy',
    date: 'MAR 14, 2024',
    title: 'Token 成本核算 / 推理经济性',
    excerpt:
      '在长文本与大模型普及的当下，推理成本如何从工程边缘话题走向商业决策核心？解析单位 Token 价值与护栏成本的博弈。',
    read: '12 MIN READ',
  },
  {
    tag: 'Safety',
    date: 'FEB 28, 2024',
    title: '幻觉风险与评测/护栏产品化',
    excerpt:
      '从实验室基准测试到生产环境的实时干预。探讨如何构建可量化的安全防线，在不牺牲创造力的前提下实现确定性输出。',
    read: '8 MIN READ',
  },
  {
    tag: 'UI Principles',
    date: 'JAN 15, 2024',
    title: 'AI-Native 界面原则',
    excerpt:
      '当对话框不再是唯一解。重新定义输入意图、流式反馈与动态布局在下一代 AI 产品中的核心体验架构。',
    read: '15 MIN READ',
  },
]

export function BlogPage() {
  return (
    <>
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-[1px] w-8 bg-primary" />
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary">
              Observations & Strategy
            </span>
          </div>
          <h1 className="mb-6 font-headline-xl text-headline-xl">Thoughts</h1>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            关于推理成本、模型对齐与 AI-Native 交互形态的深度解析。记录我在 Day 0 工程环境下的行业观察与产品化思考。
          </p>
        </div>
        <button
          type="button"
          className="group flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant transition-all duration-300 hover:bg-white/5"
        >
          <span className="material-symbols-outlined text-[18px]">rss_feed</span>
          订阅 / RSS
          <span className="material-symbols-outlined text-[14px] opacity-0 transition-opacity group-hover:opacity-100">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl transition-colors duration-500 hover:border-primary/30"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="abstract-cover absolute inset-0 opacity-95 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.08%22/%3E%3C/svg%3E')]" />
            </div>
            <div className="flex flex-grow flex-col p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-label-mono text-[10px] uppercase tracking-tighter text-primary">
                  {p.tag}
                </span>
                <span className="font-label-mono text-label-mono text-outline">{p.date}</span>
              </div>
              <h3 className="mb-4 font-headline-md text-headline-md leading-tight transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mb-8 line-clamp-3 font-body-md text-body-md text-on-surface-variant">{p.excerpt}</p>
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 font-label-mono text-label-mono text-outline">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {p.read}
                </div>
                <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="glass-card mt-24 flex flex-col items-center rounded-2xl p-12 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="material-symbols-outlined text-[32px] text-primary">mail</span>
        </div>
        <h2 className="mb-4 font-headline-lg text-headline-lg">获取最新的行业洞察</h2>
        <p className="mb-8 max-w-md font-body-md text-body-md text-on-surface-variant">
          每月两次，深度解析 AI 产品前沿动态。拒绝噪音，只分享有价值的逻辑。
        </p>
        <div className="flex w-full max-w-md gap-3">
          <input
            className="placeholder:text-outline flex-grow rounded-xl border border-white/10 bg-[#050506] px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-primary"
            type="email"
            placeholder="email@address.com"
            readOnly
          />
          <button
            type="button"
            className="rounded-xl bg-primary-container px-8 py-3 font-bold text-on-primary-container transition-all hover:scale-[1.02]"
          >
            加入订阅
          </button>
        </div>
      </div>
    </>
  )
}
