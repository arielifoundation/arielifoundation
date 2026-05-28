'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [activeMedia, setActiveMedia] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero media rotation effect
  useEffect(() => {
  const sequence = [
    { media: 0, duration: 5000 }, // Hero image
    { media: 1, duration: 7000 }, // Video 1
    { media: 2, duration: 7000 }, // Video 2
  ]

  let current = 0
  let timeoutId: NodeJS.Timeout

  const runSequence = () => {
    setActiveMedia(sequence[current].media)

    timeoutId = setTimeout(() => {
      current = (current + 1) % sequence.length
      runSequence()
    }, sequence[current].duration)
  }

  runSequence()

  return () => clearTimeout(timeoutId)
}, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        {/* Original outreach photo - preserved authentically */}
        <img
          src="/images/hero-walk.jpg"
          alt="Arieli Foundation community outreach walk for maternal and child health"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            activeMedia === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Video 1 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            activeMedia === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-video-1.mp4" type="video/mp4" />
        </video>

        {/* Video 2 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            activeMedia === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-video-2.mp4" type="video/mp4" />
        </video>

        {/* Darker cinematic gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        {/* Warm tint overlay for slight vibrancy enhancement */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-amber-900/10 mix-blend-overlay" />

        {/* Subtle vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Floating impact cards */}
      <div className="absolute top-1/4 left-8 lg:left-16 hidden lg:block animate-fade-in animation-delay-500">
        <div className="card-hover-glow bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-orange font-[var(--font-bebas)] text-3xl">
            700+
          </div>
          <div className="text-white/70 text-xs">Girls Supported</div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-8 lg:right-16 hidden lg:block animate-fade-in animation-delay-600">
        <div className="card-hover-glow bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="text-orange font-[var(--font-bebas)] text-3xl">
            7+
          </div>
          <div className="text-white/70 text-xs">Communities Reached</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="text-orange text-sm font-medium">
              Maternal & Child Health Advocates
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-wide mb-8 animate-fade-in-up">
            Create Hope for a <span className="text-orange">Mother</span> and{' '}
            <span className="text-orange">Child</span> Today
          </h1>

          {/* Supporting text */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Providing evidence-based solutions to improve maternal and child
            health outcomes across underserved communities in Nigeria and
            beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="#partner"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
            <Link
              href="#mission"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          showScrollIndicator
            ? 'opacity-100 animate-bounce'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() =>
            document
              .getElementById('impact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
