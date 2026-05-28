'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function NewsHeroSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/outreach/healthcare-distribution.jpg"
          alt="Arieli Foundation healthcare distribution outreach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Darker cinematic overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-amber-900/20" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          <span className="text-orange text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase">Media & Press</span>
        </div>

        {/* Main heading */}
        <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-wide mb-6">
          News &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-amber-500 to-gold">Coverage</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Highlights of Arieli Foundation&apos;s growing impact, partnerships, outreach, and recognition across communities and media platforms.
        </p>

        {/* Decorative line */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/40" />
          <div className="w-2 h-2 rounded-full bg-orange/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </div>
    </section>
  )
}
