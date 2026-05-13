import { Navigation } from '@/app/components/common/Navigation'
import { Footer } from '@/app/components/common/Footer'
import { Hero } from '@/app/components/sections/Hero'
import { Pain } from '@/app/components/sections/Pain'
import { Solution } from '@/app/components/sections/Solution'
import { Program } from '@/app/components/sections/Program'
import { Pricing } from '@/app/components/sections/Pricing'
import { CTA } from '@/app/components/sections/CTA'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden pt-[60px]">
      <Navigation />
      <Hero />
      <Pain />
      <Solution />
      <Program />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
