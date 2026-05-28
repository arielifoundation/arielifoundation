'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const partners = [
  {
    name: 'Federal Ministry of Humanitarian Affairs and Poverty Alleviation',
    logo: '/images/partners/fed-ministry-humanitarian.png',
  },
  {
    name: 'Nigeria Police Force',
    logo: '/images/partners/nigeria-police.png',
  },
  {
    name: 'Community Empowerment & Support Initiative',
    logo: '/images/partners/community-empowerment.png',
  },
  {
    name: 'Etsu Nupe',
    logo: '/images/partners/etsu-nupe.png',
  },
  {
    name: 'Federal Ministry of Health and Social Welfare',
    logo: '/images/partners/fed-ministry-health.png',
  },
  {
    name: 'Federal Ministry of Women Affairs',
    logo: '/images/partners/fed-ministry-women.png',
  },
  {
    name: 'Benevity',
    logo: '/images/partners/benevity.png',
  },
  {
    name: 'National Union of Road Transport Workers',
    logo: '/images/partners/nurtw.png',
  },
  {
    name: 'WASSATI',
    logo: '/images/partners/wassati.png',
  },
  {
    name: 'GoodPlanet International',
    logo: '/images/partners/goodplanet.png',
  },
]

export function PartnersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="partners" className="py-24 lg:py-32 bg-card dark:bg-[#111827] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            Our Network
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Partners & Collaborators
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We work alongside government institutions, NGOs, and community organizations to create lasting impact.
          </p>
        </div>

        {/* Partners grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`glass-card card-hover-glow group flex flex-col items-center rounded-xl p-4 lg:p-6 transition-all duration-500 hover:border-orange/20 dark:hover:border-orange/30 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Logo container - fixed height for consistency */}
              <div className="w-full h-20 lg:h-24 flex items-center justify-center mb-3 lg:mb-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Organization name */}
              <p className="text-center text-xs lg:text-sm font-medium text-muted-foreground/80 dark:text-white/60 leading-snug">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
