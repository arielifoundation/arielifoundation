'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
)

const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const values = [
  {
    title: 'Integrity',
    description: 'We act with integrity always. We create environments that value honesty and accountability.',
    Icon: ShieldIcon,
  },
  {
    title: 'Growth and Learning',
    description: 'We find innovative ways to solve complex problems. We seek out and create opportunities to learn, adapt and evolve.',
    Icon: LightbulbIcon,
  },
  {
    title: 'Sustainability',
    description: 'Our expertise delivers sustainable impact. We deliver high quality interventions that are adaptive, flexible and contextually relevant through utilizing local connections and building partnerships.',
    Icon: LeafIcon,
  },
  {
    title: 'We Work Together',
    description: 'At Arieli Foundation it is all about making life better for mothers and children, reducing health risks concerning childbirth and ensuring basic resources are available in communities by providing quality skilled care personnel, materials and facilities.',
    Icon: UsersIcon,
  },
]

export function ValuesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            What Drives Us
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Our Core Values
          </h2>
        </div>

        {/* Values grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.Icon
            return (
              <div
                key={value.title}
                className={`glass-card card-hover-glow group relative p-6 lg:p-8 rounded-2xl overflow-hidden transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center mb-4 lg:mb-6 group-hover:from-orange/30 group-hover:to-orange/15 transition-all">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-orange" />
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-foreground tracking-wide mb-3 lg:mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
