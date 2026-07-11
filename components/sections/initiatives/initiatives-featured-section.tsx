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

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const featuredInitiatives = [
  {
    id: 'maternity-care',
    title: 'Maternity Care',
    subtitle: 'Quality Healthcare for Mothers',
    description: 'Our maternity care initiative ensures that expectant mothers have access to quality prenatal, delivery, and postnatal care. We work with trained healthcare personnel and community health workers to provide essential support throughout the motherhood journey.',
    Icon: HeartIcon,
    image: '/images/initiatives/maternity-care.jpg',
    impactPoints: [
      'Prenatal care and health monitoring',
      'Safe delivery support and skilled birth attendance',
      'Postnatal care and recovery assistance',
      'Nutrition counseling for mothers and infants',
    ],
    stats: [
      { value: '500+', label: 'Mothers Supported' },
      { value: '15+', label: 'Healthcare Partners' },
    ],
    quote: {
      text: 'The care I received during my pregnancy was life-changing. I felt supported every step of the way.',
      author: 'Blessing A., Program Beneficiary',
    },
  },
  {
    id: 'arieli-research',
    title: 'Arieli Research',
    subtitle: 'Evidence-Based Solutions',
    description: 'We conduct rigorous research to understand the challenges facing maternal and child health in Nigeria. Our findings inform our programs and contribute to the broader knowledge base for improving health outcomes.',
    Icon: BookOpenIcon,
    image: '/images/hero-walk.jpg',
    impactPoints: [
      'Community health assessments',
      'Stakeholder perspectives research',
      'Program effectiveness evaluation',
      'Health policy recommendations',
    ],
    stats: [
      { value: '5+', label: 'Research Studies' },
      { value: '3+', label: 'Published Reports' },
    ],
    quote: {
      text: 'Data-driven approaches allow us to target our interventions where they will have the greatest impact.',
      author: 'Research Team Lead',
    },
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment & Gender Equality',
    subtitle: 'Building Stronger Communities',
    description: 'We empower women and girls by providing education, healthcare access, and by advocating for gender equality in Nigerian communities.\n\nAdditionally, we address gender-based violence by raising awareness, preventing harm, supporting survivors, and fostering safer, more inclusive spaces.',
    Icon: UsersIcon,
    image: '/images/outreach/school-children.jpg',
    impactPoints: [
      'Skills training and capacity building',
      'Educational support programs',
      'Economic empowerment initiatives',
      'Gender equality advocacy',
    ],
    stats: [
      { value: '700+', label: 'Girls Supported' },
      { value: '10+', label: 'Training Programs' },
    ],
    quote: {
      text: 'Education gave me the confidence to dream bigger and the tools to achieve those dreams.',
      author: 'Mary O., Program Graduate',
    },
  },
  {
    id: 'awareness-creation',
    title: 'Awareness Creation',
    subtitle: 'Knowledge is Power',
    description: 'Through targeted awareness campaigns, we educate communities about maternal health, family planning, and preventive care. Knowledge empowers individuals to make informed health decisions for themselves and their families.',
    Icon: MegaphoneIcon,
    image: '/images/outreach/hygiene-education.jpg',
    impactPoints: [
      'Maternal health education',
      'Family planning awareness',
      'Preventive care campaigns',
      'Community health workshops',
    ],
    stats: [
      { value: '2,000+', label: 'People Reached' },
      { value: '20+', label: 'Campaigns Completed' },
    ],
    quote: {
      text: 'Before the workshop, I did not know the danger signs during pregnancy. Now I can help other women in my community.',
      author: 'Community Health Volunteer',
    },
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach Programs',
    subtitle: 'On the Ground Impact',
    description: 'We go directly into communities to provide health services, education, and support. Our outreach programs include WASH campaigns, menstrual health advocacy, and comprehensive healthcare support for underserved populations.',
    Icon: HandHeartIcon,
    image: '/images/outreach/anniversary-group.jpg',
    impactPoints: [
      'Health sensitization programs',
      'WASH (Water, Sanitation, Hygiene) campaigns',
      'Menstrual health advocacy',
      'Mobile health clinics',
    ],
    stats: [
      { value: '7+', label: 'Communities Reached' },
      { value: '10+', label: 'Outreach Events' },
    ],
    quote: {
      text: 'The foundation brought healthcare to our doorstep. They truly care about our community.',
      author: 'Village Chief, Outreach Community',
    },
  },
]

function InitiativeStoryBlock({ initiative, index }: { initiative: typeof featuredInitiatives[0]; index: number }) {
  const isReversed = index % 2 === 1
  const { ref: blockRef, isVisible: blockVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 })
  const Icon = initiative.Icon

  return (
    <div 
      id={initiative.id}
      ref={blockRef}
      className="py-16 lg:py-24"
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Image */}
        <div 
          className={`relative ${isReversed ? 'lg:col-start-2' : ''} transition-all duration-700 ${
            blockVisible 
              ? 'opacity-100 translate-x-0' 
              : isReversed ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-card">
            <img
              src={initiative.image}
              alt={initiative.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Stats badges */}
          <div className="absolute -bottom-6 left-6 right-6 flex gap-3">
            {initiative.stats.map((stat, statIndex) => (
              <div 
                key={stat.label}
                className={`glass-card-strong px-4 py-3 rounded-xl flex-1 transition-all duration-500 ${
                  blockVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${400 + statIndex * 100}ms` }}
              >
                <div className="font-[var(--font-bebas)] text-2xl lg:text-3xl text-orange">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div 
          className={`${isReversed ? 'lg:col-start-1' : ''} lg:pt-0 pt-8 transition-all duration-700 delay-200 ${
            blockVisible 
              ? 'opacity-100 translate-x-0' 
              : isReversed ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
          }`}
        >
          {/* Icon and subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange" />
            </div>
            <span className="text-orange text-sm font-medium tracking-wider uppercase">
              {initiative.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
            {initiative.title}
          </h3>

          {/* Description */}
          <div className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 space-y-4">
            {initiative.description.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>

          {/* Impact points */}
          <ul className="space-y-3 mb-8">
            {initiative.impactPoints.map((point, pointIndex) => (
              <li 
                key={point}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  blockVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${500 + pointIndex * 100}ms` }}
              >
                <CheckCircleIcon className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <div 
            className={`glass-card p-6 rounded-xl border-l-4 border-orange transition-all duration-500 ${
              blockVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <p className="text-foreground/90 italic mb-3">&quot;{initiative.quote.text}&quot;</p>
            <p className="text-orange text-sm font-medium">— {initiative.quote.author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InitiativesFeaturedSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-24 lg:py-32 bg-card dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            In-Depth Look
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Initiative Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the impact and stories behind each of our key initiatives.
          </p>
        </div>

        {/* Initiative story blocks */}
        <div className="divide-y divide-border/30">
          {featuredInitiatives.map((initiative, index) => (
            <InitiativeStoryBlock key={initiative.id} initiative={initiative} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
