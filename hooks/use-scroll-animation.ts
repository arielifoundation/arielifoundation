'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { animationConfig, prefersReducedMotion } from '@/lib/animations'

interface UseScrollAnimationOptions {
  /** Intersection threshold (0-1). Default: 0.15 */
  threshold?: number
  /** Root margin for intersection observer */
  rootMargin?: string
  /** Whether to only trigger once. Default: false (re-triggers) */
  triggerOnce?: boolean
  /** Initial delay before animation starts (ms) */
  delay?: number
  /** Whether to respect reduced motion preferences. Default: true */
  respectReducedMotion?: boolean
}

interface UseScrollAnimationReturn<T extends HTMLElement> {
  ref: React.RefObject<T>
  isVisible: boolean
  hasAnimated: boolean
}

/**
 * Enhanced scroll animation hook with replay support
 * 
 * Elements animate when 15-25% visible in viewport.
 * Animations replay when users scroll away and back.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const {
    threshold = animationConfig.threshold.default,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true, // Default: true — content stays visible after animating in
    delay = 0,
    respectReducedMotion = true,
  } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check reduced motion preference
  const shouldAnimate = useCallback(() => {
    if (!respectReducedMotion) return true
    return !prefersReducedMotion()
  }, [respectReducedMotion])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If reduced motion is preferred, show content immediately
    if (!shouldAnimate()) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          // Apply delay if specified
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
          } else {
            setIsVisible(true)
            setHasAnimated(true)
          }

          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          // Reset visibility when element leaves viewport
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, delay, shouldAnimate])

  return { ref, isVisible, hasAnimated }
}

/**
 * Hook for staggered children animations
 */
export function useStaggeredAnimation<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: UseScrollAnimationOptions & {
    staggerDelay?: number
    baseDelay?: number
  } = {}
) {
  const {
    staggerDelay = animationConfig.stagger.normal,
    baseDelay = 0,
    ...scrollOptions
  } = options

  const { ref, isVisible, hasAnimated } = useScrollAnimation<T>(scrollOptions)

  const getItemDelay = useCallback(
    (index: number) => baseDelay + index * staggerDelay,
    [baseDelay, staggerDelay]
  )

  return {
    ref,
    isVisible,
    hasAnimated,
    getItemDelay,
  }
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate parallax offset based on element position
      const elementCenter = rect.top + rect.height / 2
      const windowCenter = windowHeight / 2
      const distance = elementCenter - windowCenter
      
      setOffset(distance * speed * -1)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

/**
 * Hook for counting animation (stats/numbers)
 */
export function useCountUp(
  end: number,
  options: {
    duration?: number
    delay?: number
    start?: number
    decimals?: number
  } = {}
) {
  const {
    duration = 2000,
    delay = 0,
    start = 0,
    decimals = 0,
  } = options

  const [count, setCount] = useState(start)
  const [isComplete, setIsComplete] = useState(false)
  const { ref, isVisible } = useScrollAnimation<HTMLSpanElement>({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!isVisible || prefersReducedMotion()) {
      setCount(end)
      setIsComplete(true)
      return
    }

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime + delay
      }

      const elapsed = currentTime - startTime

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = start + (end - start) * easeOutCubic

      setCount(Number(currentCount.toFixed(decimals)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setIsComplete(true)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration, delay, start, decimals])

  return { ref, count, isComplete }
}

export default useScrollAnimation
