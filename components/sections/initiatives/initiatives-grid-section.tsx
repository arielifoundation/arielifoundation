'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const MegaphoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
)

const HandHeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12l3.5-3.5z"/>
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const initiatives = [
  {
    id: 'maternity-care',
    title: 'Maternity Care',
    description: 'Providing quality maternity care services and supporting mothers through pregnancy, childbirth, and postpartum recovery with skilled healthcare personnel.',
    Icon: HeartIcon,
    image: '/images/initiatives/maternity-care.jpg',
  },
  {
    id: 'arieli-research',
    title: 'Arieli Research',
    description: 'Conducting evidence-based research to understand stakeholder perspectives and develop innovative solutions for maternal and child health challenges.',
    Icon: BookOpenIcon,
    image: '/images/hero-walk.jpg',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment & Gender Equality',
    description: 'Empowering women and girls through education, healthcare access, and advocating for gender equality in communities across Nigeria.',
    Icon: UsersIcon,
    image: '/images/outreach/school-children.jpg',
  },
  {
    id: 'awareness-creation',
    title: 'Awareness Creation',
    description: 'Building awareness in communities about maternal health, family planning, and healthy habits through targeted campaigns and education programs.',
    Icon: MegaphoneIcon,
    image: '/images/outreach/hygiene-education.jpg',
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach Programs',
    description: 'Engaging directly with communities through health sensitization, WASH campaigns, menstrual health advocacy, and healthcare support initiatives.',
    Icon: HandHeartIcon,
    image: '/images/outreach/anniversary-group.jpg',
  },
]

export function InitiativesGridSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="initiatives-grid" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            Our Focus Areas
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Creating Impact Across Key Areas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Each initiative addresses critical challenges facing mothers, children, and communities, creating sustainable pathways to better health outcomes.
          </p>
        </div>

        {/* Initiatives grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.Icon
            return (
              <a
                key={initiative.id}
                href={`/initiatives/stories#${initiative.id}`}
                className={`glass-card card-hover-glow group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent dark:from-[#111827] dark:via-[#111827]/60" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-orange/90 flex items-center justify-center shadow-lg shadow-orange/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-foreground tracking-wide mb-3 group-hover:text-orange transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-4">
                    {initiative.description}
                  </p>
                  
                  {/* Learn More link */}
                  <div className="flex items-center gap-2 text-orange font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
