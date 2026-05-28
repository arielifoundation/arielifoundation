/**
 * Global Animation System for Arieli Foundation
 * 
 * Provides consistent, cinematic, and accessible animations
 * across the entire website.
 */

// Animation timing configuration
export const animationConfig = {
  // Duration ranges (in ms)
  duration: {
    fast: 200,
    normal: 350,
    slow: 500,
    slower: 700,
    slowest: 900,
  },
  
  // Stagger delays (in ms)
  stagger: {
    tight: 50,
    normal: 80,
    relaxed: 120,
  },
  
  // Hover transition duration (in ms)
  hover: {
    fast: 200,
    normal: 300,
    slow: 350,
  },
  
  // Easing curves (cinematic, smooth ease-out)
  easing: {
    // Primary ease-out for most animations
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Smooth deceleration
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    // Gentle ease for subtle movements
    gentle: 'cubic-bezier(0.4, 0, 0.6, 1)',
    // Premium feel for important elements
    premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
    // Spring-like without bounce
    soft: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  
  // Movement distances
  distance: {
    // Vertical movement (translateY)
    y: {
      small: 15,
      medium: 20,
      large: 30,
    },
    // Horizontal movement (translateX)
    x: {
      small: 15,
      medium: 25,
      large: 40,
    },
  },
  
  // Scale ranges
  scale: {
    subtle: { from: 0.98, to: 1 },
    normal: { from: 0.97, to: 1 },
    pronounced: { from: 0.95, to: 1 },
  },
  
  // Blur amounts
  blur: {
    subtle: 4,
    normal: 8,
    strong: 12,
  },
  
  // Intersection observer thresholds
  threshold: {
    early: 0.05,
    default: 0.15,
    late: 0.25,
  },
} as const

// Animation variant types
export type AnimationVariant =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'scale-up'
  | 'blur'
  | 'blur-up'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'

// CSS class mappings for animation variants
export const animationVariants: Record<AnimationVariant, {
  initial: string
  visible: string
}> = {
  'fade': {
    initial: 'opacity-0',
    visible: 'opacity-100',
  },
  'fade-up': {
    initial: 'opacity-0 translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-6',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  'scale': {
    initial: 'opacity-0 scale-[0.97]',
    visible: 'opacity-100 scale-100',
  },
  'scale-up': {
    initial: 'opacity-0 scale-[0.97] translate-y-4',
    visible: 'opacity-100 scale-100 translate-y-0',
  },
  'blur': {
    initial: 'opacity-0 blur-sm',
    visible: 'opacity-100 blur-0',
  },
  'blur-up': {
    initial: 'opacity-0 blur-sm translate-y-4',
    visible: 'opacity-100 blur-0 translate-y-0',
  },
  'slide-up': {
    initial: 'translate-y-8',
    visible: 'translate-y-0',
  },
  'slide-down': {
    initial: '-translate-y-8',
    visible: 'translate-y-0',
  },
  'slide-left': {
    initial: 'translate-x-8',
    visible: 'translate-x-0',
  },
  'slide-right': {
    initial: '-translate-x-8',
    visible: 'translate-x-0',
  },
}

// Hover effect variants
export type HoverVariant =
  | 'lift'
  | 'glow'
  | 'lift-glow'
  | 'scale'
  | 'scale-glow'
  | 'shine'
  | 'border-glow'

// Utility function to generate stagger delay
export function getStaggerDelay(index: number, baseDelay = 0, staggerMs = animationConfig.stagger.normal): number {
  return baseDelay + index * staggerMs
}

// Utility function to generate CSS transition string
export function getTransition(
  properties: string | string[] = 'all',
  duration: number = animationConfig.duration.slow,
  easing: string = animationConfig.easing.default
): string {
  const props = Array.isArray(properties) ? properties : [properties]
  return props.map(prop => `${prop} ${duration}ms ${easing}`).join(', ')
}

// Check for reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Animation style generator for inline styles
export function getAnimationStyle(
  isVisible: boolean,
  options: {
    duration?: number
    delay?: number
    easing?: string
  } = {}
): React.CSSProperties {
  const {
    duration = animationConfig.duration.slow,
    delay = 0,
    easing = animationConfig.easing.default,
  } = options

  return {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: easing,
    transitionProperty: 'opacity, transform, filter',
  }
}
