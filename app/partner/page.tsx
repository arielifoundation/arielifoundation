'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

// Custom premium icons
const ArrowLeftIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const CopyIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CreditCardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
)

const BankIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="12 2 20 7 4 7 12 2" />
    <line x1="5" y1="21" x2="5" y2="10" />
    <line x1="9" y1="21" x2="9" y2="10" />
    <line x1="13" y1="21" x2="13" y2="10" />
    <line x1="17" y1="21" x2="17" y2="10" />
  </svg>
)

const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function PartnerPaymentsPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldId)
      setTimeout(() => setCopiedField(null), 2000)
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />

      {/* Hero Header spacer to push content below navigation bar */}
      <div className="h-24" />

      {/* Decorative premium background glows */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.06),transparent_65%)] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="w-4 h-4 transform transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/25 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="text-orange text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Partner with us
            </span>
          </div>

          <h1 className="font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] tracking-wide mb-6">
            Support Our <span className="text-orange">Mission</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Make a direct impact on maternal and child health. Partner with Arieli Foundation through secure payments or direct bank transfers to support continuous care during pregnancy and after childbirth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Online Paystack Gateway */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border dark:border-white/5 shadow-xl shadow-black/[0.02]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">
                  <CreditCardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Online Payment</h2>
                  <p className="text-xs text-muted-foreground">Credit Card, Bank Transfer, Apple Pay</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                For fast, secure online transactions supporting local and international cards, use our dedicated Paystack gateway.
              </p>

              <a
                href="https://paystack.shop/pay/uho5v2ga3v"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Proceed to Paystack</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground/80 bg-secondary/35 dark:bg-white/[0.01] border border-border dark:border-white/5 rounded-xl py-3 px-4">
                <ShieldCheckIcon className="w-4 h-4 text-orange" />
                <span>Secured & encrypted by Paystack</span>
              </div>
            </div>

            {/* Tax Deductible Alert Banner */}
            <div className="p-5 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex gap-3.5">
              <ShieldCheckIcon className="w-5 h-5 text-orange shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground/95 mb-0.5">Tax-Deductible Donation</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Arieli Foundation is a registered charity. Your donations are tax-deductible according to relevant statutory guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Bank Transfer Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Naira Account details */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border dark:border-white/5 shadow-xl shadow-black/[0.02]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">
                  <BankIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Local Bank Transfer (NGN)</h2>
                  <p className="text-xs text-muted-foreground">For transfers within Nigeria</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Account Name</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">ARIELI FOUNDATION</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Bank Name</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">Zenith Bank</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 pb-1 items-center">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Account Number</span>
                  <div className="sm:col-span-2 flex items-center justify-between gap-4">
                    <span className="text-base sm:text-lg font-mono font-bold text-orange select-all">1229977322</span>
                    <button
                      onClick={() => copyToClipboard('1229977322', 'naira')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 dark:bg-white/5 hover:bg-orange/10 hover:text-orange text-muted-foreground text-xs font-semibold transition-colors duration-200"
                    >
                      {copiedField === 'naira' ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Domiciliary Accounts details */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border dark:border-white/5 shadow-xl shadow-black/[0.02]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">
                  <GlobeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Domiciliary Bank Accounts</h2>
                  <p className="text-xs text-muted-foreground">For international wire transfers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Account Name</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">ARIELI FOUNDATION</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Bank Name</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">Zenith Bank</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Swift Code</span>
                  <div className="sm:col-span-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-mono font-bold text-foreground select-all">ZEIBNGLA</span>
                    <button
                      onClick={() => copyToClipboard('ZEIBNGLA', 'swift')}
                      className="p-1.5 rounded-md hover:bg-orange/10 hover:text-orange text-muted-foreground transition-colors duration-200"
                      aria-label="Copy swift code"
                    >
                      {copiedField === 'swift' ? <CheckIcon className="w-4 h-4 text-orange" /> : <CopyIcon className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Bank / Branch Code</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">057 / 057080015</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 border-b border-border dark:border-white/5 pb-3">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Corresponding Bank</span>
                  <span className="sm:col-span-2 text-sm font-semibold text-foreground">Citi Bank</span>
                </div>

                <div className="pt-2 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Account Numbers</h3>
                  
                  {/* USD */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 dark:bg-white/[0.01] border border-border dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground w-12">USD ($)</span>
                      <span className="text-sm sm:text-base font-mono font-semibold text-foreground select-all">5074502177</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('5074502177', 'usd')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-orange/10 hover:text-orange text-muted-foreground text-xs transition-colors duration-200"
                    >
                      {copiedField === 'usd' ? <CheckIcon className="w-3.5 h-3.5 text-orange" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* GBP */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 dark:bg-white/[0.01] border border-border dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground w-12">GBP (£)</span>
                      <span className="text-sm sm:text-base font-mono font-semibold text-foreground select-all">5061405342</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('5061405342', 'gbp')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-orange/10 hover:text-orange text-muted-foreground text-xs transition-colors duration-200"
                    >
                      {copiedField === 'gbp' ? <CheckIcon className="w-3.5 h-3.5 text-orange" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* EUR */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/35 dark:bg-white/[0.01] border border-border dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground w-12">EUR (€)</span>
                      <span className="text-sm sm:text-base font-mono font-semibold text-foreground select-all">5081133241</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('5081133241', 'eur')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-orange/10 hover:text-orange text-muted-foreground text-xs transition-colors duration-200"
                    >
                      {copiedField === 'eur' ? <CheckIcon className="w-3.5 h-3.5 text-orange" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  )
}
