'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const MegaphoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
)

const HandHeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12l3.5-3.5z"/>
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const initiatives = [
  {
    title: 'Maternity Care',
    description: 'Providing quality maternity care and supporting mothers through pregnancy, childbirth, and postpartum recovery.',
    Icon: HeartIcon,
    texture: '/images/outreach-1.jpg',
  },
  {
    title: 'Arieli Research',
    description: 'Conducting evidence-based research to develop innovative solutions for maternal and child health challenges.',
    Icon: BookOpenIcon,
    texture: '/images/outreach-2.jpg',
  },
  {
    title: 'Women Empowerment',
    description: 'Empowering women and girls through education, healthcare access, and advocacy for gender equality.',
    Icon: UsersIcon,
    texture: '/images/outreach-3.jpg',
  },
  {
    title: 'Awareness Creation',
    description: 'Building community awareness about maternal health, family planning, and healthy habits through campaigns.',
    Icon: MegaphoneIcon,
    texture: '/images/outreach-4.jpg',
  },
  {
    title: 'Community Outreach',
    description: 'Engaging directly with communities through health sensitization, WASH campaigns, and healthcare support.',
    Icon: HandHeartIcon,
    texture: '/images/outreach-5.jpg',
  },
]

export function InitiativesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="initiatives" className="py-24 lg:py-32 bg-card dark:bg-[var(--dm-layer-deep)] relative overflow-hidden dm-texture-grain dm-ambient-full">
      {/* Atmospheric ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange/[0.02] dark:bg-orange/[0.025] rounded-full blur-[120px] pointer-events-none animate-ambient-breathe" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Our Initiatives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We focus on key areas that create lasting impact for mothers, children, and communities across Nigeria.
          </p>
          <Link 
            href="/initiatives"
            className="inline-flex items-center gap-2 text-orange font-semibold group hover:text-gold transition-colors"
          >
            Explore All Initiatives
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Initiatives grid - premium glassmorphism cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.Icon
            return (
              <Link
                key={initiative.title}
                href="/initiatives"
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card container with darker background for light mode */}
                <div className="relative h-full p-6 lg:p-8 bg-[#1a1f26] dark:bg-[var(--dm-layer-surface)]/70 backdrop-blur-xl border border-white/[0.08] dark:border-white/[0.05] rounded-2xl transition-all duration-500 group-hover:border-gold/25 group-hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.12)] group-hover:-translate-y-1 dark:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.03)]">
                  
                  {/* Extremely subtle background texture (5-8% opacity) */}
                  <div 
                    className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07] blur-sm grayscale transition-opacity duration-500 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.10]"
                    style={{
                      backgroundImage: `url(${initiative.texture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  {/* Gold tinted overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-orange/0 group-hover:from-gold/[0.02] group-hover:to-orange/[0.03] transition-all duration-500 rounded-2xl" />
                  
                  {/* Content layer */}
                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#252b33] to-[#1a1f26] border border-white/[0.1] flex items-center justify-center mb-5 transition-all duration-500 group-hover:border-gold/20 group-hover:shadow-[0_0_20px_-4px_rgba(212,175,55,0.3)]">
                      <Icon className="w-5 h-5 text-gold/80 group-hover:text-gold transition-colors duration-300" />
                    </div>

                    {/* Title - always white for contrast */}
                    <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-white tracking-wide mb-3 group-hover:text-gold/90 transition-colors duration-300">
                      {initiative.title}
                    </h3>
                    
                    {/* Description - white with opacity for readability */}
                    <p className="text-white/70 leading-relaxed text-sm mb-5">
                      {initiative.description}
                    </p>

                    {/* Learn More link with arrow animation */}
                    <div className="flex items-center gap-2 text-gold/70 text-sm font-medium group-hover:text-gold transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
