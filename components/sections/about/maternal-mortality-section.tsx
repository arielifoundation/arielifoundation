'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function MaternalMortalitySection() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-24 lg:py-32 bg-[#111827] dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.06),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats */}
          <div 
            ref={statsRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { value: '287K', text: 'Women die annually from pregnancy complications' },
                { value: '1', text: 'Woman dies every two minutes' },
                { value: '99%', text: 'Maternal deaths occur in developing countries' },
                { value: '60%', text: 'Global maternal deaths in just 10 countries' },
              ].map((stat, index) => (
                <div 
                  key={stat.value}
                  className={`glass-card card-hover-glow rounded-2xl p-4 lg:p-8 transition-all duration-500 ${
                    statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-orange mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/70 text-xs lg:text-sm">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              The Challenge
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-6 lg:mb-8 leading-[1.1]">
              Maternal <span className="text-orange">Mortality</span> Crisis
            </h2>
            <div className="space-y-4 lg:space-y-6 text-white/70 leading-relaxed">
              <p className="text-base lg:text-lg">
                Approximately 287,000 women die around the world from complications of pregnancy and childbirth every year. That is one woman every two minutes.
              </p>
              <p className="text-sm lg:text-base">
                99% of maternal deaths happen in the developing world and nearly 60% of global maternal deaths happen in just ten countries, of which Nigeria is one of these countries.
              </p>
              <p className="text-sm lg:text-base">
                This is why our work matters. Every mother deserves quality healthcare, and every child deserves a chance at life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
