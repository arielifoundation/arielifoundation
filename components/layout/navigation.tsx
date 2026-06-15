'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { ResponsiveLogo } from '@/components/ui/logo'
import { SocialLinksCompact } from '@/components/ui/social-links'

// Custom SVG icons
const MenuIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const SunIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const ChevronDownIcon = ({ size = 14, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Meet the Team', href: '/about/team' },
      { name: 'Partners & Collaborators', href: '/about#partners' },
    ]
  },
  { 
    name: 'Initiatives', 
    href: '/initiatives',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Our Initiatives', href: '/initiatives' },
      { name: 'Our Stories', href: '/initiatives/stories' },
    ]
  },
  { name: 'Reports', href: '/#reports' },
  { name: 'Partners', href: '/#partners' },
  { name: 'Contact', href: '/#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const aboutRef = useRef<HTMLDivElement>(null)
  const initiativesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (aboutRef.current && !aboutRef.current.contains(event.target as Node)) &&
        (initiativesRef.current && !initiativesRef.current.contains(event.target as Node))
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#1f2937]/95 backdrop-blur-md shadow-sm border-b border-white/5 dark:bg-[#111827]/90 dark:border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <ResponsiveLogo 
              inverted={!isScrolled} 
              size="lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={link.name === 'About' ? aboutRef : initiativesRef}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-orange",
                        isScrolled ? "text-white" : "text-white/90"
                      )}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={cn(
                        "ml-1 p-1 rounded-md transition-all duration-200 hover:bg-white/10",
                        isScrolled ? "text-white" : "text-white/90"
                      )}
                      aria-label={`Toggle ${link.name} menu`}
                    >
                      <ChevronDownIcon 
                        size={14} 
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 origin-top-left animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                      <div className="rounded-xl bg-card dark:bg-[#111827] shadow-xl shadow-black/10 dark:shadow-black/30 border border-border dark:border-white/10 overflow-hidden backdrop-blur-xl">
                        <div className="py-2">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-orange hover:bg-secondary/50 dark:hover:bg-white/5 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange",
                    isScrolled ? "text-white" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA, Social Links, and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <SocialLinksCompact inverted={!isScrolled} />
            
            {/* Divider */}
            <div className={cn(
              "w-px h-6 transition-colors",
              isScrolled ? "bg-white/20" : "bg-white/20"
            )} />
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2.5 rounded-full transition-all duration-300",
                  isScrolled 
                    ? "bg-white/10 hover:bg-white/20 text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white",
                  "hover:shadow-lg hover:shadow-orange/10"
                )}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon size={18} />
                ) : (
                  <MoonIcon size={18} />
                )}
              </button>
            )}

            <Link
              href="/#partner"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-orange to-gold text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-lg transition-colors text-white"
                )}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors text-white"
              )}
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card dark:bg-[#111827] shadow-lg animate-fade-in border-t border-border">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-foreground font-medium hover:text-orange transition-colors"
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <ChevronDownIcon 
                          size={18} 
                          className={cn(
                            "text-muted-foreground transition-transform duration-200",
                            openMobileDropdown === link.name && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                    {openMobileDropdown === link.name && (
                      <div className="pl-4 pb-2 space-y-1 border-l-2 border-orange/30 ml-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setOpenMobileDropdown(null)
                            }}
                            className="block py-2 text-sm text-muted-foreground hover:text-orange transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-foreground font-medium hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <Link
                  href="/#partner"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange to-gold text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange/30 transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
