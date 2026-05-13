'use client'

import Link from 'next/link'
import { Reveal } from '@/app/components/common/Reveal'

export function CTA() {
  return (
    <section className="sec gradient-dark relative overflow-hidden" id="contact">
      {/* decorative blobs */}
      <div
        className="blob absolute top-[-20%] left-[-8%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-red-900/20 pointer-events-none"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="blob absolute bottom-[-15%] right-[-5%] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] bg-blue-900/15 pointer-events-none"
        style={{ animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-[740px] mx-auto px-6 sm:px-12 py-[72px] sm:py-[92px] text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-[0.35em] text-white/40 uppercase mb-3.5">
            <span className="block w-[22px] h-[2px] bg-white/25 rounded" />
            Contact
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="font-serif text-[clamp(1.4rem,3vw,2.4rem)] font-black text-white leading-[1.4] my-3.5">
            「短期間で実務経験を積み、<br />現場で通用する力をつくる。」
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm sm:text-base text-white/60 mb-9 leading-[1.95]">
            新人研修・配属前育成・社員のさらなる成長——どのケースでもまずご相談ください。
            <br />
            業種・人数・状況など、どんな内容でもお気軽にどうぞ。
            <br />
            モニター価格での受付は3〜5社限定です。
          </p>
        </Reveal>

        <Reveal delay={180} direction="scale">
          <Link
            href="mailto:info@knockrapworks.com"
            className="btn-main inline-block"
          >
            無料相談・お問い合わせ
          </Link>
        </Reveal>

        <Reveal delay={240}>
          <p className="text-sm text-white/25 mt-5">
            ※いただいたお問い合わせには48時間以内にご返信いたします
          </p>
        </Reveal>
      </div>
    </section>
  )
}
