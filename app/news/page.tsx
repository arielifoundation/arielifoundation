'use client'

import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { NewsHeroSection } from '@/components/sections/news/news-hero-section'
import { NewsGridSection } from '@/components/sections/news/news-grid-section'
import { NewsCTASection } from '@/components/sections/news/news-cta-section'

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <NewsHeroSection />
      <NewsGridSection />
      <NewsCTASection />
      <Footer />
    </main>
  )
}
