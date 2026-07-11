'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara", "Abuja (FCT)"
].sort()

// Clean custom SVG icons to avoid any library dependencies
const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const LoaderIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
)

const CalendarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 012 1.72z" />
  </svg>
)

const MailIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const UserIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const MapPinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    expectedDeliveryDate: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Social checklist states
  const [checklist, setChecklist] = useState({
    joined: true,
    instagram: false,
    facebook: false,
    twitter: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required'
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.state) {
      newErrors.state = 'Please select a State'
    }
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    // Check if Supabase env variables are configured (not build-time placeholders)
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder-url-for-build")) {
      alert("Configuration Error: Please verify that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are added to your Vercel Project Settings Environment Variables.")
      setIsSubmitting(false)
      return
    }

    const { error } = await supabase
      .from("waitlist")
      .insert([
        {
          full_name: formData.name,
          email: formData.email,
          phone_number: formData.phone,
          state: formData.state,
          expected_delivery_date:
            formData.expectedDeliveryDate || null,
        },
      ])

    if (error) {
      console.error("Waitlist registration failed:", error)
      alert(`Something went wrong: ${error.message || 'Unknown database error'}`)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleSocialClick = (platform: 'instagram' | 'facebook' | 'twitter', url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    setChecklist((prev) => ({ ...prev, [platform]: true }))
  }

  const isChecklistComplete = checklist.joined && checklist.instagram && checklist.facebook && checklist.twitter

  if (isSubmitted) {
    return (
      <div className="bg-card dark:bg-[#111827] border border-border dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-95">
        {/* Decorative subtle ambient glows for success state */}
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-orange/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckIcon className="w-8 h-8 text-orange" />
          </div>
          
          <h3 className="font-[var(--font-bebas)] text-3xl sm:text-4xl text-foreground tracking-wide mb-3">
            You&apos;re on the Waitlist!
          </h3>
          
          <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-md mx-auto">
            Thank you for joining us. Arieli is dedicated to reducing care delays, catching risks early, and saving lives. We will keep you updated on our launch.
          </p>

          <div className="border-t border-border dark:border-white/10 my-8 pt-8 text-left">
            <h4 className="text-foreground font-semibold text-base mb-4 flex items-center justify-between">
              <span>Complete Your Waitlist Profile</span>
              {isChecklistComplete && (
                <span className="text-xs font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-full animate-pulse">
                  Profile Complete! 🚀
                </span>
              )}
            </h4>
            
            <div className="space-y-3">
              {/* Task 1: Waitlist Joined (completed) */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange/5 border border-orange/15 transition-all">
                <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-foreground/80 text-sm line-through font-medium">
                  Joined the Arieli Waitlist
                </span>
              </div>

              {/* Task 2: Instagram */}
              <button
                onClick={() => handleSocialClick('instagram', 'https://www.instagram.com/arielifoundation')}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all text-left group hover:scale-[1.01] ${
                  checklist.instagram
                    ? 'bg-orange/5 border-orange/15'
                    : 'bg-secondary/35 dark:bg-white/[0.02] border-border dark:border-white/5 hover:border-orange/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    checklist.instagram ? 'bg-orange text-white' : 'border border-muted-foreground/40 text-transparent'
                  }`}>
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    checklist.instagram ? 'text-foreground/80 line-through' : 'text-foreground hover:text-orange'
                  }`}>
                    Follow Arieli Foundation on Instagram
                  </span>
                </div>
                {!checklist.instagram && (
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-orange transition-colors" />
                )}
              </button>

              {/* Task 3: Facebook */}
              <button
                onClick={() => handleSocialClick('facebook', 'https://www.facebook.com/profile.php?id=61555019236850')}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all text-left group hover:scale-[1.01] ${
                  checklist.facebook
                    ? 'bg-orange/5 border-orange/15'
                    : 'bg-secondary/35 dark:bg-white/[0.02] border-border dark:border-white/5 hover:border-orange/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    checklist.facebook ? 'bg-orange text-white' : 'border border-muted-foreground/40 text-transparent'
                  }`}>
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    checklist.facebook ? 'text-foreground/80 line-through' : 'text-foreground hover:text-orange'
                  }`}>
                    Follow Arieli Foundation on Facebook
                  </span>
                </div>
                {!checklist.facebook && (
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-orange transition-colors" />
                )}
              </button>

              {/* Task 4: Twitter */}
              <button
                onClick={() => handleSocialClick('twitter', 'https://x.com/arieliorg?s=21')}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all text-left group hover:scale-[1.01] ${
                  checklist.twitter
                    ? 'bg-orange/5 border-orange/15'
                    : 'bg-secondary/35 dark:bg-white/[0.02] border-border dark:border-white/5 hover:border-orange/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    checklist.twitter ? 'bg-orange text-white' : 'border border-muted-foreground/40 text-transparent'
                  }`}>
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-sm font-medium transition-colors ${
                    checklist.twitter ? 'text-foreground/80 line-through' : 'text-foreground hover:text-orange'
                  }`}>
                    Follow Arieli Foundation on X/Twitter
                  </span>
                </div>
                {!checklist.twitter && (
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-orange transition-colors" />
                )}
              </button>
            </div>
          </div>
          
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({ name: '', email: '', phone: '', state: '', expectedDeliveryDate: '' })
              setChecklist({ joined: true, instagram: false, facebook: false, twitter: false })
            }}
            className="text-xs text-muted-foreground hover:text-orange transition-colors font-medium underline underline-offset-4"
          >
            Register another profile
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card dark:bg-[#111827] border border-border dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden transition-all duration-300">
      {/* Decorative background glow */}
      <div className="absolute -right-24 -top-24 w-48 h-48 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <h3 className="font-[var(--font-bebas)] text-2xl sm:text-3xl text-foreground tracking-wide mb-6">
        Sign Up for Arieli
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-foreground/80 text-sm font-semibold mb-2">
            Full Name <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
              <UserIcon className="w-4 h-4" />
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary/30 dark:bg-white/[0.02] border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all ${
                errors.name ? 'border-destructive' : 'border-border dark:border-white/10'
              }`}
              placeholder="First and Last name"
            />
          </div>
          {errors.name && <p className="text-destructive text-xs mt-1.5 font-medium">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-foreground/80 text-sm font-semibold mb-2">
            Email Address <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
              <MailIcon className="w-4 h-4" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary/30 dark:bg-white/[0.02] border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all ${
                errors.email ? 'border-destructive' : 'border-border dark:border-white/10'
              }`}
              placeholder="name@example.com"
            />
          </div>
          {errors.email && <p className="text-destructive text-xs mt-1.5 font-medium">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-foreground/80 text-sm font-semibold mb-2">
            Phone Number <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
              <PhoneIcon className="w-4 h-4" />
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary/30 dark:bg-white/[0.02] border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all ${
                errors.phone ? 'border-destructive' : 'border-border dark:border-white/10'
              }`}
              placeholder="+234 803 123 4567"
            />
          </div>
          {errors.phone && <p className="text-destructive text-xs mt-1.5 font-medium">{errors.phone}</p>}
        </div>

        {/* State Selection */}
        <div>
          <label htmlFor="state" className="block text-foreground/80 text-sm font-semibold mb-2">
            State (in Nigeria) <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
              <MapPinIcon className="w-4 h-4" />
            </span>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary/30 dark:bg-white/[0.02] border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all appearance-none cursor-pointer ${
                errors.state ? 'border-destructive' : 'border-border dark:border-white/10'
              } ${!formData.state ? 'text-muted-foreground/50' : 'text-foreground'}`}
            >
              <option value="" disabled className="text-muted-foreground/50 bg-card">Select your State</option>
              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state} className="text-foreground bg-card">
                  {state}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-muted-foreground/60">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {errors.state && <p className="text-destructive text-xs mt-1.5 font-medium">{errors.state}</p>}
        </div>

        {/* Expected Delivery Date (Optional) */}
        <div>
          <label htmlFor="expectedDeliveryDate" className="block text-foreground/80 text-sm font-semibold mb-2">
            Expected Delivery Date <span className="text-muted-foreground text-xs font-normal">(Optional for pregnant women/new mothers)</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
              <CalendarIcon className="w-4 h-4" />
            </span>
            <input
              type="date"
              id="expectedDeliveryDate"
              name="expectedDeliveryDate"
              value={formData.expectedDeliveryDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 dark:bg-white/[0.02] border border-border dark:border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange to-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer mt-2"
        >
          {isSubmitting ? (
            <>
              <LoaderIcon className="w-5 h-5 text-white" />
              <span>Registering...</span>
            </>
          ) : (
            <span>Join the Waitlist</span>
          )}
        </button>
      </form>
    </div>
  )
}
