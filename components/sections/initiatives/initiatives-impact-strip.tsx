'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 17a4 4 0 0 0 8 0c0-2-2-4-4-4-3 0-5 2-5 4"/><path d="M7 17a4 4 0 0 1-4-4c0-2 2-4 4-4 3 0 5 2 5 4"/><path d="M12 8V4"/><path d="M8 4h8"/>
  </svg>
)

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
  </svg>
)

const impactStats = [
  {
    value: 2000,
    suffix: '+',
    label: 'Women Reached',
    Icon: UsersIcon,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Community Outreaches',
    Icon: HeartIcon,
  },
  {
    value: 25,
    suffix: '+',
    label: 'Healthcare Trainings',
    Icon: BuildingIcon,
  },
  {
    value: 8,
    suffix: '+',
    label: 'Partner Organizations',
    Icon: HandshakeIcon,
  },
  {
    value: 7,
    suffix: '+',
    label: 'States Impacted',
    Icon: MapPinIcon,
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-white">
      {count}
      <span className="text-orange">{suffix}</span>
    </span>
  )
}

export function InitiativesImpactStrip() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-r from-[#111827] via-[#0B0F14] to-[#111827] relative overflow-hidden"
    >
      {/* Gold glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,158,11,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(251,191,36,0.1),transparent_40%)]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
            By The Numbers
          </span>
          <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
            Our Collective Impact
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {impactStats.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <div 
                key={stat.label}
                className={`text-center p-4 lg:p-6 relative transition-all duration-500 ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange/30 transition-colors">
                  <Icon className="w-5 h-5 text-orange" />
                </div>

                {/* Counter */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={sectionVisible} />

                {/* Label */}
                <p className="mt-2 text-white/60 text-sm">{stat.label}</p>

                {/* Divider (not on last item) */}
                {index < impactStats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-orange/20 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
