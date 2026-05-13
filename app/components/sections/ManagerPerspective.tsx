'use client'

import { Reveal } from '@/app/components/common/Reveal'

const points = [
  {
    title: '配属前に見える化できる',
    desc: '2〜5日間の実務経験を通じて、現場対応力や適性を配属前に判断できます。',
  },
  {
    title: '管理者の負担を軽減',
    desc: '研修と育成を分業することで、現場責任者は本来の業務に集中できます。',
  },
  {
    title: '成長のサイクルが明確',
    desc: '実務→振り返り→改善のサイクルを回し、成果が見える形で確認できます。',
  },
]

export function ManagerPerspective() {
  return (
    <section className="sec bg-white">
      <div className="sec-inner max-w-[1100px] mx-auto px-4 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Manager</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">管理者が安心できる3つの理由</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            研修が現場の負担にならないこと。効果が配属後に続くこと。これが管理者にとっての本当の価値です。
          </p>
        </Reveal>

        <div className="grid gap-5 mt-11 md:grid-cols-2">
          {points.map((item, idx) => (
            <Reveal key={idx} delay={idx * 90}>
              <div className="rounded-[18px] bg-[var(--bg)] p-6 border-[1.5px] border-[var(--border)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-soft hover:border-[var(--blue)]">
                <div className="text-base font-bold text-[var(--blue)] mb-3">
                  {idx + 1}. {item.title}
                </div>
                <p className="text-base text-[var(--body)] leading-[1.9]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
