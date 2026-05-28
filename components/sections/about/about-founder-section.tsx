'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom Quote icon
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

export function AboutFounderSection() {
  const { ref: portraitRef, isVisible: portraitVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-card dark:bg-[#111827] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/10 dark:from-[#1A2433]/20 to-transparent" />
      </div>
      
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div 
            ref={portraitRef}
            className={`lg:col-span-2 transition-all duration-700 ${
              portraitVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="sticky top-32">
              <div className="flex items-end gap-3 lg:gap-4">
                {/* Main portrait */}
                <div className="glass-card card-hover-glow aspect-[3/4] flex-1 rounded-2xl overflow-hidden relative shadow-xl">
                  <img
                    src="/images/team/founder-portrait.jpg"
                    alt="Dr. Natasha C. Oyibo, Founder & CEO of Arieli Foundation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Small circular secondary portrait beside the main frame */}
                <div className="glass-card card-hover-glow w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-card dark:border-[#111827] shadow-2xl">
                  <img
                    src="/images/team/founder-secondary.jpg"
                    alt="Dr. Natasha C. Oyibo"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="mt-8 lg:mt-10 text-center">
                <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-foreground tracking-wide">
                  Dr. Natasha C. Oyibo
                </h3>
                <p className="text-muted-foreground text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div 
            ref={storyRef}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Our Founder
            </span>
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-6 lg:mb-8 leading-[1.1]">
              A Vision Born from <span className="text-orange">Research</span> and <span className="text-orange">Motherhood</span>
            </h2>

            {/* Quote */}
            <div className="glass-card card-hover-glow relative mb-8 lg:mb-12 p-6 lg:p-8 rounded-xl">
              <QuoteIcon className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 text-orange/20" />
              <blockquote className="pl-6 lg:pl-8 text-lg lg:text-xl text-foreground italic leading-relaxed">
                Through collaboration with committed stakeholders and communities, the lives and stories of women, infants, and children can be significantly improved.
              </blockquote>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-4 lg:space-y-6 text-muted-foreground leading-relaxed text-sm lg:text-base">
              <p>
                Arieli Foundation was founded by Dr. Natasha C. Oyibo. Upon completion of her PhD, she discovered that in order for health interventions to be successful, it is necessary to consistently develop innovative and inclusive solutions to encourage stakeholder inclusion in decision-making, regardless of language, demographics, and age.
              </p>
              <p>
                Her doctorate research focused on understanding stakeholders&apos; mental models, to uncover the underlying reasons behind how and why decisions are made. This became an important step toward bridging communication and information gaps for more efficient healthcare outcomes.
              </p>
              <p>
                On a personal level, becoming a mother of two further transformed her perspective and strengthened her passion for maternal and child health advocacy. She believes that through collaboration with committed stakeholders and communities, the lives and stories of women, infants, and children can be significantly improved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
