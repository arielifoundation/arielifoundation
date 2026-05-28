export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        {/* Original outreach photo - preserved authentically */}
        <img
          src="/images/initiatives/maternity-care.jpg"
          alt="Arieli Foundation community outreach in informal settlement - staff and community members gathered for maternal health awareness"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Darker cinematic gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        
        {/* Warm tint overlay for slight vibrancy enhancement */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-amber-900/10 mix-blend-overlay" />
        
        {/* Subtle vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="text-orange text-sm font-medium">About Us</span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-white leading-[0.95] tracking-wide mb-8">
            About Arieli Foundation
          </h1>

          {/* Supporting text */}
          <p className="text-white/70 text-xl leading-relaxed max-w-3xl">
            We believe that every woman and child is full of potential and deserves an equitable opportunity not only to survive, but to thrive.
          </p>
        </div>
      </div>

    </section>
  )
}
