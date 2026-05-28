'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom ArrowRight icon
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const outreachAreas = [
  'Maternal Health Sensitization',
  'WASH Campaigns',
  'Children Outreach',
  'Menstrual Health Advocacy',
  'Community Engagement',
  'Healthcare Support',
]

export function OutreachSection() {
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="outreach" className="py-24 lg:py-32 bg-[#111827] dark:bg-[var(--dm-layer-elevated)] relative overflow-hidden dm-texture-grain">
      {/* Refined atmospheric lighting */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(245,158,11,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(251,191,36,0.04),transparent_50%)]" />
      </div>
      
      {/* Warm ambient orbs */}
      <div className="absolute top-1/4 left-1/5 dm-orb-warm opacity-60 animate-ambient-breathe" />
      <div className="absolute bottom-1/4 right-1/6 dm-orb-gold opacity-50 animate-ambient-breathe animation-delay-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image composition */}
          <div 
            ref={imagesRef}
            className={`relative order-2 lg:order-1 transition-all duration-700 ${
              imagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Main collage placeholder */}
            <div className="grid grid-cols-3 gap-2 lg:gap-3">
              <div className="glass-card card-hover-glow col-span-2 row-span-2 aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img
                  src="/images/outreach/anniversary-group.jpg"
                  alt="Arieli Foundation Anniversary Health outreach - large group of volunteers and community members"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="glass-card card-hover-glow aspect-square rounded-xl overflow-hidden relative border border-orange/20">
                <img
                  src="/images/outreach/school-children.jpg"
                  alt="School children in colorful uniforms during Arieli Foundation outreach"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="glass-card card-hover-glow aspect-square rounded-xl overflow-hidden relative border border-gold/20">
                <img
                  src="/images/outreach/hygiene-education.jpg"
                  alt="Hygiene education session with school children - handwashing demonstration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange to-gold rounded-xl p-3 lg:p-4 shadow-xl shadow-orange/20">
              <div className="font-[var(--font-bebas)] text-xl lg:text-2xl text-white">10+</div>
              <div className="text-xs text-white/80">Campaigns</div>
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
              Our Stories
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-6 lg:mb-8 leading-[1.1]">
              Community{' '}
              <span className="text-orange">Outreach</span>{' '}
              Stories
            </h2>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
              Through our outreach programs, we connect directly with communities, providing essential health education, support, and resources to mothers, children, and families across Nigeria.
            </p>

            {/* Outreach tags */}
            <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
              {outreachAreas.map((area, index) => (
                <span
                  key={area}
                  className={`bg-[#1f2937] dark:bg-white/[0.06] border border-white/10 dark:border-white/[0.08] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-white text-xs lg:text-sm hover:bg-[#374151] dark:hover:bg-orange/10 hover:border-orange/30 hover:text-orange transition-all cursor-default ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/outreach"
              className="inline-flex items-center gap-2 text-orange font-semibold group hover:text-gold transition-colors"
            >
              Explore Outreach Stories
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
