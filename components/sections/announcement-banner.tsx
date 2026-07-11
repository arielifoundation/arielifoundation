'use client'

import Link from 'next/link'

export function AnnouncementBanner() {
  return (
    <div className="absolute top-24 left-0 right-0 z-30 w-full bg-black/40 backdrop-blur-md border-b border-orange/20 py-2.5 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
          <span>🚀 Arieli is launching soon —</span>
          <Link
            href="/initiatives/arielicare"
            className="inline-flex items-center gap-1 text-orange font-semibold hover:text-gold transition-colors duration-200 underline underline-offset-4 decoration-orange/40 hover:decoration-gold/60 group"
          >
            Join the Waitlist
            <svg
              className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5 duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  )
}
