'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const leaders = [
  {
    name: 'Dr. Natasha C. Oyibo',
    role: 'CEO / Chairman',
    image: '/images/team/ceo-chairman.jpg',
    objectPosition: 'center 20%',
  },
  {
    name: 'Sir Mike Mbama Okiro',
    role: 'Trustee',
    image: '/images/team/trustee-mike.jpg',
    objectPosition: 'center top',
  },
  {
    name: 'Barr. Nancy Oyibo',
    role: 'Board Secretary',
    image: '/images/team/board-secretary.jpg',
    objectPosition: 'center top',
  },
]

export function LeadershipSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
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
            Arieli&apos;s Trustees
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Leadership
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            The guardians entrusted with steering Arieli Foundation&apos;s vision and ensuring lasting impact for mothers and children.
          </p>
        </div>

        {/* Leadership grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`group text-center transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Portrait */}
              <div className="glass-card card-hover-glow relative w-36 h-36 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-6 rounded-full overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{ objectPosition: leader.objectPosition || 'center top' }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="font-[var(--font-bebas)] text-lg lg:text-xl text-foreground tracking-wide mb-1">
                {leader.name}
              </h3>
              <p className="text-muted-foreground text-xs lg:text-sm">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
