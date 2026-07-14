'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom Sparkles icon
const SparklesIcon = ({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
)

export function MissionSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="mission" className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
      </div>
      
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
              Our Mission
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-8 leading-[1.1]">
              Building Healthier{' '}
              <span className="text-orange">Communities</span>
            </h2>
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Our mission is to provide evidence and risk based solutions to improve maternal, infant and child health outcomes, provide communities with quality maternity care, aid in the reduction of preventable maternal, newborn and child deaths and increase awareness in communities thereby building healthy habits and proper family planning.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange to-gold rounded-full" />
            </div>
          </div>

          {/* Visual composition */}
          <div 
            ref={visualRef}
            className={`flex flex-col gap-3 lg:gap-4 transition-all duration-700 delay-200 ${
              visualVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Main mission image */}
              <div className="glass-card card-hover-glow col-span-2 aspect-[16/10] rounded-2xl overflow-hidden relative shadow-xl">
                <img
                  src="/images/outreach/birthing-kit-distribution.jpg"
                  alt="Arieli Foundation birthing kit distribution outreach - community members holding essential maternal health supplies"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Secondary containers - Community */}
              <div className="glass-card card-hover-glow aspect-square rounded-xl overflow-hidden relative">
                <img
                  src="/images/outreach/anniversary-outreach.jpg"
                  alt="Arieli Foundation Anniversary Outreach - community gathering celebrating maternal and child health impact"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Secondary containers - Healthcare */}
              <div className="glass-card card-hover-glow aspect-square rounded-xl overflow-hidden relative">
                <img
                  src="/images/outreach/healthcare-distribution.jpg"
                  alt="Arieli Foundation healthcare supply distribution - women receiving essential maternal and child health supplies"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Legacy / Foundation Year Card */}
            <div className="group relative rounded-2xl overflow-hidden cursor-default
              bg-white/60 dark:bg-[#0D1420]/70
              backdrop-blur-xl
              border border-amber-200/40 dark:border-amber-400/10
              shadow-[0_4px_24px_-4px_rgba(245,158,11,0.10)] dark:shadow-[0_4px_32px_-6px_rgba(0,0,0,0.5),0_0_0_1px_rgba(245,158,11,0.06)]
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:shadow-[0_12px_40px_-8px_rgba(245,158,11,0.18)] dark:hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(245,158,11,0.14)]
              hover:border-amber-400/30 dark:hover:border-amber-400/20
            ">

              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out
                bg-gradient-to-r from-transparent via-white/[0.06] dark:via-white/[0.04] to-transparent
                pointer-events-none z-10" />

              {/* Top edge glow line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 dark:via-amber-400/20 to-transparent" />

              <div className="relative z-[1] px-6 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

                {/* Icon badge */}
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-amber-400/20 to-orange-500/10
                  dark:from-amber-400/15 dark:to-orange-500/8
                  border border-amber-400/25 dark:border-amber-400/15
                  shadow-[0_2px_8px_-2px_rgba(245,158,11,0.20)]">
                  <SparklesIcon className="w-5 h-5 text-amber-500 dark:text-amber-400" strokeWidth={1.5} />
                </div>

                {/* Text block */}
                <div className="flex-1 min-w-0">
                  {/* Eyebrow */}
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600/70 dark:text-amber-400/60 mb-1">
                    Foundation Year
                  </p>

                  {/* Year — editorial focal point */}
                  <div className="flex items-baseline gap-2.5 leading-none mb-1.5">
                    <span className="text-[13px] sm:text-sm font-medium text-foreground/50 dark:text-white/30 tracking-wide">
                      EST.
                    </span>
                    <span className="font-[var(--font-bebas)] text-5xl sm:text-6xl tracking-tight
                      text-transparent bg-clip-text
                      bg-gradient-to-br from-amber-500 via-orange-400 to-amber-600
                      dark:from-amber-400 dark:via-orange-300 dark:to-amber-500">
                      2023
                    </span>
                  </div>

                  {/* Supporting line */}
                  <p className="text-xs sm:text-[13px] text-foreground/70 dark:text-white/50 leading-snug font-light">
                    Making Impact Across Communities Since 2023
                  </p>
                </div>

                {/* Right metric — desktop only */}
                <div className="hidden sm:flex flex-col items-end shrink-0 gap-0.5">
                  <span className="font-[var(--font-bebas)] text-2xl text-amber-500 dark:text-amber-400 leading-none">3+</span>
                  <span className="text-[10px] text-muted-foreground leading-tight text-right">Years of<br />Outreach &amp; Advocacy</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
