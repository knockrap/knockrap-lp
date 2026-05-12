'use client'

import Link from 'next/link'
import { Reveal } from '@/app/components/common/Reveal'

export function Pricing() {
  const cards = [
    {
      plan: 'LIGHT',
      days: '2日間プラン',
      price: 39800,
      original: 69800,
      featured: false,
      items: [
        '実際のテレアポ業務体験',
        '社会人基礎・報連相の実践指導',
        '話し方・抑揚・声量トレーニング',
        '短期間で大量の対人経験',
        'まず試してみたい企業向け',
      ],
    },
    {
      plan: 'STANDARD',
      days: '3日間プラン',
      price: 59800,
      original: 98000,
      featured: true,
      badge: 'おすすめ',
      items: [
        '実際のテレアポ業務による実践研修',
        '社会人基礎の定着',
        '毎日フィードバック',
        '対人コミュニケーション強化',
        '改善力・継続力を実践習得',
        '現場へ出す前の強化研修に',
      ],
    },
    {
      plan: 'EXPERT',
      days: '5日間プラン',
      price: 98000,
      original: 168000,
      featured: false,
      items: [
        '実践型テレアポ研修（全日程）',
        '社会人基礎の高密度定着',
        '毎日フィードバック＋改善サイクル',
        '話し方・ヒアリング・切り返し強化',
        '現場で通用する実践対応力を身につける',
        '配属前にしっかり準備したい企業向け',
      ],
    },
  ]

  return (
    <section className="sec bg-[var(--bg)]">
      <div className="sec-inner max-w-[1100px] mx-auto px-12 py-[88px]">
        <Reveal>
          <div className="sec-label">Pricing</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">料金プラン</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            短期集中で現場適応力を確認できる、モニター価格での提供です。3〜5社限定の特別プランです。
          </p>
        </Reveal>

        <div className="grid-3 mt-11">
          {cards.map((card, idx) => (
            <Reveal key={idx}>
              <div
                className={`rounded-[16px] p-9 border-2 relative transition-all duration-300 ${
                  card.featured
                    ? 'bg-gradient-to-b from-[#fff5f5] to-white border-red-600'
                    : 'bg-white border-[var(--border)] hover:-translate-y-[4px] hover:shadow-soft'
                }`}
              >
                {card.badge && (
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-red-600 text-white text-[0.63rem] font-bold tracking-[0.12em] px-[18px] py-1 rounded-full whitespace-nowrap">
                    {card.badge}
                  </div>
                )}

                <div className="text-[0.68rem] font-bold tracking-[0.3em] text-red-600 mb-1.5">
                  {card.plan}
                </div>
                <h3 className="font-serif text-[1.15rem] font-black text-[var(--ink)] mb-4.5">
                  {card.days}
                </h3>

                <div className="text-[0.7rem] text-[var(--muted)] mb-2">
                  通常価格（税込）
                </div>
                <div className="font-display text-[1.25rem] font-black text-[var(--muted)] line-through leading-none mb-2">
                  ¥{card.original?.toLocaleString()}
                </div>

                <div className="text-[0.65rem] text-[var(--muted)] mb-2">↓</div>

                <div className="text-[0.7rem] text-[var(--orange)] font-bold mb-1">
                  モニター限定価格（税込）
                </div>

                <div className="font-display text-[2.4rem] font-black text-red-600 leading-none">
                  ¥{card.price.toLocaleString()}
                </div>

                <div className="text-[0.7rem] text-[var(--muted)] mt-1 mb-3">
                  1名あたり
                </div>

                {card.original && (
                  <div className="text-[0.78rem] font-bold text-[var(--orange)] mb-4.5">
                    {Math.round((1 - card.price / card.original) * 100)}%OFF
                  </div>
                )}

                <hr className="border-[var(--border)] my-4.5" />

                <ul className="flex flex-col gap-2.5 mb-4.5">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[0.78rem] text-[var(--body)] pl-4 relative leading-[1.6]"
                    >
                      <span className="absolute left-0 text-red-600 font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[var(--orange-bg)] rounded-[8px] px-3.5 py-2.75 text-[0.76rem] text-[var(--orange)] font-bold flex gap-2 items-center">
                  🛡 辞退0円保証付き
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-11 bg-white rounded-[12px] px-6 py-5 border-[1.5px] border-[var(--border)] flex gap-6 flex-wrap">
            <div className="text-[0.82rem] text-[var(--body)]">
              👥 2名以上同時：<strong className="text-red-600">10% OFF</strong>
            </div>
            <div className="text-[0.82rem] text-[var(--body)]">
              👥👥 5名以上同時：<strong className="text-red-600">15% OFF</strong>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-[0.72rem] text-[var(--muted)] mt-5 leading-[1.85]">
            ※「研修中の辞退」とは、本人自由意思による研修途中での辞退・放棄を指します。企業様都合による中断は対象外です。
            <br />
            ※ご依頼企業の所在地により、別途交通費が発生する場合があります。お見積りの際にご確認ください。
          </p>
        </Reveal>
      </div>
    </section>
  )
}
