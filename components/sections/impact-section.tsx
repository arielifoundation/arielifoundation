'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

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

const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 17a4 4 0 0 0 8 0c0-2-2-4-4-4-3 0-5 2-5 4"/><path d="M7 17a4 4 0 0 1-4-4c0-2 2-4 4-4 3 0 5 2 5 4"/><path d="M12 8V4"/><path d="M8 4h8"/>
  </svg>
)

const impactMetrics = [
  {
    value: 700,
    suffix: '+',
    label: 'Girls Supported Through Menstrual Health Initiatives',
    Icon: HeartIcon,
  },
  {
    value: 60,
    suffix: '+',
    label: 'Outreach Campaigns Conducted',
    Icon: UsersIcon,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Communities Reached Across Nigeria',
    Icon: MapPinIcon,
  },
  {
    value: 8,
    suffix: '+',
    label: 'Strategic Partnerships and Collaborations',
    Icon: HandshakeIcon,
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

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
    <div ref={ref} className="font-[var(--font-bebas)] text-5xl md:text-6xl lg:text-7xl text-foreground">
      {count}
      <span className="text-orange">{suffix}</span>
    </div>
  )
}

export function ImpactSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section 
      ref={sectionRef}
      id="impact" 
      className="py-24 lg:py-32 bg-background dark:bg-[var(--dm-layer-base)] relative overflow-hidden dm-texture-grain"
    >
      {/* Dark mode ambient lighting */}
      <div className="absolute inset-0 ambient-glow-combined pointer-events-none" />
      
      {/* Atmospheric orbs - extremely subtle */}
      <div className="absolute top-1/4 left-1/6 dm-orb-warm opacity-50 animate-ambient-breathe" />
      <div className="absolute bottom-1/3 right-1/4 dm-orb-gold opacity-40 animate-ambient-breathe animation-delay-400" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            Our Impact
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            Creating Measurable Change
          </h2>
        </div>

        {/* Impact grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.Icon
            return (
              <div
                key={metric.label}
                className={`glass-card card-hover-glow group relative p-6 lg:p-8 rounded-2xl overflow-hidden transition-all duration-500 dark:bg-[var(--dm-layer-surface)]/60 dark:border-white/[0.05] ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange" />
                </div>

                {/* Counter */}
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />

                {/* Label */}
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {metric.label}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange/5 group-hover:bg-orange/15 transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
