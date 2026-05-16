import { Link } from 'react-router-dom'
import PixelCard from '../components/pxel_card'

export function HomePage() {
  return (
    <>
      <section className="mb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(280px,400px)]">
          <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-container/10 px-3 py-1 font-label-mono text-label-mono text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Day 0 Engineering Mindset
          </div>
          <h1 className="mb-8 font-headline-xl text-headline-xl text-on-surface md:text-[48px]">
            数据驱动的 LLM 应用产品经理：把复杂模型做成高留存、可规模化的产品。
          </h1>
          <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            深耕 AI 领域 6 年，擅长将前沿算法（NLP/CV/Agents）转化为标准化商业产品。
            主导过多个从 0 到 1 的生成式 AI 项目，通过工程化手段将模型幻觉率降低
            40%，实现 30% 以上的 ROI 提升。
          </p>
          <div className="mb-12 flex flex-wrap gap-3">
            {[
              ['auto_awesome', '自然语言处理/大模型应用'],
              ['visibility', '多模态/计算机视觉'],
              ['hub', 'AI Agent/工作流自动化'],
              ['memory', 'AI 基础设施/平台型 PM'],
            ].map(([icon, label]) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-4 py-2 font-label-mono text-label-mono text-primary"
              >
                <span className="material-symbols-outlined text-[16px]">{icon}</span>
                {label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="rounded-xl bg-primary-container px-8 py-4 font-bold text-on-primary-container shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              「查看案例」
            </Link>
            <button
              type="button"
              className="glass-card rounded-xl border border-white/10 px-8 py-4 font-medium text-on-surface transition-all hover:scale-[1.02] hover:bg-white/5 active:scale-95"
            >
              关于我的方法论
            </button>
          </div>
          </div>

          <PixelCard
            variant="pink"
            className="aspect-square w-full max-w-[min(360px,88vw)] justify-self-center rounded-2xl border border-white/10 bg-surface-container-lowest/80 lg:max-w-md lg:justify-self-end"
          >
            <div className="relative h-full w-full">
              <img
                src="/profile-pixel-card.png"
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
                draggable={false}
              />
            </div>
          </PixelCard>
        </div>
      </section>

      <section className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-4">
        {[
          ['rocket_launch', '0→1', '成功孵化产品'],
          ['groups', '2.4M', '月活跃用户(MAU)'],
          ['trending_down', '-65%', 'Tokens 推理成本'],
          ['insights', '92%', '任务准确率与 ROI'],
        ].map(([icon, stat, cap]) => (
          <div
            key={cap}
            className="glass-card flex flex-col justify-between rounded-xl p-6 transition-colors hover:border-primary/40"
          >
            <span className="material-symbols-outlined mb-4 text-primary">{icon}</span>
            <div>
              <div className="mb-1 font-headline-lg text-headline-lg text-on-surface">{stat}</div>
              <div className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                {cap}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <div className="glass-card overflow-hidden rounded-2xl border border-primary/10">
          <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">terminal</span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                Portfolio Agent v1.0
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="p-8">
            <div className="mx-auto max-w-3xl">
              <div className="relative mb-8 group">
                <input
                  className="w-full rounded-xl border border-outline-variant bg-surface-container-lowest py-4 pl-12 pr-4 font-body-md text-body-md text-on-surface outline-none transition-all placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/50"
                  type="text"
                  placeholder="问我做过什么..."
                  readOnly
                />
                <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 gap-2">
                  <span className="rounded border border-white/10 bg-surface-container-highest px-2 py-1 font-label-mono text-[10px] text-on-surface-variant">
                    ⌘ K
                  </span>
                </div>
              </div>
              <div className="mb-10 flex flex-wrap gap-2">
                {[
                  '一句话了解我的 PM 方法论',
                  '你在 LLM 项目中最大的挑战是什么？',
                  '如何平衡性能与延迟？',
                ].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="rounded-full border border-white/5 bg-surface-container-high px-3 py-1.5 text-[13px] text-on-surface-variant transition-all hover:border-primary/50 hover:text-primary"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/20">
                    <span className="material-symbols-outlined text-[18px] text-primary">smart_toy</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl rounded-tl-none border border-white/5 bg-white/[0.03] p-5">
                      <p className="leading-relaxed text-on-surface italic">
                        “我的核心方法论是：
                        <strong className="not-italic text-on-surface">
                          工程化降噪，业务化闭环
                        </strong>
                        。不追求 SOTA 模型的堆砌，而是通过精准的 RAG 链路优化和反馈循环，将不确定性的
                        AI 能力封装成确定性的用户价值。”
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
                        <div className="mb-1 font-label-mono text-[11px] text-primary">INSIGHT #01</div>
                        <div className="text-sm text-on-surface">
                          通过多阶段对比评估（A/B Testing on Prompts）将客服机器人意图识别率从 78%
                          提升至 94%。
                        </div>
                      </div>
                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-4">
                        <div className="mb-1 font-label-mono text-[11px] text-primary">INSIGHT #02</div>
                        <div className="text-sm text-on-surface">
                          设计并落地了端侧模型加速方案，在不牺牲体验的前提下，将首字生成延迟降低至 200ms。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10">
          <div className="abstract-cover absolute inset-0 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="mb-1 font-headline-md text-headline-md text-on-surface">Systemic Scalability</div>
            <div className="font-label-mono text-label-mono text-on-surface-variant">
              Architecture for LLM-Native Products
            </div>
          </div>
        </div>
        <div className="space-y-6 px-4">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">从模型到产品的“最后一公里”</h2>
          <p className="text-on-surface-variant">
            大多数 AI 产品失败并非因为模型不够强大，而是缺乏工程化的产品触点。我致力于解决幻觉控制、长文本处理上限以及多模态协同中的体验断层。
          </p>
          <ul className="space-y-4">
            {[
              '结构化 Prompt 工程与动态上下文注入',
              '基于用户反馈的 RLHF 闭环迭代机制',
              '跨端多模态交互界面设计（LLM-UI Design）',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">check_circle</span>
                <span className="text-on-surface">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
