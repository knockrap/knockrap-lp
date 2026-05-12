'use client'

import { Reveal } from '@/app/components/common/Reveal'

const reasons = [
  {
    title: '短期間で大量の実務経験を稼ぐ',
    desc: 'コールセンターは短時間で何度も対人対応を繰り返せるため、実務経験の量を圧倒的に稼げます。',
    color: 'blue',
  },
  {
    title: '失敗を安全に学びに変える',
    desc: '実際の架電を通じて、失敗からすぐに改善点を見つけるサイクルを回せます。現場配属前の安全な実戦場として最適です。',
    color: 'green',
  },
  {
    title: '現場適応力を目に見える形で確認',
    desc: '顧客とのやり取りや報連相を実際に見ることで、「職場への適性」と「改善領域」が明確になります。',
    color: 'orange',
  },
]

const colorBg = {
  blue: 'var(--blue-bg)',
  green: 'var(--green-bg)',
  orange: 'var(--orange-bg)',
}

const colorText = {
  blue: 'var(--blue)',
  green: 'var(--green)',
  orange: 'var(--orange)',
}

export function WhyCallCenter() {
  return (
    <section className="sec bg-white">
      <div className="sec-inner max-w-[1100px] mx-auto px-12 py-[88px]">
        <Reveal>
          <div className="sec-label">Reason</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">なぜコールセンターを使うのか？</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            実務経験量と高速フィードバック。それを最も効率よく実現できるのが、コールセンターという現場です。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-11">
          {reasons.map((item, idx) => (
            <Reveal key={idx}>
              <div className="rounded-[16px] border-[1.5px] border-[var(--border)] p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-soft">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full" style={{ backgroundColor: colorBg[item.color as keyof typeof colorBg] }}>
                  <span className="text-[1.25rem] font-bold" style={{ color: colorText[item.color as keyof typeof colorText] }}>
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-[1rem] font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.84rem] text-[var(--body)] leading-[1.8]">
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
