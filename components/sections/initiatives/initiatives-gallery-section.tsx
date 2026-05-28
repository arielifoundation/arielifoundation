'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const galleryImages = [
  {
    src: '/images/outreach/anniversary-group.jpg',
    alt: 'Large community gathering during Arieli Foundation anniversary outreach',
    caption: 'Anniversary Health Outreach',
    size: 'large',
  },
  {
    src: '/images/outreach/school-children.jpg',
    alt: 'Children in school uniforms during education outreach',
    caption: 'School Health Program',
    size: 'medium',
  },
  {
    src: '/images/outreach/hygiene-education.jpg',
    alt: 'Hygiene education and handwashing demonstration',
    caption: 'WASH Campaign',
    size: 'medium',
  },
  {
    src: '/images/initiatives/maternity-care.jpg',
    alt: 'Community outreach in informal settlement',
    caption: 'Community Health Visit',
    size: 'large',
  },
  {
    src: '/images/hero-walk.jpg',
    alt: 'Foundation walk for maternal health awareness',
    caption: 'Awareness Walk',
    size: 'medium',
  },
]

export function InitiativesGallerySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
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
            In the Field
          </span>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
            Stories From Our Outreach
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Powerful moments captured during our community outreach programs across Nigeria.
          </p>
        </div>

        {/* Editorial Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-12 gap-4 lg:gap-6"
        >
          {/* Large image - spans 8 columns */}
          <div 
            className={`col-span-12 md:col-span-8 transition-all duration-700 ${
              galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div 
              className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredIndex === 0 ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
                hoveredIndex === 0 ? 'opacity-100' : 'opacity-60'
              }`} />
              <div className={`absolute bottom-0 left-0 right-0 p-6 lg:p-8 transition-all duration-500 ${
                hoveredIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
              }`}>
                <p className="text-white font-[var(--font-bebas)] text-2xl lg:text-3xl tracking-wide">
                  {galleryImages[0].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Medium images - stacked on right, spans 4 columns */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 lg:gap-6">
            {galleryImages.slice(1, 3).map((image, idx) => {
              const index = idx + 1
              return (
                <div 
                  key={image.src}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 ${
                    galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                  }`} />
                  <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                  }`}>
                    <p className="text-white font-[var(--font-bebas)] text-lg lg:text-xl tracking-wide">
                      {image.caption}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom row - two medium images */}
          {galleryImages.slice(3).map((image, idx) => {
            const index = idx + 3
            return (
              <div 
                key={image.src}
                className={`col-span-12 md:col-span-6 transition-all duration-700 ${
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="relative aspect-[16/10] rounded-xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                  }`} />
                  <div className={`absolute bottom-0 left-0 right-0 p-5 lg:p-6 transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                  }`}>
                    <p className="text-white font-[var(--font-bebas)] text-xl lg:text-2xl tracking-wide">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
