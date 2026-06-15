import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { InitiativesFeaturedSection } from '@/components/sections/initiatives/initiatives-featured-section'
import { InitiativesImpactStrip } from '@/components/sections/initiatives/initiatives-impact-strip'
import { InitiativesGallerySection } from '@/components/sections/initiatives/initiatives-gallery-section'
import { InitiativesCTASection } from '@/components/sections/initiatives/initiatives-cta-section'

export const metadata: Metadata = {
  title: 'Initiative Stories | Arieli Foundation',
  description: 'Read the stories, impact, and powerful field moments of our maternity care, research, and community outreach programs across Nigeria.',
}

const ArrowLeftIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

export default function InitiativeStoriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Back to initiatives navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link
          href="/initiatives"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange transition-colors duration-200 group"
        >
          <ArrowLeftIcon className="w-4 h-4 transform transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Initiatives</span>
        </Link>
      </div>

      <InitiativesFeaturedSection />
      <InitiativesImpactStrip />
      <InitiativesGallerySection />
      <InitiativesCTASection />
      <Footer />
    </main>
  )
}
