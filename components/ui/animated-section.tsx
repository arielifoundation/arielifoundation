'use client'

import React, { forwardRef } from 'react'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation'
import {
  animationConfig,
  animationVariants,
  type AnimationVariant,
  getAnimationStyle,
} from '@/lib/animations'
import { cn } from '@/lib/utils'

/* =============================================================================
   AnimatedSection - Base scroll-triggered animation component
   ============================================================================= */

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  /** Animation variant. Default: 'fade-up' */
  animation?: AnimationVariant
  /** Delay before animation starts (ms) */
  delay?: number
  /** Animation duration (ms). Default: 500 */
  duration?: number
  /** Intersection threshold (0-1). Default: 0.15 */
  threshold?: number
  /** Whether to only animate once. Default: true (content stays visible) */
  triggerOnce?: boolean
  /** HTML element to render. Default: 'div' */
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = animationConfig.duration.slow,
  threshold = animationConfig.threshold.default,
  triggerOnce = true,
  as: Component = 'div',
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    triggerOnce,
    delay,
  })

  const { initial, visible } = animationVariants[animation]

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all will-change-transform',
        isVisible ? visible : initial,
        className
      )}
      style={getAnimationStyle(isVisible, { duration, delay: 0, easing: animationConfig.easing.default })}
      {...props}
    >
      {children}
    </Component>
  )
}

/* =============================================================================
   AnimatedCard - Card with hover effects and scroll animation
   ============================================================================= */

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Delay before animation (ms) */
  delay?: number
  /** Index for stagger calculation */
  index?: number
  /** Stagger delay between items (ms) */
  staggerDelay?: number
  /** Enable hover glow effect. Default: true */
  enableGlow?: boolean
  /** Animation variant. Default: 'fade-up' */
  animation?: AnimationVariant
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  index = 0,
  staggerDelay = animationConfig.stagger.normal,
  enableGlow = true,
  animation = 'fade-up',
  ...props
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: animationConfig.threshold.default,
    triggerOnce: true,
  })

  const totalDelay = delay + index * staggerDelay
  const { initial, visible } = animationVariants[animation]

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all will-change-transform',
        enableGlow && 'card-hover-glow',
        isVisible ? visible : initial,
        className
      )}
      style={getAnimationStyle(isVisible, {
        duration: animationConfig.duration.slow,
        delay: totalDelay,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

/* =============================================================================
   AnimatedContainer - Container with staggered children
   ============================================================================= */

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Animation variant for the container */
  animation?: AnimationVariant
  /** Base delay before animations start */
  delay?: number
  /** Stagger delay between children */
  staggerDelay?: number
  /** Whether to stagger children. Default: true */
  stagger?: boolean
}

export function AnimatedContainer({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  staggerDelay = animationConfig.stagger.normal,
  stagger = true,
  ...props
}: AnimatedContainerProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: animationConfig.threshold.default,
    triggerOnce: true,
  })

  const { initial, visible } = animationVariants[animation]

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all will-change-transform',
        isVisible ? visible : initial,
        className
      )}
      style={getAnimationStyle(isVisible, { duration: animationConfig.duration.slow, delay })}
      {...props}
    >
      {stagger
        ? React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child
            return (
              <div
                className={cn(
                  'transition-all will-change-transform',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{
                  transitionDuration: `${animationConfig.duration.slow}ms`,
                  transitionDelay: `${delay + index * staggerDelay}ms`,
                  transitionTimingFunction: animationConfig.easing.default,
                }}
              >
                {child}
              </div>
            )
          })
        : children}
    </div>
  )
}

/* =============================================================================
   AnimatedText - Text with character/word animation
   ============================================================================= */

interface AnimatedTextProps extends React.HTMLAttributes<HTMLElement> {
  children: string
  className?: string
  /** Split by 'word' or 'character'. Default: 'word' */
  splitBy?: 'word' | 'character'
  /** Base delay */
  delay?: number
  /** Stagger delay per unit */
  staggerDelay?: number
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export function AnimatedText({
  children,
  className = '',
  splitBy = 'word',
  delay = 0,
  staggerDelay = 50,
  as: Component = 'span',
  ...props
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: animationConfig.threshold.default,
    triggerOnce: true,
  })

  const units = splitBy === 'word' 
    ? children.split(' ').map((word, i, arr) => (i < arr.length - 1 ? word + ' ' : word))
    : children.split('')

