import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { InitiativesHeroSection } from '@/components/sections/initiatives/initiatives-hero-section'
import { InitiativesGridSection } from '@/components/sections/initiatives/initiatives-grid-section'
import { InitiativesFeaturedSection } from '@/components/sections/initiatives/initiatives-featured-section'
import { InitiativesImpactStrip } from '@/components/sections/initiatives/initiatives-impact-strip'
import { InitiativesGallerySection } from '@/components/sections/initiatives/initiatives-gallery-section'
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
      <InitiativesFeaturedSection />
      <InitiativesImpactStrip />
      <InitiativesGallerySection />
      <InitiativesCTASection />
      <Footer />
    </main>
  )
}
