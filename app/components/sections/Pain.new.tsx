'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function Pain() {
  const problems = [
    { title: '実務経験が不足している', desc: '座学中心の研修では、対人対応力や現場での判断力を十分に磨けません。' },
    { title: '配属後のミスマッチが起きやすい', desc: '実務レベルの経験不足のまま配属すると、期待と現実のギャップが大きくなります。' },
    { title: '新人の成長実感が薄い', desc: '成長の実感がないまま研修が終わると、入社後の主体性や継続力が育ちません。' },
    { title: '管理者の教育負担が大きい', desc: '現場業務と新人育成を両立するのは難しく、フォローの質が落ちやすくなります。' },
    { title: '対人経験量が圧倒的に少ない', desc: '限られた機会では、話し方や対応力の習熟スピードが遅れてしまいます。' },
    { title: '適性判断が面接だけでは困難', desc: '実際の対人対応を見ないと、配属先の最適化や育成方針の判断が難しくなります。' },
  ]

  return (
    <section className="sec bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Problem</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">現場配属前のよくある課題</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-11">
          {problems.map((item, idx) => (
            <Reveal key={idx}>
              <div className="bg-white rounded-[12px] p-5 sm:p-6 border-[1.5px] border-[var(--border)] flex gap-3 sm:gap-3.5 items-start transition-all duration-200 hover:border-[var(--blue)] hover:shadow-soft cursor-default">
                <div className="w-2 h-2 rounded-full bg-[var(--blue)] flex-shrink-0 mt-2" />
                <div>
                  <h3 className="text-base font-bold text-[var(--ink)] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--muted)] leading-[1.8]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