  return (
    <Component ref={ref as React.RefObject<HTMLElement>} className={cn('inline-block', className)} {...props}>
      {units.map((unit, index) => (
        <span
          key={index}
          className={cn(
            'inline-block transition-all will-change-transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
          style={{
            transitionDuration: `${animationConfig.duration.normal}ms`,
            transitionDelay: `${delay + index * staggerDelay}ms`,
            transitionTimingFunction: animationConfig.easing.default,
          }}
        >
          {unit}
        </span>
      ))}
    </Component>
  )
}

/* =============================================================================
   AnimatedImage - Image with reveal animation
   ============================================================================= */

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Animation variant. Default: 'blur-up' */
  animation?: AnimationVariant
  /** Enable subtle parallax. Default: false */
  parallax?: boolean
  /** Parallax speed (0-1) */
  parallaxSpeed?: number
  /** Wrapper className */
  wrapperClassName?: string
}

export const AnimatedImage = forwardRef<HTMLImageElement, AnimatedImageProps>(
  (
    {
      animation = 'blur-up',
      parallax = false,
      parallaxSpeed = 0.1,
      wrapperClassName = '',
      className = '',
      ...props
    },
    forwardedRef
  ) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
      threshold: animationConfig.threshold.early,
      triggerOnce: true,
    })

    const { initial, visible } = animationVariants[animation]

    return (
      <div ref={ref} className={cn('overflow-hidden', wrapperClassName)}>
        <img
          ref={forwardedRef}
          className={cn(
            'transition-all will-change-transform',
            isVisible ? visible : initial,
            className
          )}
          style={{
            transitionDuration: `${animationConfig.duration.slower}ms`,
            transitionTimingFunction: animationConfig.easing.smooth,
          }}
          {...props}
        />
      </div>
    )
  }
)

AnimatedImage.displayName = 'AnimatedImage'

/* =============================================================================
   AnimatedList - List with staggered item animations
   ============================================================================= */

interface AnimatedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
  className?: string
  /** Delay before animations start */
  delay?: number
  /** Stagger delay between items */
  staggerDelay?: number
  /** Animation variant for items */
  itemAnimation?: AnimationVariant
}

export function AnimatedList({
  children,
  className = '',
  delay = 0,
  staggerDelay = animationConfig.stagger.normal,
  itemAnimation = 'fade-up',
  ...props
}: AnimatedListProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLUListElement>({
    threshold: animationConfig.threshold.default,
    triggerOnce: true,
  })

  const { initial, visible } = animationVariants[itemAnimation]

  return (
    <ul ref={ref} className={className} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        return (
          <li
            className={cn(
              'transition-all will-change-transform',
              isVisible ? visible : initial
            )}
            style={{
              transitionDuration: `${animationConfig.duration.slow}ms`,
              transitionDelay: `${delay + index * staggerDelay}ms`,
              transitionTimingFunction: animationConfig.easing.default,
            }}
          >
            {child}
          </li>
        )
      })}
    </ul>
  )
}

/* =============================================================================
   AnimatedGrid - Grid with staggered cell animations
   ============================================================================= */

interface AnimatedGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Number of columns for stagger calculation */
  columns?: number
  /** Delay before animations start */
  delay?: number
  /** Stagger delay between items */
  staggerDelay?: number
  /** Whether to stagger by row. Default: false */
  staggerByRow?: boolean
}

export function AnimatedGrid({
  children,
  className = '',
  columns = 3,
  delay = 0,
  staggerDelay = animationConfig.stagger.normal,
  staggerByRow = false,
  ...props
}: AnimatedGridProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: animationConfig.threshold.default,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={cn('grid', className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        // Calculate delay based on row or sequential
        const itemDelay = staggerByRow
          ? delay + Math.floor(index / columns) * staggerDelay
          : delay + index * staggerDelay

        return (
          <div
            className={cn(
              'transition-all will-change-transform',
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-[0.97]'
            )}
            style={{
              transitionDuration: `${animationConfig.duration.slow}ms`,
              transitionDelay: `${itemDelay}ms`,
              transitionTimingFunction: animationConfig.easing.default,
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

/* =============================================================================
   FadeIn - Simple fade animation wrapper
   ============================================================================= */

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = animationConfig.duration.slow,
  direction = 'up',
  ...props
}: FadeInProps) {
  const animation: AnimationVariant = direction === 'none' 
    ? 'fade' 
    : `fade-${direction}` as AnimationVariant

  return (
    <AnimatedSection
      animation={animation}
      delay={delay}
      duration={duration}
      className={className}
      {...props}
    >
      {children}
    </AnimatedSection>
  )
}

/* =============================================================================
   ScaleIn - Scale animation wrapper
   ============================================================================= */

interface ScaleInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  withFade?: boolean
}

export function ScaleIn({
  children,
  className = '',
  delay = 0,
  duration = animationConfig.duration.slow,
  withFade = true,
  ...props
}: ScaleInProps) {
  return (
    <AnimatedSection
      animation={withFade ? 'scale-up' : 'scale'}
      delay={delay}
      duration={duration}
      className={className}
      {...props}
    >
      {children}
    </AnimatedSection>
  )
}

/* =============================================================================
   BlurIn - Blur reveal animation wrapper
   ============================================================================= */

interface BlurInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BlurIn({
  children,
  className = '',
  delay = 0,
  duration = animationConfig.duration.slower,
  ...props
}: BlurInProps) {
  return (
    <AnimatedSection
      animation="blur-up"
      delay={delay}
      duration={duration}
      className={className}
      {...props}
    >
      {children}
    </AnimatedSection>
  )
}

export default AnimatedSection
