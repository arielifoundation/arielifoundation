'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { animationConfig, prefersReducedMotion } from '@/lib/animations'

interface PageTransitionContextType {
  isTransitioning: boolean
  transitionState: 'idle' | 'exiting' | 'entering'
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  transitionState: 'idle',
})

export function usePageTransition() {
  return useContext(PageTransitionContext)
}

interface PageTransitionProviderProps {
  children: React.ReactNode
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionState, setTransitionState] = useState<'idle' | 'exiting' | 'entering'>('idle')
  const [displayedChildren, setDisplayedChildren] = useState(children)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Skip animations if reduced motion is preferred
    if (prefersReducedMotion()) {
      setDisplayedChildren(children)
      return
    }

    // Start exit transition
    setIsTransitioning(true)
    setTransitionState('exiting')
    setOpacity(0)

    const exitTimeout = setTimeout(() => {
      setDisplayedChildren(children)
      setTransitionState('entering')
      
      // Small delay before fade in
      requestAnimationFrame(() => {
        setOpacity(1)
      })

      const enterTimeout = setTimeout(() => {
        setIsTransitioning(false)
        setTransitionState('idle')
      }, animationConfig.duration.normal)

      return () => clearTimeout(enterTimeout)
    }, animationConfig.duration.fast)

    return () => clearTimeout(exitTimeout)
  }, [pathname, children])

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, transitionState }}>
      <div
        className="transition-opacity will-change-opacity"
        style={{
          opacity,
          transitionDuration: `${animationConfig.duration.normal}ms`,
          transitionTimingFunction: animationConfig.easing.smooth,
        }}
      >
        {displayedChildren}
      </div>
    </PageTransitionContext.Provider>
  )
}

/**
 * Wrapper component for individual pages that need custom transitions
 */
interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger mount animation
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Skip animation if reduced motion preferred
  if (prefersReducedMotion()) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      className={`transition-all will-change-transform ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(10px)',
        transitionDuration: `${animationConfig.duration.slow}ms`,
        transitionTimingFunction: animationConfig.easing.default,
      }}
    >
      {children}
    </div>
  )
}
