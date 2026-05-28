'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function InitiativesHeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
      setParallaxOffset(scrollY * 0.3)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src="/images/outreach/anniversary-group.jpg"
          alt="Arieli Foundation community health initiative gathering"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-100"
          style={{ transform: `scale(1.1) translateY(${parallaxOffset}px)` }}
        />
        
        {/* Cinematic gradient overlay - darker for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
        
        {/* Gold glow accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.08),transparent_50%)]" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="text-orange text-sm font-medium tracking-wider uppercase">What We Do</span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-wide mb-8 animate-fade-in-up">
            Our <span className="text-orange">Initiatives</span>
          </h1>

          {/* Supporting text */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Through strategic programs in maternal care, research, women empowerment, and community outreach, we create sustainable solutions that transform lives and build healthier communities across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="#initiatives-grid"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all hover:-translate-y-0.5 group"
            >
              Explore Initiatives
            </Link>
            <Link
              href="/#partner"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => document.getElementById('initiatives-grid')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
