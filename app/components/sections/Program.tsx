'use client'

import { Reveal } from '@/app/components/common/Reveal'
import { Tabs } from '@/app/components/common/Tabs'

export function Program() {
  const days5 = [
    { day: '1', title: '社会人基礎を実務レベルへ', desc: '挨拶・報連相・時間管理・指示理解を実務の中で確認し、習慣化につなげます。', tags: ['挨拶・礼儀', '報連相', '時間管理', '指示理解'] },
    { day: '2', title: '電話対応の実践と改善', desc: '実際の電話対応を行い、振り返りと改善を繰り返して現場対応力を高めます。', tags: ['実テレアポ', '改善サイクル', '実践力'] },
    { day: '3', title: '架電量を増やしながら安定化', desc: '対応の精度と安定感を磨き、現場で通用する力を積み上げます。', tags: ['対応精度', '安定感', '実践量'] },
    { day: '4', title: 'フィードバックと再実践', desc: '振り返りの内容をもとに再実践し、学びを定着させます。', tags: ['振り返り', '再実践', '定着'] },
    { day: '5', title: '配属前の評価と報告', desc: '強み・課題・適性を整理したレポートで、現場配属の判断材料を提供します。', tags: ['評価レポート', '適性可視化', '配属判断'] },
  ]

  const days3 = [
    { day: '1', title: '現状確認と基礎指導', desc: '挨拶・敬語・報連相を確認し、現状の強みと伸びしろを把握します。', tags: ['挨拶', '敬語', '報連相'] },
    { day: '2', title: '電話対応の実践体験', desc: '電話対応の基礎を実務に近い形で体験し、反復練習と振り返りを行います。', tags: ['ロープレ', '電話対応', 'フィードバック'] },
    { day: '3', title: '適性と配属提案の報告', desc: '観察結果をもとに、配属先や育成方針の判断材料になるレポートをお渡しします。', tags: ['適性診断', 'レポート', '配属提案'] },
  ]

  const days2 = [
    { day: '1', title: '実務の入り口を体験', desc: '挨拶・報連相・電話応対の準備を確認し、実務に近い形で対応を体験します。', tags: ['挨拶', '報連相', '準備'] },
    { day: '2', title: '実践と改善のサイクル', desc: '実際の電話対応を行い、振り返りを通じて現場適応力を高めます。', tags: ['実践対応', '振り返り', '改善'] },
  ]

  const ProgramContent = ({ days }: { days: typeof days5 }) => (
    <div className="flex flex-col gap-2.5">
      {days.map((item, idx) => (
        <Reveal key={idx}>
          <div className="bg-white rounded-[12px] border-[1.5px] border-[var(--border)] grid grid-cols-[80px_1fr] overflow-hidden transition-all duration-200 hover:border-[var(--blue)]">
            <div className="bg-[var(--blue)] text-white font-display text-[0.7rem] font-black tracking-[0.06em] flex items-center justify-center text-center leading-[1.35] p-1">
              DAY<br />{item.day}
            </div>
            <div className="px-6 py-4.5 bg-white">
              <h4 className="text-[0.88rem] font-bold text-[var(--ink)] mb-1">
                {item.title}
              </h4>
              <p className="text-[0.78rem] text-[var(--muted)]">{item.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[var(--blue-bg)] text-[var(--blue)] px-2.5 py-0.75 rounded-full text-[0.68rem] font-bold tracking-[0.04em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <div className="mt-7 bg-white rounded-[12px] px-7 py-6 border-[1.5px] border-[var(--border)]">
          <h4 className="text-[0.82rem] font-bold text-[var(--ink)] mb-3.5 flex gap-2 items-center">
            ✅ 修了基準の目安
          </h4>
          <ul className="flex flex-wrap gap-2.5">
            {['配属前に実務経験を確認', '自発的に挨拶・報連相をできる', '電話対応の基本を実務で確認', '改善を繰り返して成長', 'レポートで適性を見える化'].map((item, i) => (
              <li
                key={i}
                className="text-[0.8rem] text-[var(--body)] pl-4 relative"
              >
                <span className="absolute left-0 text-[var(--green)] font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )

  const tabs = [
    { id: 'two', label: '2日間 ライト', content: <ProgramContent days={days2} /> },
    { id: 'three', label: '3日間 スタンダード', content: <ProgramContent days={days3} /> },
    { id: 'five', label: '5日間 インテンシブ', content: <ProgramContent days={days5} /> },
  ]

  return (
    <section className="sec bg-[var(--bg)]" id="program">
      <div className="sec-inner max-w-[1100px] mx-auto px-6 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Program</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">カリキュラム詳細</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">現場で使える実戦経験を得るための、短期集中型カリキュラムです。</p>
        </Reveal>

        <div className="bg-white rounded-[18px] border-[1.5px] border-[var(--border)] p-6 sm:p-8 mb-10">
          <div className="text-[0.9rem] sm:text-[1rem] text-[var(--ink2)] leading-[1.8]">
            <strong className="font-bold">2日・3日・5日から選べる実務型研修</strong>
            <br />
            現場で通用する力を、短期集中で確認できるカリキュラムです。
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              '導入負担を抑えつつ現場適応力を確認できる。',
              '2〜5日間の実務経験で成長を見える化する。',
              '配属前に現場対応力を短期間で確かめられる。',
            ].map((text, i) => (
              <div key={i} className="rounded-[12px] bg-[var(--bg)] border border-[var(--border)] p-4 text-[0.82rem] text-[var(--body)]">
                {text}
              </div>
            ))}
          </div>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}
