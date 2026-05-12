'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function BeforeAfter() {
  return (
    <section className="sec bg-[var(--bg)]">
      <div className="sec-inner max-w-[1100px] mx-auto px-12 py-[88px]">
        <Reveal>
          <div className="sec-label">Impact</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">導入前・導入後の違い</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            研修で何が変わるのかを、具体的な状態で比較します。配属前の準備が変わると、その先の働き方も変わります。
          </p>
        </Reveal>

        <div className="grid gap-5 mt-11 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[18px] bg-white p-8 border-[1.5px] border-[var(--border)]">
              <div className="text-base font-bold text-[var(--blue)] uppercase tracking-[0.22em] mb-4">
                導入前
              </div>
              <ul className="space-y-4 text-base text-[var(--body)] leading-[1.9]">
                <li>・経験量が不足し、実務対応力が見えにくい</li>
                <li>・配属後に「できない」が発覚しやすい</li>
                <li>・指導担当者の教育負担が大きい</li>
                <li>・成長実感が薄く、本人のモチベーションが上がりにくい</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[18px] bg-white p-8 border-[1.5px] border-[var(--border)]">
              <div className="text-base font-bold text-[var(--green)] uppercase tracking-[0.22em] mb-4">
                導入後
              </div>
              <ul className="space-y-4 text-base text-[var(--body)] leading-[1.9]">
                <li>・現場に近い実務経験を短期間で蓄積できる</li>
                <li>・配属前に強みと課題が明確になる</li>
                <li>・管理者の教育負担を減らし、配属先との連携がスムーズに</li>
                <li>・本人に成長実感が生まれ、入社後の定着につながる</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
