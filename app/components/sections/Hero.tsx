'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex min-h-[55vh] items-center justify-center bg-[#f3f4f6] px-4 py-8 sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh]">
      <div className="w-full max-w-[1200px] rounded-[32px] border border-slate-300 bg-white/90 p-4 shadow-soft sm:p-6 md:p-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-slate-100">
          <Image
            src="/images/hero-visual.jpg"
            alt="コールセンター研修の現場イメージ"
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}
