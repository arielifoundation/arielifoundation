'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function AboutStorySection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Who We Are
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6 lg:mb-8 leading-[1.1]">
              We Are <span className="text-orange">Arieli</span> Foundation
            </h2>
            <div className="space-y-4 lg:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base lg:text-lg">
                We believe that every woman and child is full of potential and work to help them have an equitable chance in life not only to survive, but to thrive.
              </p>
              <p className="text-sm lg:text-base">
                Our vision is to see a society where all women and children have the opportunity to live healthy and balanced lives.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div 
            ref={visualRef}
            className={`relative transition-all duration-700 delay-200 ${
              visualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="glass-card card-hover-glow aspect-square rounded-2xl overflow-hidden relative shadow-xl">
              <img
                src="/images/about/sanitary-pad-outreach.jpg"
                alt="Arieli Foundation sanitary pad distribution outreach - community members celebrating with menstrual hygiene products"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 rounded-xl bg-orange/10 dark:bg-orange/15 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
