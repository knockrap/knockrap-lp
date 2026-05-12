'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1520] border-t border-white/6 px-6 sm:px-12 py-6 sm:py-[26px] flex justify-between items-center flex-col sm:flex-row gap-3 sm:gap-[10px]">
      <div className="font-display text-[0.95rem] sm:text-[1rem] font-black tracking-[0.08em] text-white/70">
        Knoock<span className="text-[#d9480f]">Rap</span>
      </div>
      <p className="text-[0.65rem] sm:text-[0.7rem] text-white/30 text-center sm:text-left">
        © {year} KnoockRap. All rights reserved.
      </p>
    </footer>
  )
}
