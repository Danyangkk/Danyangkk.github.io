const social = [
  ['link', 'LinkedIn'],
  ['code', 'GitHub'],
  ['radio', '即刻'],
  ['psychology', '知乎'],
] as const

const stack = ['FIGMA', 'LINEAR', 'NOTION', 'PYTHON', 'SQL', 'PYTORCH']

export function ContactPage() {
  return (
    <>
      <div className="mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="font-label-mono text-label-mono uppercase text-primary">Open for Opportunities</span>
        </div>
        <h1 className="mb-4 font-headline-xl text-headline-xl tracking-tight">让我们建立连接</h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          寻找追求极致工程质量与 AI 赋能产品的合作伙伴。如果您有有趣的想法、潜在的机会，或是单纯想聊聊产品经，欢迎随时联系。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="space-y-6 md:col-span-8">
          <div className="glass-card flex flex-col items-center gap-8 rounded-xl p-8 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 font-headline-lg text-headline-lg">准备好深入了解了吗？</h3>
              <p className="mb-6 text-on-surface-variant">
                获取完整履历，了解我在 AI 产品架构与项目管理方面的详细案例与数据表现。
              </p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl bg-[#5E6AD2] px-8 py-4 font-bold text-on-primary-container shadow-indigo transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="material-symbols-outlined">description</span>
                  「下载简历」
                </button>
                <span className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant/60">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  PDF, 2.4MB · 最近更新: 2024.Q4
                </span>
              </div>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/5 bg-surface-container md:w-48">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="flex h-full items-center justify-center">
                <span className="material-symbols-outlined text-[64px] text-primary/40">picture_as_pdf</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-headline-md text-headline-md">「工作邮箱」</h4>
              <span className="material-symbols-outlined text-primary">alternate_email</span>
            </div>
            <div className="group relative">
              <input
                className="w-full rounded-xl border border-white/10 bg-[#050506] px-6 py-4 font-label-mono text-headline-md text-on-surface outline-none transition-colors read-only:focus:border-primary group-hover:border-primary/50"
                type="text"
                readOnly
                value="career@pmai-studio.com"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-white/10"
                aria-label="复制邮箱"
              >
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
            <p className="mt-4 font-label-mono text-label-mono italic text-on-surface-variant/60">
              预计在 24 小时内回复您的来信。
            </p>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="glass-card flex h-full flex-col items-center justify-center rounded-xl p-8 text-center">
            <div className="relative mb-6 flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface-container-highest p-4">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 hover:bg-primary/5" />
              <div className="flex flex-col items-center gap-4 text-on-surface-variant/40">
                <span className="material-symbols-outlined text-[80px]">qr_code_2</span>
                <span className="font-label-mono text-label-mono">「微信二维码占位」</span>
              </div>
            </div>
            <h4 className="mb-2 font-headline-md text-headline-md">即时通讯</h4>
            <p className="text-body-md text-on-surface-variant">
              扫码添加微信，备注「姓名+事由」即可快速建立联系。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {social.map(([icon, label]) => (
          <a
            key={label}
            href="#"
            className="glass-card group flex items-center justify-center gap-3 rounded-xl p-6 transition-all duration-300 hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">
              {icon}
            </span>
            <span className="font-label-mono text-label-mono">{label}</span>
          </a>
        ))}
      </div>

      <div className="mt-24 border-t border-white/5 pt-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h5 className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
              Core Workflow & Stack
            </h5>
            <div className="flex flex-wrap gap-3">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-primary/20 bg-primary/10 px-3 py-1 font-label-mono text-label-mono text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-sm text-right font-label-mono text-sm text-on-surface-variant/60">
            设计与协作以 Figma / Linear / Notion 为主；工程侧保持可读 SQL 与脚本能力，贴近真实排期与评测闭环。
          </p>
        </div>
      </div>
    </>
  )
}
