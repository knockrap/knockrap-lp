'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function UseCases() {
  const cases = [
    {
      num: '01',
      tag: '入社直後の育成',
      title: '配属前に実戦経験を積ませたい',
      desc: '入社直後の新人に、現場での話し方・受け答え・報連相を実務の中で体得させます。現場に出してからのギャップを小さくすることができます。',
      color: 'c1',
    },
    {
      num: '02',
      tag: '研修体制が弱い企業',
      title: '社内で育成リソースが足りない',
      desc: '研修担当者が不在でも、実務を通じた学びを提供します。管理者は配属後の判断と現場調整に注力できます。',
      color: 'c2',
    },
    {
      num: '03',
      tag: '現場適応が課題の社員',
      title: '経験不足の社員を現場仕様に整えたい',
      desc: '対人経験や実務サイクルを補強し、電話や接客に必要な基礎力を磨きます。戻した後の成長を見える化します。',
      color: 'c3',
    },
  ]

  const bgColors = {
    c1: '#dce9ff',
    c2: '#d4f2e7',
    c3: '#fde8d4',
  }

  const tagBgs = {
    c1: 'var(--blue-bg)',
    c2: 'var(--green-bg)',
    c3: 'var(--orange-bg)',
  }

  const tagColors = {
    c1: 'var(--blue)',
    c2: 'var(--green)',
    c3: 'var(--orange)',
  }

  return (
    <section className="sec bg-white">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Use Cases</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">こんな課題を持つ企業様に向いています</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            研修担当者の工数を抑えつつ、新人に普通の研修では得られない実務経験を与えたい企業に向いています。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-11">
          {cases.map((c, idx) => (
            <Reveal key={idx}>
              <div
                className={`border-2 rounded-[16px] p-6 sm:p-7 transition-all duration-300 ${c.color}`}
                style={{
                  borderColor: 'var(--border)',
                  borderTop: `4px solid ${tagColors[c.color as keyof typeof tagColors]}`,
                }}
              >
                <div
                  className="font-display text-[2.4rem] font-black"
                  style={{ color: bgColors[c.color as keyof typeof bgColors] }}
                >
                  {c.num}
                </div>
                <span
                  className="inline-block text-[0.7rem] font-bold tracking-[0.12em] px-3 py-1 rounded-full mb-3.5"
                  style={{
                    backgroundColor: tagBgs[c.color as keyof typeof tagBgs],
                    color: tagColors[c.color as keyof typeof tagColors],
                  }}
                >
                  {c.tag}
                </span>
                <h3 className="font-serif text-[1.02rem] font-bold text-[var(--ink)] mb-3">
                  {c.title}
                </h3>
                <p className="text-[0.82rem] text-[var(--body)] leading-[1.8]">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
