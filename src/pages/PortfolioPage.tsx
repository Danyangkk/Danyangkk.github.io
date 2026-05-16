export function PortfolioPage() {
  return (
    <>
      <section className="mb-16">
        <div className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary-container/20 px-3 py-1">
          <span className="font-label-mono text-label-mono uppercase text-primary">Portfolio</span>
        </div>
        <h1 className="mb-4 font-headline-xl text-headline-xl text-on-surface">精选项目</h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          通过深度对齐业务逻辑与底层模型能力，构建可规模化的 AI 原生产品实践。
        </p>
      </section>

      <section className="mb-20">
        <div className="glass-card group relative overflow-hidden rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {['GPT-4o', 'LangChain', '向量数据库'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-label-mono text-label-mono text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mb-4 font-headline-lg text-headline-lg">智能客户中枢：基于 Agent 的全链路自动化</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 font-label-mono text-label-mono uppercase text-primary">
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    背景
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    传统客服系统无法处理非结构化长文本，导致 60% 的工单需要人工二次核验，响应时效超过 4 小时。
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-2 font-label-mono text-label-mono uppercase text-primary">
                    <span className="material-symbols-outlined text-[16px]">strategy</span>
                    策略
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    构建多智能体工作流（Multi-Agent Flow），将意图识别、知识检索与工具调用解耦，实现动态路由。
                  </p>
                </div>
              </div>
              <div className="border-t border-white/5 pt-6">
                <h3 className="mb-4 font-label-mono text-label-mono uppercase text-primary">数据飞轮</h3>
                <div className="rounded-lg border border-white/5 bg-surface-container-lowest/50 p-4">
                  <div className="flex h-20 items-end gap-2">
                    {[30, 45, 60, 85, 100].map((h) => (
                      <div key={h} className="w-full rounded-t bg-primary" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="mt-2 text-center font-label-mono text-[10px] text-on-surface-variant/50">
                    用户反馈闭环驱动 RAG 召回精度提升
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-label-mono text-label-mono uppercase text-primary">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  结果
                </h3>
                <ul className="space-y-2">
                  {['工单自动化闭环率提升至 82%', '平均响应时间降至 30 秒以内'].map((t) => (
                    <li key={t} className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-white/10">
              <div className="abstract-cover absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-lg p-4">
                  <div className="mb-1 font-label-mono text-primary">REAL-TIME AGENT LOG</div>
                  <div className="space-y-1 font-label-mono text-[11px] text-on-surface-variant">
                    <div>[SYSTEM] Initiating context retrieval...</div>
                    <div>[AGENT] Analyzing user intent: &quot;Refund request&quot;</div>
                    <div>[TOOLS] Calling database_refund_policy...</div>
                    <div className="text-primary">[SUCCESS] Policy matched. Generating response.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="glass-card rounded-xl p-8 md:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg">搜索与推荐引擎：亿级数据下的分发优化</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {['ElasticSearch', 'Ranking Model', 'Redis'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-surface-variant px-3 py-1 font-label-mono text-label-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-16">
              {[
                ['01. 情境', '电商平台商品量级突破亿级，搜索点击率（CTR）陷入瓶颈。用户反馈搜索结果相关度低，核心长尾词召回效果极差，导致转化率持续走低。'],
                [
                  '02. 任务',
                  '在不增加服务器算力的前提下，重构精排模型。目标是将核心品类的搜索转化率提升 15%，并将系统端到端延迟控制在 150ms 以内。',
                ],
                [
                  '03. 行动',
                  '引入双塔模型（Two-Tower Model）处理向量化表征；设计多目标优化（Multi-task Learning）权重分配逻辑；实施动态缓存策略处理热点查询。',
                ],
              ].map(([title, body]) => (
                <div key={title} className="flex flex-col gap-6 md:flex-row md:gap-12">
                  <div className="shrink-0 md:w-1/4">
                    <div className="font-label-mono text-headline-md font-bold text-outline/30">{title}</div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{body}</p>
                    {title.startsWith('03.') ? (
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="h-1 overflow-hidden rounded-full bg-primary/20">
                          <div className="h-full w-1/3 bg-primary" />
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-primary/20">
                          <div className="h-full w-2/3 bg-primary" />
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-primary/20">
                          <div className="h-full w-full bg-primary" />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                <div className="shrink-0 md:w-1/4">
                  <div className="font-label-mono text-headline-md font-bold text-primary">04. 结果</div>
                </div>
                <div className="md:w-3/4">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="rounded-lg border border-white/5 bg-surface-container p-6">
                      <div className="text-headline-md font-bold text-primary">+18.4%</div>
                      <div className="mt-1 font-label-mono text-label-mono text-on-surface-variant">搜索转化率提升</div>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-surface-container p-6">
                      <div className="text-headline-md font-bold text-primary">120ms</div>
                      <div className="mt-1 font-label-mono text-label-mono text-on-surface-variant">平均端到端延迟</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
