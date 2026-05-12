'use client'

import { Reveal } from '@/app/components/common/Reveal'
import { Tabs } from '@/app/components/common/Tabs'

export function Program() {
  const days5 = [
    { day: '1', title: '社会人基礎を実務レベルへ', desc: '挨拶・報連相・時間管理・指示理解とともに、実テレアポを通じて現場基礎を習慣化します。', tags: ['挨拶・礼儀', '報連相', '時間管理', '実テレアポ'] },
    { day: '2', title: '電話対応の実践と改善', desc: '実テレアポを行いながら、振り返りと改善を繰り返して現場対応力を高めます。', tags: ['実テレアポ', '改善サイクル', '実践力'] },
    { day: '3', title: '架電量を増やしながら安定化', desc: '実テレアポの架電量を増やしつつ、対応精度と安定感を磨いて現場対応力を高めます。', tags: ['実テレアポ', '安定感', '実践量'] },
    { day: '4', title: 'フィードバックと再実践', desc: '実テレアポの振り返り内容をもとに、改善と再実践を繰り返して定着させます。', tags: ['実テレアポ', '振り返り', '再実践', '定着'] },
    { day: '5', title: '配属前の評価と報告', desc: '実テレアポを通じた強み・課題・適性を整理し、現場配属の判断材料としてレポート化します。', tags: ['実テレアポ', '評価レポート', '適性可視化', '配属判断'] },
  ]

  const days3 = [
    { day: '1', title: '社会人基礎を実務レベルへ', desc: '挨拶・報連相・時間管理・指示理解とともに、実テレアポを通じて現場基礎を習慣化します。', tags: ['挨拶・礼儀', '報連相', '時間管理', '実テレアポ'] },
    { day: '2', title: '電話対応の実践と改善', desc: '実テレアポを行いながら、振り返りと改善を繰り返して現場対応力を高めます。', tags: ['実テレアポ', '改善サイクル', '実践力'] },
    { day: '3', title: '配属前の評価と報告', desc: '実テレアポを通じた強み・課題・適性を整理し、現場配属の判断材料としてレポート化します。', tags: ['実テレアポ', '評価レポート', '適性可視化', '配属判断'] },
  ]

  const days2 = [
    { day: '1', title: '社会人基礎を実務レベルへ', desc: '挨拶・報連相・時間管理・指示理解とともに、実テレアポを通じて現場基礎を習慣化します。', tags: ['挨拶・礼儀', '報連相', '時間管理', '実テレアポ'] },
    { day: '2', title: '電話対応の実践と改善', desc: '実テレアポを行いながら、振り返りと改善を繰り返して現場対応力を高めます。', tags: ['実テレアポ', '改善サイクル', '実践力'] },
  ]

  const ProgramContent = ({ days }: { days: typeof days5 }) => (
    <div className="flex flex-col gap-2.5">
      {days.map((item, idx) => (
        <Reveal key={idx}>
          <div className="bg-white rounded-[12px] border-[1.5px] border-[var(--border)] grid grid-cols-[80px_1fr] overflow-hidden transition-all duration-200 hover:border-[var(--blue)]">
            <div className="bg-[var(--blue)] text-white font-display text-lg sm:text-xl font-black tracking-[0.06em] flex items-center justify-center text-center leading-[1.35] p-3">
              DAY<br />{item.day}
            </div>
            <div className="px-8 py-6 bg-white">
              <h4 className="text-lg sm:text-2xl font-bold text-[var(--ink)] mb-1">
                {item.title}
              </h4>
              <p className="text-lg sm:text-xl text-[var(--muted)] leading-8">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[var(--blue-bg)] text-[var(--blue)] px-4 py-2 rounded-full text-base sm:text-lg font-bold tracking-[0.04em]"
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
          <h4 className="text-lg sm:text-2xl font-bold text-[var(--ink)] mb-3.5 flex gap-2 items-center">
            ✅ 修了基準の目安
          </h4>
          <ul className="flex flex-wrap gap-3">
            {['配属前に実務経験を確認', '自発的に挨拶・報連相をできる', '電話対応の基本を実務で確認', '改善を繰り返して成長', 'レポートで適性を見える化'].map((item, i) => (
              <li
                key={i}
                className="text-lg sm:text-xl text-[var(--body)] pl-6 relative"
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
          <div className="text-base sm:text-lg text-[var(--ink2)] leading-[1.8]">
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
              <div key={i} className="rounded-[12px] bg-[var(--bg)] border border-[var(--border)] p-4 text-base text-[var(--body)]">
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
