'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function NewsCTASection() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#111827] via-[#111827] to-[#0f172a] dark:from-[#0B0F14] dark:via-[#0B0F14] dark:to-[#070a0d] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(245,158,11,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_70%_60%,rgba(251,191,36,0.06),transparent_50%)]" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-orange/[0.08]" />
      </div>

      <div 
        ref={ctaRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Eyebrow */}
        <span className="inline-block text-orange text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Make a Difference
        </span>

        {/* Heading */}
        <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide mb-6 leading-[1.05]">
          Help Us Expand{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-amber-400 to-gold">Our Impact</span>
        </h2>

        {/* Supporting text */}
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Support maternal and child health initiatives, outreach programs, and community-driven change across Nigeria.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/partner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </Link>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange/40" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange/30" />
        </div>
      </div>
    </section>
  )
}
