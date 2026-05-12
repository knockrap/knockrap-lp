'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f3f4f6] min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-visual.jpg"
          alt="コールセンター研修の現場イメージ"
          fill
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent pointer-events-none" />
    </section>
  )
}
