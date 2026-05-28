import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
  variant?: 'default' | 'dark' | 'warm'
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
}

const variantClasses = {
  default: 'from-neutral via-sand/50 to-neutral dark:from-[#1A2433] dark:via-[#1E293B] dark:to-[#1A2433]',
  dark: 'from-dark/80 via-dark/60 to-dark/80 dark:from-[#111827] dark:via-[#1A2433] dark:to-[#111827]',
  warm: 'from-sand/60 via-ivory to-sand/60 dark:from-[#1A2433]/60 dark:via-[#0B0F14] dark:to-[#1A2433]/60',
}

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = 'video',
  variant = 'default',
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'card-hover-glow relative overflow-hidden rounded-xl bg-gradient-to-br border border-border dark:border-white/5',
        variantClasses[variant],
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-[gradient-shift_3s_ease_infinite]" />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground/40 text-sm font-medium tracking-wide uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

interface PortraitPlaceholderProps {
  name?: string
  role?: string
  className?: string
}

export function PortraitPlaceholder({
  name,
  role,
  className,
}: PortraitPlaceholderProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="card-hover-glow relative w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-neutral via-sand/50 to-neutral dark:from-[#1A2433] dark:via-[#1E293B] dark:to-[#1A2433] overflow-hidden border border-border dark:border-white/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-card/30 dark:bg-white/10" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-12 rounded-t-full bg-card/20 dark:bg-white/10" />
      </div>
      {name && (
        <h4 className="font-semibold text-foreground">{name}</h4>
      )}
      {role && (
        <p className="text-sm text-muted-foreground">{role}</p>
      )}
    </div>
  )
}

interface LogoPlaceholderProps {
  name: string
  className?: string
}

export function LogoPlaceholder({ name, className }: LogoPlaceholderProps) {
  return (
    <div
      className={cn(
        'card-hover-glow h-16 px-6 rounded-lg bg-background dark:bg-[#1A2433] border border-border dark:border-white/5 flex items-center justify-center transition-all grayscale hover:grayscale-0',
        className
      )}
    >
      <span className="text-muted-foreground/60 text-xs font-medium tracking-wide text-center line-clamp-2">
        {name}
      </span>
    </div>
  )
}

interface DocumentPlaceholderProps {
  title: string
  type?: string
  className?: string
}

export function DocumentPlaceholder({
  title,
  type = 'PDF',
  className,
}: DocumentPlaceholderProps) {
  return (
    <div
      className={cn(
        'card-hover-glow group relative p-6 rounded-xl bg-card dark:bg-[#111827] border border-border dark:border-white/5 cursor-pointer',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-14 rounded-lg bg-gradient-to-br from-orange/20 to-orange/10 flex items-center justify-center shrink-0 group-hover:from-orange/30 group-hover:to-orange/15 transition-all">
          <span className="text-orange text-xs font-bold">{type}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground group-hover:text-orange transition-colors">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            Click to view report
          </p>
        </div>
      </div>
    </div>
  )
}
