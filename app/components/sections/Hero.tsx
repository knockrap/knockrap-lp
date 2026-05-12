'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-100">
      <div className="mx-auto flex min-h-[55vh] max-w-[1200px] flex-col gap-10 px-6 py-10 sm:px-8 md:min-h-[80vh] lg:flex-row lg:items-center lg:py-14">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            Field Training Program
          </div>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-[3.8rem]">
            電話営業式<br />
            <span className="block text-slate-900">ブートキャンプ研修</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            短期間で、
            <span className="font-semibold text-slate-900">現場で通用する社会人基礎</span>を身につける。
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
            実務経験を通じて、現場で必要な対人スキルと行動習慣を
            <br className="hidden sm:block" />
            短期集中で身につける実践型研修プログラム。
          </p>

          <div className="mt-8">
            <Link
              href="#program"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              プラン・料金を見る
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-[700px] overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-4 shadow-soft sm:p-6">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/95 to-transparent pointer-events-none" />
            <div className="relative h-[45vh] md:h-[55vh] lg:h-[80vh]">
              <Image
                src="/images/hero-visual.jpg"
                alt="コールセンター研修の現場イメージ"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
