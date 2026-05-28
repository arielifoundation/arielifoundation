import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { InitiativesSection } from '@/components/sections/initiatives-section'
import { MissionSection } from '@/components/sections/mission-section'
import { OutreachSection } from '@/components/sections/outreach-section'
import { FounderSection } from '@/components/sections/founder-section'
import { SDGSection } from '@/components/sections/sdg-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { ReportsSection } from '@/components/sections/reports-section'
import { PartnershipFormSection } from '@/components/sections/partnership-form-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ImpactSection />
      <MissionSection />
      <InitiativesSection />
      <OutreachSection />
      <FounderSection />
      <SDGSection />
      <PartnersSection />
      <ReportsSection />
      <PartnershipFormSection />
      <Footer />
    </main>
  )
}
