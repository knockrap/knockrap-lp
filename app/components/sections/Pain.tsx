'use client'

import { Reveal } from '@/app/components/common/Reveal'

const problems = [
  {
    tag: '実務経験',
    title: '座学では現場対応力が育たない',
    desc: '配属前に十分な対人経験を積む機会がなく、話し方・ヒアリング・報連相が現場水準に達しないまま送り出してしまいます。',
    color: 'blue',
  },
  {
    tag: '適性判断',
    title: '配属後に「やっぱりミスマッチ」が発覚する',
    desc: '面接では見えなかった適性や課題が、配属してから明らかになる。フォロー工数が重なり、育成コストがかさみます。',
    color: 'orange',
  },
  {
    tag: '育成体制',
    title: '管理者・指導者のリソースが限界を超えている',
    desc: '現場業務と新人育成の両立は難しく、OJTの質が属人化しやすい。研修担当が不在の企業では特に深刻です。',
    color: 'green',
  },
]

const tagColor = {
  blue: { bg: 'var(--blue-bg)', text: 'var(--blue)', border: 'var(--blue)' },
  orange: { bg: 'var(--orange-bg)', text: 'var(--orange)', border: 'var(--orange)' },
  green: { bg: 'var(--green-bg)', text: 'var(--green)', border: 'var(--green)' },
}

export function Pain() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Problem</div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="sec-title">こんな課題、ありませんか？</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {problems.map((item, idx) => (
            <Reveal key={idx} delay={idx * 90} direction="up">
              <div
                className="group bg-white rounded-[14px] p-6 sm:p-7 border-t-4 border-[1.5px] border-[var(--border)] flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                style={{ borderTopColor: tagColor[item.color as keyof typeof tagColor].border }}
              >
                <span
                  className="self-start text-xs font-bold tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: tagColor[item.color as keyof typeof tagColor].bg,
                    color: tagColor[item.color as keyof typeof tagColor].text,
                  }}
                >
                  {item.tag}
                </span>
                <h3 className="text-base font-bold text-[var(--ink)] leading-[1.55]">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--muted)] leading-[1.85]">
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
