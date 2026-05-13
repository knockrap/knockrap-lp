'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function Solution() {
  const pillars = [
    {
      pt: 'POINT 01',
      title: '短期間で大量の実践経験を獲得',
      desc: '架電を繰り返すことで、話し方・ヒアリング・伝え方を短期間で感覚としてつかませます。経験量の差が、成長スピードを左右します。',
    },
    {
      pt: 'POINT 02',
      title: '社会人基礎を現場レベルまで定着',
      desc: '挨拶・報連相・時間管理・指示理解を、実務の中で何度も確認しながら習慣化します。現場で「やれる」状態まで持っていきます。',
    },
    {
      pt: 'POINT 03',
      title: '配属前の適性を可視化',
      desc: '実務を通じた評価レポートで、配属先の判断材料を提供します。経験を通じて見える「適性」と「課題」を整理します。',
    },
  ]

  return (
    <section className="sec bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Solution</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="sec-title">実戦経験を使って、現場で通用する力をつける。</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative bg-[#132038] rounded-[20px] px-6 sm:px-12 py-10 mb-12 overflow-hidden text-white">
            {/* animated background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/20 pointer-events-none" />
            <div
              className="blob absolute -top-[30%] -right-[10%] w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] bg-blue-500/10 pointer-events-none"
              style={{ animationDelay: '1s' }}
            />
            <div className="relative z-10">
              <h3 className="font-serif text-[clamp(1.2rem,2.3vw,1.9rem)] font-black mb-4 leading-[1.4]">
                コールセンターを使う理由は、
                <span className="animated-gradient-text">短期間で実戦経験量を稼ぐため</span>です。
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-[1.9] max-w-[620px]">
                同じ時間でも、実際に対人対応を繰り返すほど学習効果は高まります。問合せ対応や商談準備の前に「話す力」「聴く力」「改善力」を同時に鍛えることができます。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, idx) => (
            <Reveal key={idx} delay={idx * 100} direction="up">
              <div className="group bg-[var(--bg)] rounded-[14px] p-6 sm:p-7 border-[1.5px] border-[var(--border)] transition-all duration-300 hover:border-[var(--blue)] hover:-translate-y-[4px] hover:shadow-soft">
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--blue)] mb-3 transition-all duration-300 group-hover:tracking-[0.28em]">
                  {pillar.pt}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--ink)] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-base text-[var(--body)] leading-[1.9]">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
