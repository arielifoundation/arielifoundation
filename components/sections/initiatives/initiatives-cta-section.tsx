'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function InitiativesCTASection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-[#111827] via-[#111827] to-[#111827]/95 dark:from-[#0B0F14] dark:via-[#0B0F14] dark:to-[#0B0F14]/95 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      {/* Animated glow pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange/5 animate-glow-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tagline */}
        <span 
          className={`inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-6 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Join Our Mission
        </span>

        {/* Headline */}
        <h2 
          className={`font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide mb-8 leading-[1.05] transition-all duration-700 delay-100 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Help Us Create{' '}
          <span className="text-orange">Lasting Change</span>
        </h2>

        {/* Supporting text */}
        <p 
          className={`text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Whether through partnership, volunteering, sponsorship, or support, your contribution enables us to expand our reach and deepen our impact in communities that need it most.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/partner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Ways to help */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {['Corporate Partnership', 'Individual Sponsorship', 'Volunteer Programs', 'In-Kind Support'].map((type, index) => (
            <div
              key={type}
              className="card-hover-glow px-4 py-3 rounded-lg bg-white/5 border border-white/10"
              style={{ transitionDelay: `${500 + index * 50}ms` }}
            >
              <span className="text-white/80 text-sm">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
