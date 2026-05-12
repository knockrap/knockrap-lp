'use client'

import Link from 'next/link'
import { Reveal } from '@/app/components/common/Reveal'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] flex items-center px-6 sm:px-12 pt-20 pb-16 overflow-hidden">
      {/* Subtle red glow background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-red-800/8 rounded-full blur-[120px]" />
      </div>

      {/* Very subtle grid background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(90deg, #ffffff 1px, transparent 1px), linear-gradient(0deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Top accent line - darker */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-900/60 to-transparent opacity-60" />

      {/* Subtle particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-red-600/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-red-500/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-4 backdrop-blur-sm bg-black/20 border border-red-900/30 rounded-lg px-6 py-3">
              <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 rounded-full" />
              <span className="text-red-400 text-[0.9rem] font-bold tracking-[0.18em] uppercase">Field Training Program</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="font-serif text-[3.2rem] sm:text-[4.5rem] lg:text-[clamp(4.5rem,9vw,7.2rem)] font-black text-white leading-[1.02] tracking-tight mb-10 relative">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-700/20 blur-xl transform scale-110" />
                <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  電話営業式<br />
                  <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent font-extrabold tracking-tight">
                    ブートキャンプ研修
                  </span>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.7rem] text-gray-200 leading-[1.7] max-w-4xl font-semibold mb-10 tracking-tight">
              短期間で、<br />
              <span className="text-red-400 font-bold">現場で通用する社会人基礎</span>を身につける。
            </p>
          </Reveal>

          <Reveal>
            <p className="text-[1rem] sm:text-[1.1rem] text-gray-400 leading-[1.8] max-w-3xl font-medium mb-14">
              実務経験を通じて、現場で必要な対人スキルと行動習慣を<br className="hidden sm:block" />短期集中で身につける実践型研修プログラム。
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="#program" className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-red-800 to-red-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-1 border border-red-700/50">
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative drop-shadow-lg">プラン・料金を見る</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 pointer-events-none">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
