'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full max-w-none overflow-hidden bg-[#f3f4f6] flex items-center justify-center min-h-[55vh] md:min-h-[70vh] lg:min-h-[85vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-visual.jpg"
          alt="コールセンター研修の現場イメージ"
          fill
          sizes="100vw"
          className="object-contain object-center md:object-cover md:object-center"
          priority
        />
      </div>

      {/* decorative animated blobs */}
      <div
        className="blob absolute -top-[15%] -left-[10%] w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-blue-400/10 pointer-events-none"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="blob absolute -bottom-[10%] -right-[8%] w-[260px] h-[260px] md:w-[420px] md:h-[420px] bg-red-400/8 pointer-events-none"
        style={{ animationDelay: '3s' }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent pointer-events-none" />
    </section>
  )
}
