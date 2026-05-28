'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  inverted?: boolean
  className?: string
}

const ORIGINAL_LOGO_URL = '/images/logo.png'

const fullSizeMap = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-16 sm:h-20',
  xl: 'h-20 sm:h-24',
}

const iconSizeMap = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20',
}

/**
 * Logo - Uses the ORIGINAL Arieli Foundation logo PNG.
 * Only refines sizing, sharpness, and responsiveness.
 * Does NOT recreate or reinterpret the silhouette or typography.
 */
export function Logo({
  variant = 'full',
  size = 'lg',
  inverted = false,
  className,
}: LogoProps) {
  // Icon-only: crop the left circular emblem from the original logo
  if (variant === 'icon') {
    return (
      <div
        className={cn(
          'relative overflow-hidden flex-shrink-0',
          iconSizeMap[size],
          className
        )}
        aria-label="Arieli Foundation"
        role="img"
      >
        <img
          src={ORIGINAL_LOGO_URL}
          alt=""
          aria-hidden="true"
          draggable={false}
          className={cn(
            'absolute top-0 left-0 h-full max-w-none select-none',
            'transition-[filter] duration-300',
            inverted && 'brightness-0 invert'
          )}
          style={{ width: 'auto' }}
        />
      </div>
    )
  }

  // Full horizontal logo
  return (
    <img
      src={ORIGINAL_LOGO_URL}
      alt="Arieli Foundation"
      draggable={false}
      className={cn(
        fullSizeMap[size],
        'w-auto select-none transition-[filter] duration-300',
        inverted && 'brightness-0 invert',
        className
      )}
    />
  )
}

/**
 * ResponsiveLogo - Full horizontal logo on tablet/desktop,
 * compact icon on small mobile screens.
 */
export function ResponsiveLogo({
  inverted = false,
  size = 'lg',
  className,
}: {
  inverted?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}) {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="hidden sm:block">
        <Logo variant="full" size={size} inverted={inverted} />
      </div>
      <div className="block sm:hidden">
        <Logo variant="icon" size={size} inverted={inverted} />
      </div>
    </div>
  )
}
