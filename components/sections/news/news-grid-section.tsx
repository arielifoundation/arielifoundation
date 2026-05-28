'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom ExternalLink icon
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

// Placeholder news articles - to be updated with real content
const newsArticles = [
  {
    id: 1,
    date: 'April 4th, 2025',
    title: 'Arieli Foundation Expands Global Reach To Transform Maternal and Child Health',
    source: 'Independent Nigeria',
    description: 'Arieli Foundation deepens its humanitarian mission, scaling maternal and child healthcare outreach across underserved communities and broadening its global footprint in support of vulnerable women and children.',
    image: '/images/news/news-1-independent.jpg',
    link: 'https://independent.ng/arieli-foundation-expands-global-reach-o-transform-maternal-and-child-health/',
    featured: true,
  },
  {
    id: 2,
    date: 'April 5th, 2025',
    title: 'Arieli Foundation Expands to Three Northern States',
    source: 'The Vanguard News',
    description: 'Founded by Dr. Natasha C. Oyibo, Arieli Foundation extends its maternal and child healthcare outreach to Nasarawa, Kaduna, and Niger States — partnering with governments and global organizations to drive lasting impact.',
    image: '/images/news/news-2-vanguard.jpg',
    link: 'https://www.vanguardngr.com/2025/04/arieli-foundation-expands-to-three-northern-states-to-tackle-maternal-and-child-healthcare/amp/',
    featured: false,
  },
  {
    id: 3,
    date: 'April 5th, 2025',
    title: 'Arieli Foundation Expands Global Reach to Transform Maternal, Child Health',
    source: 'This Day Nigeria',
    description: 'With women and newborns in underserved communities facing preventable deaths daily due to limited healthcare access, the Foundation is expanding its global mission to bring health, hope, and opportunity to those most in need.',
    image: '/images/news/news-3-thisday.jpg',
    link: 'https://www.thisdaylive.com/2025/04/04/arieli-foundation-expands-global-reach-to-transform-maternal-child-health/',
    featured: false,
  },
  {
    id: 4,
    date: 'April 5th, 2025',
    title: 'Arieli Foundation Expands Drive to Tackle Maternal, Child Mortality',
    source: 'The Nation Nigeria',
    description: 'In a bold effort to reduce maternal and child mortality, the Foundation is broadening its footprint across Nigeria and laying the groundwork for global outreach — delivering lifesaving healthcare to women and children in underserved areas.',
    image: '/images/news/news-4-nation.jpg',
    link: 'https://thenationonlineng.net/arieli-foundation-expands-drive-to-tackle-maternal-child-mortality-in-nigeria-beyond/amp/',
    featured: false,
  },
]

function NewsCard({ 
  article, 
  index, 
  isVisible 
}: { 
  article: typeof newsArticles[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <article 
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`h-full rounded-2xl overflow-hidden
        bg-white/60 dark:bg-[#0D1420]/60
        backdrop-blur-xl
        border border-neutral-200/60 dark:border-white/[0.06]
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_32px_-6px_rgba(0,0,0,0.4)]
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(245,158,11,0.1)]
        hover:border-orange/20 dark:hover:border-orange/15
      `}>
        {/* Shimmer on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out
          bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none z-20" />

        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {article.image ? (
            <>
              {/* Article image with cinematic treatment */}
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                loading="lazy"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              {/* Hover deepen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <>
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-400 dark:text-neutral-500 text-sm font-medium">Image Placeholder</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          )}
          
          {/* Date badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase
              bg-white/90 dark:bg-black/60 backdrop-blur-sm
              text-foreground/80 dark:text-white/80
              border border-white/20 dark:border-white/10
              shadow-sm
            ">
              {article.date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Source */}
          <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-orange/80 dark:text-orange/70 mb-2">
            Posted by {article.source}
          </p>

          {/* Title */}
          <h3 className="font-[var(--font-bebas)] text-xl sm:text-2xl lg:text-[1.65rem] text-foreground leading-[1.15] tracking-wide mb-3 group-hover:text-orange transition-colors duration-300">
            {article.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
            {article.description}
          </p>

          {/* CTA Button */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
              bg-gradient-to-r from-orange/10 to-amber-500/10 dark:from-orange/[0.08] dark:to-amber-500/[0.06]
              text-orange dark:text-orange
              border border-orange/20 dark:border-orange/15
              hover:from-orange hover:to-amber-500
              hover:text-white hover:border-transparent
              hover:shadow-lg hover:shadow-orange/20
              transition-all duration-300
              group/btn
            "
          >
            Read Full Article
            <ExternalLinkIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function NewsGridSection() {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F5] dark:bg-[var(--dm-layer-deep)] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 dm-texture-grain opacity-30" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange/[0.02] dark:bg-orange/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={gridRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-orange text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">Featured Stories</span>
          <h2 className="font-[var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-wide mt-3">
            Recent Media Coverage
          </h2>
        </div>

        {/* Uniform 2-column editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              index={index}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
