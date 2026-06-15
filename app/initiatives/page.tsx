import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { InitiativesHeroSection } from '@/components/sections/initiatives/initiatives-hero-section'
import { InitiativesGridSection } from '@/components/sections/initiatives/initiatives-grid-section'
import { InitiativesCTASection } from '@/components/sections/initiatives/initiatives-cta-section'

export const metadata: Metadata = {
  title: 'Our Initiatives | Arieli Foundation',
  description: 'Discover how Arieli Foundation creates lasting impact through maternal care, research, women empowerment, awareness creation, and community outreach programs across Nigeria.',
}

export default function InitiativesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InitiativesHeroSection />
      <InitiativesGridSection />
      <InitiativesCTASection />
      <Footer />
    </main>
  )
}
