'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const sdgGoals = [
  {
    number: 1,
    title: 'No Poverty',
    description: 'End poverty in all its forms everywhere',
    color: '#E5243B',
  },
  {
    number: 3,
    title: 'Good Health and Wellbeing',
    description: 'Ensure healthy lives and promote well-being for all at all ages',
    color: '#4C9F38',
  },
  {
    number: 4,
    title: 'Quality Education',
    description: 'Ensure inclusive and equitable quality education',
    color: '#C5192D',
  },
  {
    number: 5,
    title: 'Gender Equality',
    description: 'Achieve gender equality and empower all women and girls',
    color: '#FF3A21',
  },
  {
    number: 8,
    title: 'Decent Work and Economic Growth',
    description: 'Promote sustained, inclusive and sustainable economic growth',
    color: '#A21942',
  },
  {
    number: 10,
    title: 'Reduced Inequality',
    description: 'Reduce inequality within and among countries',
    color: '#DD1367',
  },
  {
    number: 17,
    title: 'Partnerships',
    description: 'Strengthen the means of implementation and revitalize partnerships',
    color: '#19486A',
  },
]

export function SDGSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-card dark:bg-[#111827] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
            Global Alignment
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            UN Sustainable Development Goals
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our work aligns with the United Nations Sustainable Development Goals, contributing to global efforts for a better future.
          </p>
        </div>

        {/* SDG grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {sdgGoals.map((goal, index) => (
            <div
              key={goal.number}
              className={`glass-card card-hover-glow group relative p-4 lg:p-6 rounded-xl overflow-hidden transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {/* Color accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 transition-all group-hover:h-2"
                style={{ backgroundColor: goal.color }}
              />

              {/* SDG Number */}
              <div
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-3 lg:mb-4"
                style={{ backgroundColor: `${goal.color}20` }}
              >
                <span
                  className="font-[var(--font-bebas)] text-xl lg:text-2xl"
                  style={{ color: goal.color }}
                >
                  {goal.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground text-xs lg:text-sm mb-1 lg:mb-2">
                SDG {goal.number}
              </h3>
              <p className="font-[var(--font-bebas)] text-base lg:text-lg text-foreground tracking-wide leading-tight">
                {goal.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
