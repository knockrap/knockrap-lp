'use client'

import { Reveal } from '@/app/components/common/Reveal'

const pillars = [
  {
    num: '01',
    title: '短期間で大量の実戦経験を積む',
    desc: 'コールセンターは短時間で何度も対人対応を繰り返せる場所。話す力・聴く力・改善力を同時に鍛え、座学では得られない経験量を短期間で稼ぎます。',
    color: 'blue',
  },
  {
    num: '02',
    title: '失敗を安全な環境で学びに変える',
    desc: '実際の架電を通じて失敗し、その日のうちに改善点を掴む高速サイクルを回します。現場配属前に「失敗して強くなれる」安全な実戦場です。',
    color: 'green',
  },
  {
    num: '03',
    title: '配属前に適性・課題を数値で見える化',
    desc: '実務を通じた評価レポートで、配属先の判断材料を提供します。「この人をどこに配属し、どう育てるか」が具体的に分かります。',
    color: 'orange',
  },
]

const pillarColor = {
  blue: { bg: 'var(--blue-bg)', text: 'var(--blue)' },
  green: { bg: 'var(--green-bg)', text: 'var(--green)' },
  orange: { bg: 'var(--orange-bg)', text: 'var(--orange)' },
}

export function Solution() {
  return (
    <section className="bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Solution</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="sec-title">コールセンターで、<br className="sm:hidden" />現場で通用する力をつくる。</h2>
        </Reveal>

        {/* main callout */}
        <Reveal delay={120}>
          <div className="relative bg-[#132038] rounded-[20px] px-6 sm:px-12 py-10 mb-12 overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/20 pointer-events-none" />
            <div
              className="blob absolute -top-[30%] -right-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-blue-500/10 pointer-events-none"
              style={{ animationDelay: '1s' }}
            />
            <div className="relative z-10">
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/40 uppercase mb-4">
                なぜコールセンターなのか？
              </p>
              <h3 className="font-serif text-[clamp(1.15rem,2.3vw,1.85rem)] font-black mb-4 leading-[1.4]">
                同じ研修時間でも、<span className="animated-gradient-text">実際に対人対応を繰り返す量</span>が<br className="hidden sm:block" />成長スピードを決めます。
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-[1.9] max-w-[600px]">
                座学・ロールプレイとは違い、実際の顧客と何十本も通話することで「話す・聴く・改善する」が習慣として身につきます。コールセンターは、この経験量を最も短期間に稼げる現場です。
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div className="group bg-[var(--bg)] rounded-[14px] p-6 sm:p-7 border-[1.5px] border-[var(--border)] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-[var(--blue)]">
                <div
                  className="inline-flex w-10 h-10 rounded-full items-center justify-center font-black text-sm mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: pillarColor[p.color as keyof typeof pillarColor].bg,
                    color: pillarColor[p.color as keyof typeof pillarColor].text,
                  }}
                >
                  {p.num}
                </div>
                <h3 className="font-serif text-base sm:text-[1.05rem] font-bold text-[var(--ink)] mb-2.5 leading-[1.5]">
                  {p.title}
                </h3>
                <p className="text-base text-[var(--body)] leading-[1.9]">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
