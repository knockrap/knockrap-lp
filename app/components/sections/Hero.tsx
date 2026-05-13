'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full max-w-none overflow-hidden bg-[#eef3f8]">
      <Image
        src="/images/hero-visual.jpg"
        alt="コールセンター研修の現場イメージ"
        width={1920}
        height={900}
        sizes="100vw"
        className="w-full h-auto block"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
