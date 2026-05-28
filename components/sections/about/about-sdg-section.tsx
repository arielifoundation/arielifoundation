'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const sdgGoals = [
  {
    number: 1,
    title: 'No Poverty',
    color: '#E5243B',
  },
  {
    number: 3,
    title: 'Good Health and Wellbeing',
    color: '#4C9F38',
  },
  {
    number: 4,
    title: 'Quality Education',
    color: '#C5192D',
  },
  {
    number: 5,
    title: 'Gender Equality',
    color: '#FF3A21',
  },
  {
    number: 8,
    title: 'Decent Work and Economic Growth',
    color: '#A21942',
  },
  {
    number: 10,
    title: 'Reduced Inequality',
    color: '#DD1367',
  },
  {
    number: 17,
    title: 'Partnerships',
    color: '#19486A',
  },
]

export function AboutSDGSection() {
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
            Global Impact
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Aligned with Global Goals
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our initiatives contribute to the United Nations Sustainable Development Goals.
          </p>
        </div>

        {/* SDG grid - responsive layout */}
        <div ref={gridRef} className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
          {sdgGoals.map((goal, index) => (
            <div
              key={goal.number}
              className={`glass-card card-hover-glow group flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2 lg:py-3 rounded-xl transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${goal.color}20` }}
              >
                <span
                  className="font-[var(--font-bebas)] text-lg lg:text-xl"
                  style={{ color: goal.color }}
                >
                  {goal.number}
                </span>
              </div>
              <span className="font-medium text-foreground text-xs lg:text-sm">
                {goal.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
