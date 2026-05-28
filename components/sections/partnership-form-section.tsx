'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Custom SVG icons
const SendIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const SpinnerIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
)

const partnershipTypes = [
  'Corporate Partnership',
  'Sponsorship',
  'Government/Institutional Collaboration',
  'Individual Support',
  'Volunteer Programs',
  'In-Kind Support',
  'Other',
]

export function PartnershipFormSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    partnershipType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        partnershipType: '',
        message: '',
      })
    } catch {
      setError(
        'Something went wrong. Please try again or contact us directly at info@arielifoundation.org'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section
        id="partner"
        className="py-24 lg:py-32 bg-gradient-to-br from-[#111827] via-[#111827] to-[#111827]/95 dark:from-[#0B0F14] dark:via-[#0B0F14] dark:to-[#0B0F14]/95 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.08),transparent_50%)]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="font-[var(--font-bebas)] text-3xl text-white tracking-wide mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-white/70 mb-8">
              Thank you for reaching out. Our partnership team will review your
              inquiry and get back to you within 2-3 business days.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="partner"
      className="py-24 lg:py-32 bg-gradient-to-br from-[#111827] via-[#111827] to-[#111827]/95 dark:from-[#0B0F14] dark:via-[#0B0F14] dark:to-[#0B0F14]/95 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Info */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-6">
              Join Our Mission
            </span>

            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-8 leading-[1.05]">
              Partner With Us to Create{' '}
              <span className="text-orange">Healthier Futures</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Whether you&apos;re a corporate organization, government
              institution, or individual supporter, there are many ways to
              collaborate with Arieli Foundation and make a lasting impact on
              maternal and child health.
            </p>

            {/* Partnership types */}
            <div className="grid grid-cols-2 gap-3">
              {[
                'Corporate Partnerships',
                'Sponsorships',
                'Volunteer Programs',
                'Institutional Collaboration',
              ].map((type) => (
                <div
                  key={type}
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <span className="text-white/80 text-sm">{type}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">
                Prefer to reach us directly?
              </p>
              <a
                href="mailto:info@arielifoundation.org"
                className="text-orange hover:text-gold transition-colors font-medium"
              >
                info@arielifoundation.org
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="font-[var(--font-bebas)] text-2xl text-white tracking-wide mb-6">
              Send Us a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Full Name <span className="text-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Email Address <span className="text-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Organization & Phone - 2 columns */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all"
                    placeholder="Company or Organization"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/80 text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              {/* Partnership Type */}
              <div>
                <label
                  htmlFor="partnershipType"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Partnership Type
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.25em 1.25em',
                  }}
                >
                  <option value="" className="bg-[#1a1f26] text-white">
                    Select partnership type...
                  </option>
                  {partnershipTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#1a1f26] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm font-medium mb-2"
                >
                  Your Message <span className="text-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange/50 transition-all resize-none"
                  placeholder="Tell us about your interest in partnering with Arieli Foundation..."
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <SpinnerIcon className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-white/40 text-xs text-center">
                By submitting this form, you agree to be contacted by Arieli
                Foundation regarding partnership opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
