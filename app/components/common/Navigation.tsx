'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-[60px] bg-white/96 backdrop-blur-lg border-b border-[var(--border)] flex items-center justify-between px-6 sm:px-12">
      <div className="font-display text-[1.05rem] font-black tracking-[0.08em] text-black">
        Knoock<span className="text-[#d9480f]">Rap</span>
      </div>
      <Link
        href="#contact"
        className="bg-gradient-to-r from-red-800 to-red-900 text-white px-[18px] sm:px-[22px] py-[9px] rounded-[6px] text-[0.75rem] sm:text-[0.8rem] font-bold tracking-[0.06em] no-underline transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-[1px] whitespace-nowrap border border-red-700/50"
      >
        無料相談
      </Link>
    </nav>
  )
}
