import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBanner } from '@/components/sections/announcement-banner'
import { HeroSection } from '@/components/sections/hero-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { InitiativesSection } from '@/components/sections/initiatives-section'
import { MissionSection } from '@/components/sections/mission-section'
import { FounderSection } from '@/components/sections/founder-section'
import { SDGSection } from '@/components/sections/sdg-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { ReportsSection } from '@/components/sections/reports-section'
import { PartnershipFormSection } from '@/components/sections/partnership-form-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AnnouncementBanner />
      <HeroSection />
      <ImpactSection />
      <MissionSection />
      <InitiativesSection />
      <FounderSection />
      <SDGSection />
      <PartnersSection />
      <ReportsSection />
      <PartnershipFormSection />
      <Footer />
    </main>
  )
}
