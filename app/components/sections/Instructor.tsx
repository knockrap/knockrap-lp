'use client'

import { Reveal } from '@/app/components/common/Reveal'

export function Instructor() {
  const instructors = [
    {
      icon: '🏙️',
      title: '東京20年の現場経験',
      desc: '営業・コールセンター・マネジメントを20年以上にわたって現場で実践。机上の理論ではなく、実務の中で培った指導力を持っています。',
      color: 'blue',
    },
    {
      icon: '🏆',
      title: '複数業界で営業実績No.1',
      desc: '複数の業界・拠点で営業成績トップを経験。「結果を出す人間がどう動くか」を身をもって知っているからこそ、何をどう指導すれば変わるかが明確です。',
      color: 'blue',
    },
    {
      icon: '�',
      title: '現場で必要な基礎行動を身につける',
      desc: 'メモを取る。相手の意図を考える。指摘を次に活かす。自分で考えて動く。現場で自然に求められる行動を、短期間の実務経験を通じて定着させます。',
      color: 'orange',
    },
    {
      icon: '📊',
      title: '短期間で適性を見極める観察眼',
      desc: '5日間という限られた期間でも、その人の本質的な強み・課題・職場適性を見抜きます。評価レポートはその集大成です。',
      color: 'green',
    },
    {
      icon: '🤝',
      title: '厳しさと信頼関係を両立する指導',
      desc: '必要なことは率直に伝えます。ただし相手の状況を見ながら、信頼関係の中で変化を引き出すことを大切にしています。',
      color: 'blue',
    },
    {
      icon: '🌿',
      title: '帯広・十勝の実情を肌で知っている',
      desc: '帯広を拠点に活動し、十勝の中小企業が抱える人材定着・育成の実態を直接理解しています。地域の実情に合った支援ができます。',
      color: 'orange',
    },
  ]

  const bgByColor = {
    blue: 'var(--blue-bg)',
    orange: 'var(--orange-bg)',
    green: 'var(--green-bg)',
  }

  const colorByType = {
    blue: 'var(--blue)',
    orange: 'var(--orange)',
    green: 'var(--green)',
  }

  return (
    <section className="sec bg-white">
      <div className="sec-inner max-w-[1100px] mx-auto px-4 sm:px-12 py-16 sm:py-[88px]">
        <Reveal>
          <div className="sec-label">Instructor</div>
        </Reveal>
        <Reveal>
          <h2 className="sec-title">指導者の特徴</h2>
        </Reveal>
        <Reveal>
          <p className="sec-lead">
            本物の現場経験をベースにした指導で、短期間でも確かな変化をつくります。実務に近い環境で結果を出せるよう導きます。
          </p>
        </Reveal>

        <div className="grid-3 mt-11">
          {instructors.map((item, idx) => (
            <Reveal key={idx} delay={idx * 70}>
              <div className="bg-[var(--bg)] rounded-[14px] px-6 py-7 text-center border-[1.5px] border-[var(--border)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-soft hover:border-[var(--blue)]">
                <div
                  className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center text-[1.5rem] mx-auto mb-4"
                  style={{
                    backgroundColor:
                      bgByColor[item.color as keyof typeof bgByColor],
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--ink)] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--body)] leading-[1.85]">
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
