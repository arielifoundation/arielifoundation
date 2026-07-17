import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { WaitlistForm } from '@/components/sections/waitlist-form'

export const metadata: Metadata = {
  title: 'Arieli Waitlist | Arieli Foundation',
  description: 'Join the Arieli waitlist. Arieli is an AI powered maternal health platform that helps pregnant women and new mothers access timely care through WhatsApp, Telegram, and a toll free voice hotline. It connects women with healthcare providers while enabling health workers to coordinate and track care through a centralized dashboard. Built for underserved communities, Arieli makes maternal healthcare more accessible, identifies risks early, and helps ensure every mother receives timely support throughout pregnancy and after childbirth.',
}

// Custom SVG Icons to avoid Lucide-React library import
const ArrowLeftIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const MessageSquareIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const SendIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const PhoneCallIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const LayoutDashboardIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </svg>
)

const HeartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ZapIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

export default function ArieliCareWaitlistPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />

      {/* Hero Header spacer to push content below the fixed navigation bar */}
      <div className="h-24" />

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.06),transparent_65%)] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        
        {/* Back navigation link */}
        <div className="mb-10">
          <Link
            href="/initiatives"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="w-4 h-4 transform transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Initiatives</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium Pitch & Trust Elements */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/25">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-orange text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Arieli Foundation Initiative
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] tracking-wide">
              Join the <span className="text-orange">Arieli</span> Waitlist
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-foreground/85 text-lg leading-relaxed font-medium">
                Arieli is an AI-enabled, community-based maternal health coordination and early intervention system that helps identify pregnancy risks sooner, connects women to trained health workers faster, and supports continuous care during pregnancy and after childbirth.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Every day, women in underserved communities die from preventable pregnancy and childbirth complications because they cannot access timely care. Arieli helps reduce those preventable deaths by making it easier for women to reach trained health workers before complications become emergencies.
              </p>
            </div>

            {/* Call to Action Statement */}
            <div className="p-4 sm:p-5 rounded-xl bg-secondary/35 dark:bg-white/[0.02] border border-border dark:border-white/5">
              <p className="text-foreground/90 text-sm sm:text-base font-semibold flex gap-2">
                <HeartIcon className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span>Sign up now to be the first to know when we launch and to help shape the future of maternal care.</span>
              </p>
            </div>

            {/* Platform Feature Cards (3 Pillars) */}
            <div className="space-y-4 pt-4">
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-wide text-foreground">
                How Arieli Works
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Pillar 1: WhatsApp */}
                <div className="p-5 rounded-xl bg-card border border-border dark:border-white/5 hover:border-orange/30 dark:hover:border-orange/20 transition-all duration-300 hover:shadow-lg shadow-black/5 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 text-orange">
                    <MessageSquareIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground font-bold text-sm mb-1.5">WhatsApp Triage</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Quick clinical guidance, risk screening, and answers to pregnancy questions directly on WhatsApp.
                  </p>
                </div>

                {/* Pillar 2: Telegram */}
                <div className="p-5 rounded-xl bg-card border border-border dark:border-white/5 hover:border-orange/30 dark:hover:border-orange/20 transition-all duration-300 hover:shadow-lg shadow-black/5 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 text-orange">
                    <SendIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground font-bold text-sm mb-1.5">Telegram Triage</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Accessible maternal care support, resources, and interactive guidance directly on Telegram.
                  </p>
                </div>

                {/* Pillar 3: Toll-Free */}
                <div className="p-5 rounded-xl bg-card border border-border dark:border-white/5 hover:border-orange/30 dark:hover:border-orange/20 transition-all duration-300 hover:shadow-lg shadow-black/5 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 text-orange">
                    <PhoneCallIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground font-bold text-sm mb-1.5">Toll-Free Hotline</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Instant voice connection to trained midwives and maternal health coordinators in multiple local languages.
                  </p>
                </div>

                {/* Pillar 4: Dashboard */}
                <div className="p-5 rounded-xl bg-card border border-border dark:border-white/5 hover:border-orange/30 dark:hover:border-orange/20 transition-all duration-300 hover:shadow-lg shadow-black/5 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center mb-4 text-orange">
                    <LayoutDashboardIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground font-bold text-sm mb-1.5">Coordination Panel</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Connecting healthcare workers to coordinate transport, referrals, and track facility-ready capacities.
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Proof / Trust banner */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-muted-foreground/60 text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-orange" />
                Duly Registered Charity Initiative
              </span>
              <span className="flex items-center gap-1.5">
                <ZapIcon className="w-4 h-4 text-orange" />
                Evidence-Based Maternal Care
              </span>
            </div>

          </div>

          {/* Right Column: Waitlist Form */}
          <div className="lg:col-span-5">
            <WaitlistForm />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
