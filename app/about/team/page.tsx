'use client'

import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const patronInChief = {
  name: 'HRH. ALH. (DR). YAHAYA ABUBAKAR CFR',
  title: 'ETSU NUPE',
  role: 'Patron-In-Chief',
  image: '/images/staff/patron-chief.jpg',
  isMonochrome: true,
}

const teamMembers = [
  {
    name: 'Dr. Natasha C. Oyibo',
    role: 'Founder & CEO',
    image: '/images/team/ceo-chairman.jpg',
    isMonochrome: false,
    objectPosition: 'center 20%',
  },
  {
    name: 'Sir Mike Mbama Okiro',
    role: 'Trustee',
    image: '/images/team/trustee-mike.jpg',
    isMonochrome: false,
  },
  {
    name: 'Barr. Nancy Oyibo',
    role: 'Board Secretary',
    image: '/images/team/board-secretary.jpg',
    isMonochrome: false,
  },
]

const staffMembers = [
  {
    name: 'Mr Iroh Emmanuel',
    role: 'I.T Manager',
    image: '/images/staff/iroh-emmanuel.jpg',
    isMonochrome: true,
    objectPosition: 'center top',
  },
  {
    name: 'Mr Bayo Sorungbe',
    role: 'Manager, Brand Partnership and Business Development',
    image: '/images/staff/bayo-sorungbe.jpg',
    isMonochrome: true,
    objectPosition: 'center top',
  },
  {
    name: 'Mrs Anca Boca',
    role: 'Development Associate',
    image: '/images/staff/anca-boca.jpg',
    isMonochrome: true,
  },
  {
    name: 'Dr. Comfort Adedokun',
    role: 'Emergency Medicine and Wellness Expert',
    image: '/images/staff/comfort-adedokun.jpg',
    isMonochrome: true,
    objectPosition: 'center 38%',
  },
  {
    name: 'Mrs Charity O',
    role: 'Brand Development Manager (U.S.A)',
    image: '/images/staff/charity-o.jpg',
    isMonochrome: true,
    objectPosition: 'center 30%',
  },
  {
    name: 'Saviour Okiro',
    role: 'Head of Media and Marketing',
    image: '/images/staff/saviour-okiro.jpg',
    isMonochrome: false,
    objectPosition: 'center 20%',
  },
  {
    name: 'Jerry Ayuba',
    role: 'Community Engagement Officer',
    image: '/images/staff/jerry-ayuba.jpg',
    isMonochrome: false,
    objectPosition: 'center 15%',
  },
  {
    name: 'Paul Felix',
    role: 'Community Engagement Officer',
    image: '/images/staff/paul-felix.jpg',
    isMonochrome: false,
    objectPosition: 'center 15%',
  },
  {
    name: 'Joseph Bala',
    role: 'Community Engagement Officer',
    image: '/images/staff/joseph-bala.jpg',
    isMonochrome: false,
    objectPosition: 'center 15%',
  },
  {
    name: 'Joy James',
    role: 'Community Engagement Officer',
    image: '/images/staff/joy-james.jpg',
    isMonochrome: false,
    objectPosition: 'center 15%',
  },
  {
    name: '',
    role: '',
    image: '/images/staff/staff-11.jpg',
    isMonochrome: false,
    objectPosition: 'center 15%',
  },
  {
    name: '',
    role: '',
    image: '/images/staff/staff-12.jpg',
    isMonochrome: false,
    objectPosition: 'center 20%',
  },
]

export default function TeamPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: patronRef, isVisible: patronVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: leadershipRef, isVisible: leadershipVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const { ref: staffRef, isVisible: staffVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#111827]/95 to-[#111827]/90 dark:from-[#0B0F14] dark:via-[#0B0F14]/95 dark:to-[#0B0F14]/90">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(245,158,11,0.18),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1),transparent_50%)]" />
          </div>
        </div>

        <div 
          ref={heroRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Our People
            </span>
            <h1 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide mb-4 lg:mb-6">
              Meet the Team
            </h1>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              The passionate individuals driving Arieli Foundation&apos;s mission to transform 
              maternal and child health outcomes across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Patron-In-Chief Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={patronRef}
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              patronVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
              Royal Patron
            </span>
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide">
              Patron-In-Chief
            </h2>
          </div>

          <div 
            className={`max-w-md mx-auto text-center transition-all duration-700 delay-200 ${
              patronVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="group">
              {/* Large Portrait */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-6 lg:mb-8">
                <div className="glass-card card-hover-glow w-full h-full rounded-full overflow-hidden transition-all duration-500">
                  <img
                    src={patronInChief.image}
                    alt={patronInChief.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 contrast-[1.05]"
                  />
                </div>
              </div>
              
              {/* Name, Title & Role */}
              <h3 className="font-semibold text-lg lg:text-xl text-foreground mb-1 transition-colors group-hover:text-orange">
                {patronInChief.name}
              </h3>
              <p className="text-orange font-medium text-xs lg:text-sm mb-1">
                ({patronInChief.title})
              </p>
              <p className="text-muted-foreground text-sm">
                {patronInChief.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-surface-soft dark:bg-[#111827]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Leadership */}
          <div className="mb-16 lg:mb-20">
            <div 
              ref={leadershipRef}
              className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
                leadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
                Leadership
              </span>
              <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide">
                Arieli&apos;s Trustees
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`group text-center transition-all duration-500 ${
                    leadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Circular Portrait */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-6">
                    <div className="glass-card card-hover-glow w-full h-full rounded-full overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{ objectPosition: member.objectPosition || 'center top' }}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                            member.isMonochrome ? 'contrast-[1.05]' : ''
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-muted/60 via-border/40 to-muted/60 dark:from-[#1A2433] dark:via-[#1E293B] dark:to-[#1A2433] flex items-center justify-center">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-card/30 dark:bg-white/10" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="font-semibold text-base lg:text-lg text-foreground mb-1 transition-colors group-hover:text-orange">
                    {member.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="mt-16 lg:mt-20">
            <div 
              ref={staffRef}
              className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
                staffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
                The Team
              </span>
              <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide">
                Our Dedicated Staff
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 xl:gap-16">
              {staffMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`group text-center transition-all duration-500 ${
                    staffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {/* Circular Portrait */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-5">
                    <div className="glass-card card-hover-glow w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ objectPosition: member.objectPosition || 'center top' }}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          member.isMonochrome ? 'contrast-[1.05]' : ''
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="font-semibold text-sm lg:text-base text-foreground mb-1 transition-colors group-hover:text-orange">
                    {member.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground max-w-[180px]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section 
        ref={ctaRef}
        className="py-16 lg:py-20 bg-gradient-to-br from-[#111827] to-[#0B0F14]"
      >
        <div 
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            Join Our Mission
          </span>
          <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4 lg:mb-6">
            Become Part of Our Team
          </h2>
          <p className="text-white/70 text-sm lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who share our commitment 
            to improving maternal and child health outcomes.
          </p>
          <a
            href="mailto:info@arielifoundation.org"
            className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-3.5 bg-gradient-to-r from-orange to-gold text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange/30 transition-all duration-300 hover:-translate-y-0.5 text-sm lg:text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
