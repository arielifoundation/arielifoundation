import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { AboutHeroSection } from '@/components/sections/about/about-hero-section'
import { AboutStorySection } from '@/components/sections/about/about-story-section'
import { MaternalMortalitySection } from '@/components/sections/about/maternal-mortality-section'
import { ValuesSection } from '@/components/sections/about/values-section'
import { AboutFounderSection } from '@/components/sections/about/about-founder-section'
import { LeadershipSection } from '@/components/sections/about/leadership-section'
import { AboutSDGSection } from '@/components/sections/about/about-sdg-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { AboutCTASection } from '@/components/sections/about/about-cta-section'

export const metadata: Metadata = {
  title: 'About Us | Arieli Foundation',
  description: 'Learn about Arieli Foundation&apos;s mission to improve maternal, infant, and child health outcomes through evidence-based solutions and community engagement.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHeroSection />
      <AboutStorySection />
      <MaternalMortalitySection />
      <ValuesSection />
      <AboutFounderSection />
      <LeadershipSection />
      <AboutSDGSection />
      <PartnersSection />
      <AboutCTASection />
      <Footer />
    </main>
  )
}
