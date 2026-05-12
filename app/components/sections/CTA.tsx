'use client'

import Link from 'next/link'
import { Reveal } from '@/app/components/common/Reveal'

export function CTA() {
  return (
    <section className="sec gradient-dark" id="contact">
      <div className="max-w-[740px] mx-auto px-12 py-[92px] text-center">
        <Reveal>
          <div className="sec-label justify-center text-white/40 mb-3.5">
            <span className="bg-white/25" style={{ display: 'inline-block', width: '22px', height: '2px', borderRadius: '2px' }} />
            <span>Contact</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-black text-white leading-[1.4] my-3.5">
            「短期間で実務経験を積み、<br />現場で通用する力をつくる。」
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-base text-white/60 mb-9 leading-[1.95]">
            新人研修・配属前育成・社員のさらなる成長——どのケースでもまずご相談ください。
            <br />
            業種・人数・状況など、どんな内容でもお気軽にどうぞ。
            <br />
            モニター価格での受付は3〜5社限定です。
          </p>
        </Reveal>

        <Reveal>
          <Link
            href="mailto:info@knockrapworks.com"
            className="btn-main inline-block"
          >
            無料相談・お問い合わせ
          </Link>
        </Reveal>

        <Reveal>
          <p className="text-sm sm:text-base text-white/25 mt-4.5">
            ※いただいたお問い合わせには48時間以内にご返信いたします
          </p>
        </Reveal>
      </div>

      <style>{`
        .gradient-dark {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%);
        }
      `}</style>
    </section>
  )
}
