'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-100 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-visual.jpg"
          alt="コールセンター研修の現場イメージ"
          fill
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-center brightness-95 contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
      </div>
    </section>
  )
}
