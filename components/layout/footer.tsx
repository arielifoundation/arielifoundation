import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { SocialLinksFooter } from '@/components/ui/social-links'

// Custom SVG icons
const MailIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PhoneIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MapPinIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Initiatives', href: '/initiatives' },
    { name: 'Outreach Stories', href: '/#outreach' },
    { name: 'News', href: '/news' },
    { name: 'Reports', href: '/#reports' },
  ],
  getInvolved: [
    { name: 'Partner With Us', href: '/partner' },
    { name: 'Our Partners', href: '/#partners' },
    { name: 'Contact Us', href: '/#contact' },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] dark:bg-[#0B0F14] text-white relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="full" size="lg" inverted />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Everyday at Arieli Foundation we make it our aim to provide quality and skilled care with love to ensure the immense reduction of preventable maternal health issues and deaths.
            </p>
            <p className="text-white/50 text-xs">
              Arieli Foundation for Maternal and Child Health is a duly registered charity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-bebas)] text-lg tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-[var(--font-bebas)] text-lg tracking-wide mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-bebas)] text-lg tracking-wide mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@arielifoundation.org"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-orange transition-colors"
                >
                  <MailIcon size={16} className="text-orange" />
                  info@arielifoundation.org
                </a>
              </li>
              <li>
                <a
                  href="tel:09099096565"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-orange transition-colors"
                >
                  <PhoneIcon size={16} className="text-orange" />
                  09099096565
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPinIcon size={16} className="text-orange mt-0.5 shrink-0" />
                  <span>Splitlake Close, Maitama, Abuja, Nigeria</span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <SocialLinksFooter />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Arieli Foundation for Maternal and Child Health. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-white/50 text-sm hover:text-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 text-sm hover:text-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
