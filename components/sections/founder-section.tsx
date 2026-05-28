// Custom Quote icon
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
)

export function FounderSection() {
  return (
    <section className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-muted/20 dark:from-[#1A2433]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
      </div>
      
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="flex items-end gap-6">
              {/* Main portrait */}
              <div className="card-hover-glow aspect-[3/4] flex-1 max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden relative border border-border dark:border-white/5 shadow-xl">
                <img
                  src="/images/team/founder-portrait.jpg"
                  alt="Dr. Natasha C. Oyibo, Founder & CEO of Arieli Foundation"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Small circular secondary portrait beside the main frame */}
              <div className="card-hover-glow w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded-full overflow-hidden border-4 border-background dark:border-[#0B0F14] shadow-2xl">
                <img
                  src="/images/team/founder-secondary.jpg"
                  alt="Dr. Natasha C. Oyibo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-orange/10 dark:bg-orange/15 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Our Founder
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6 leading-[1.1]">
              Dr. Natasha C. Oyibo
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              Founder & CEO
            </p>

            {/* Quote */}
            <div className="relative mb-8">
              <QuoteIcon className="absolute -top-2 -left-2 w-8 h-8 text-orange/20" />
              <blockquote className="pl-8 text-lg text-foreground/80 dark:text-white/80 italic leading-relaxed">
                Through collaboration with committed stakeholders and communities, the lives and stories of women, infants, and children can be significantly improved.
              </blockquote>
            </div>

            {/* Story */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Upon completion of her PhD, Dr. Oyibo discovered that for health interventions to be successful, it is necessary to consistently develop innovative and inclusive solutions to encourage stakeholder inclusion in decision-making, regardless of language, demographics, and age.
              </p>
              <p>
                Her doctorate research focused on understanding stakeholders&apos; mental models, to uncover the underlying reasons behind how and why decisions are made. This became an important step toward bridging communication and information gaps for more efficient healthcare outcomes.
              </p>
              <p>
                Becoming a mother of two further transformed her perspective and strengthened her passion for maternal and child health advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
