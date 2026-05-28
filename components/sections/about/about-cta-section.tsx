import Link from 'next/link'

export function AboutCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-card dark:bg-[#111827] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Tagline */}
        <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-6">
          Get Involved
        </span>

        {/* Headline */}
        <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-8 leading-[1.05]">
          Join Us in Building{' '}
          <span className="text-orange">Healthier Communities</span>
        </h2>

        {/* Supporting text */}
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Whether through partnerships, sponsorships, or volunteering, there are many ways to contribute to our mission of improving maternal and child health outcomes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#partner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
          <Link
            href="/#partner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#111827] dark:bg-white/10 text-white font-semibold rounded-full border border-white/10 dark:border-white/20 hover:bg-[#1A2433] dark:hover:bg-white/20 transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
