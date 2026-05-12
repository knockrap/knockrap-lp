import { Navigation } from '@/app/components/common/Navigation'
import { Footer } from '@/app/components/common/Footer'
import { Hero } from '@/app/components/sections/Hero'
import { UseCases } from '@/app/components/sections/UseCases'
import { Pain } from '@/app/components/sections/Pain'
import { Solution } from '@/app/components/sections/Solution'
import { WhyCallCenter } from '@/app/components/sections/WhyCallCenter'
import { BeforeAfter } from '@/app/components/sections/BeforeAfter'
import { ManagerPerspective } from '@/app/components/sections/ManagerPerspective'
import { Program } from '@/app/components/sections/Program'
import { Report } from '@/app/components/sections/Report'
import { Pricing } from '@/app/components/sections/Pricing'
import { Instructor } from '@/app/components/sections/Instructor'
import { CTA } from '@/app/components/sections/CTA'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <UseCases />
      <Pain />
      <Solution />
      <WhyCallCenter />
      <BeforeAfter />
      <ManagerPerspective />
      <Program />
      <Report />
      <Pricing />
      <Instructor />
      <CTA />
      <Footer />
    </main>
  )
}
