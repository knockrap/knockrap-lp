'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function Report() {
  return (
    <section className="sec bg-white">
      <div className="sec-inner max-w-[1100px] mx-auto px-12 py-[88px]">
        <Reveal>
          <div className="sec-label">Deliverable</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">修了後にお届けする<br />個人評価レポート</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            面接ではわからなかった「現場での実力・適性」が、5日間の実務ではっきり見えてきます。配属・育成方針の判断材料としてお役立てください。
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-9 mt-11 items-start">
          <Reveal>
            <div className="bg-white rounded-[16px] overflow-hidden shadow-soft border-[1.5px] border-[var(--border)]">
              <div className="gradient-dark text-white px-7 py-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase">
                📄 個人評価レポート — サンプル
              </div>
              <div className="px-7 py-6">
                {[
                  { label: '社会性・礼儀礼節', pct: 88, grade: 'A', color: 'green' },
                  { label: '報連相・指示理解', pct: 70, grade: 'B', color: 'blue' },
                  { label: '継続力・粘り強さ', pct: 85, grade: 'A', color: 'green' },
                  { label: '営業・対人適性', pct: 50, grade: 'C', color: 'orange' },
                  { label: 'チームワーク・主体性', pct: 90, grade: 'A', color: 'green' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2.5 border-b-[1px] border-[var(--border)] last:border-none text-[0.82rem]"
                  >
                    <span className="text-[var(--muted)]">{item.label}</span>
                    <div className="flex items-center gap-2.5">
                      <div className="w-[90px] h-[5px] bg-[var(--border)] rounded-[3px] overflow-hidden">
                        <div
                          className={`h-full rounded-[3px] ${
                            item.color === 'green'
                              ? 'bg-[var(--green)]'
                              : item.color === 'blue'
                                ? 'bg-[var(--blue)]'
                                : 'bg-[var(--orange)]'
                          }`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <span
                        className={`font-display text-lg font-bold min-w-[18px] text-center ${
                          item.color === 'green'
                            ? 'text-[var(--green)]'
                            : item.color === 'blue'
                              ? 'text-[var(--blue)]'
                              : 'text-[var(--orange)]'
                        }`}
                      >
                        {item.grade}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="mt-3.5 bg-[var(--bg)] rounded-[8px] p-4 text-[0.78rem] text-[var(--muted)] leading-[1.85]">
                  <strong className="text-[var(--blue)] text-[0.72rem]">
                    ■ 指導者コメント
                  </strong>
                  <br />
                  礼儀・挨拶は高い水準で、指摘を受け止めて改善につなげる力がありました。電話対応には伸びしろがありますが、接客・事務系配属では早期に形になると判断します。実務を通じた成長ポテンシャルが見えました。
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4.5">
            <Reveal>
              <div className="bg-[var(--bg)] rounded-[12px] px-6 py-5.5 border-l-4 border-[var(--blue)]">
                <h4 className="font-serif text-[0.9rem] font-bold text-[var(--ink)] mb-2">
                  📊 評価項目について
                </h4>
                <p className="text-[0.79rem] text-[var(--body)] leading-[1.85]">
                  A〜E評価＋指導者コメントのセットでお届けします。数字だけでなく「なぜその評価か」を言語化することで、配属後の育て方のヒントになります。
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-[var(--bg)] rounded-[12px] px-6 py-5.5 border-l-4 border-[var(--orange)]">
                <h4 className="font-serif text-[0.9rem] font-bold text-[var(--ink)] mb-2">
                  🔍 配属・適性アドバイス付き
                </h4>
                <p className="text-[0.79rem] text-[var(--body)] leading-[1.85]">
                  「営業向き」「接客向き」「事務向き」「管理職素質あり」など、本人の特性を踏まえた配属先のご提案も添えます。採用後の配置決めにお役立てください。
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-[var(--bg)] rounded-[12px] px-6 py-5.5 border-l-4 border-[var(--green)]">
                <h4 className="font-serif text-[0.9rem] font-bold text-[var(--ink)] mb-2">
                  ⚠️ 離職リスクの傾向も把握
                </h4>
                <p className="text-[0.79rem] text-[var(--body)] leading-[1.85]">
                  ストレス耐性・継続性・指摘受容力などから、離職リスクの傾向もお伝えします。「この人をどうケアすれば定着するか」まで含めてお届けします。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .gradient-dark {
          background: linear-gradient(135deg, #0f1f35, #1a3050);
        }
      `}</style>
    </section>
  )
}
