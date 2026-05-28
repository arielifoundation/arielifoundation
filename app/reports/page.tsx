'use client'

import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

// Custom SVG icons
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const DropletsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
  </svg>
)

const BabyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
  </svg>
)

const GiftIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
)

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
)

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const outreach2024 = [
  {
    title: 'Maternal and Child Health Awareness',
    location: 'Tasha 1 Village Birthing Centre',
    date: 'April 6, 2024',
    description: 'The Arieli Foundation organized an outreach at Tasha 1 Village birthing centre to raise awareness on maternal and child health risks. Women were educated on the importance of attending antenatal care and seeking skilled services for safe pregnancies and childbirth.',
    Icon: HeartIcon,
    category: 'Health Awareness',
  },
  {
    title: "Children's Day Celebration",
    location: 'Restored Destiny Orphanage Home',
    date: 'May 27, 2024',
    description: "The Arieli Foundation marked Children's Day with an outreach at Restored Destiny Orphanage Home. The event brought joy to the children with food, gifts, and activities designed to put smiles on their faces and create lasting memories.",
    Icon: GiftIcon,
    category: 'Community Outreach',
  },
  {
    title: 'Maternal Health Outreach',
    location: 'Noble Local Clinic, Karmo',
    date: 'June 15, 2024',
    description: 'The Arieli Foundation conducted an outreach at a local clinic to raise awareness on maternal and child health risks. The event focused on water sanitation, hygiene (WASH), and maternal well-being, with maternity kits provided to pregnant women.',
    Icon: BabyIcon,
    category: 'Health Awareness',
  },
  {
    title: 'Fact-Finding and Maternal Health Awareness',
    location: "Jama'a Primary Health Care Centre, Sabon Gari, Kaduna",
    date: 'September 13, 2024',
    description: "A glimpse into the Arieli Foundation's outreach, identifying challenges faced by the PHC and raising awareness on critical maternal health issues to improve care for mothers and children.",
    Icon: HeartIcon,
    category: 'Health Awareness',
  },
  {
    title: 'Water Sanitation and Hygiene Education',
    location: 'Zango Community, Zaria',
    date: 'September 17, 2024',
    description: "A snapshot of the Arieli Foundation's outreach program in Zango, Zaria, teaching families and children the vital role of clean water, sanitation, and hygiene in promoting health and preventing disease.",
    Icon: DropletsIcon,
    category: 'WASH Initiative',
  },
  {
    title: 'Before and After Birth Follow-Up Program',
    location: 'Various Communities',
    date: '2024',
    description: "The Arieli Foundation's before and after birth follow-up program ensures that women receive vital support throughout pregnancy and postpartum, reinforcing the Foundation's commitment to sustainable maternal health and strong community engagement.",
    Icon: BabyIcon,
    category: 'Maternal Care',
  },
  {
    title: 'Weekly Community Engagements',
    location: 'Abuja, Nasarawa and Keffi',
    date: 'Ongoing 2024',
    description: 'The Arieli Foundation carries out weekly community engagements in several communities, focusing on maternal and child health awareness. These sessions, held three times a week, aim to educate women on critical health topics.',
    Icon: UsersIcon,
    category: 'Community Outreach',
  },
]

const outreach2025 = [
  {
    title: 'Door-to-Door Maternal Health Sensitization',
    location: 'Polosa Community, Niger State',
    date: 'February 19, 2025',
    description: 'The outreach aimed to engage women directly in their homes, providing vital information on antenatal care, danger signs during pregnancy, and the importance of skilled birth attendance.',
    Icon: HeartIcon,
    category: 'Health Awareness',
  },
  {
    title: 'Maternal and Child Health Risks Awareness',
    location: 'Angwan Egbor Community, Suleja, Niger State',
    date: 'March 27, 2025',
    description: 'The initiative focused on educating women and caregivers about common health risks during pregnancy, childbirth, and early childhood through interactive sessions and community engagement.',
    Icon: HeartIcon,
    category: 'Health Awareness',
  },
  {
    title: 'Safe Water, Sanitation, and Hygiene Promotion',
    location: 'Giwa Community, FCT',
    date: 'April 24, 2025',
    description: 'The program featured community sensitization on the importance of clean water, proper handwashing techniques, and safe sanitation practices with practical demonstrations.',
    Icon: DropletsIcon,
    category: 'WASH Initiative',
  },
  {
    title: "Children's Day Celebration",
    location: 'One Man Village, Nasarawa State',
    date: 'May 27, 2025',
    description: "Arieli Foundation marked the children's day with an outreach to the children within the community. The event brought joy to the children with food, gifts and activities designed to inspire hope.",
    Icon: GiftIcon,
    category: 'Community Outreach',
  },
  {
    title: 'Period Poverty Initiative - 500+ Pads Donated',
    location: 'GSS Jabi/Life Camp (with Neem Foundation)',
    date: 'June 26, 2025',
    description: 'Arieli Foundation in collaboration with Neem Foundation provided over 500 pads to girls. This initiative is part of the ongoing effort to combat period poverty and support young girls in managing menstrual health with dignity.',
    Icon: HeartIcon,
    category: 'Period Poverty',
  },
  {
    title: 'Period Poverty Initiative - 200+ Pads Donated',
    location: 'Police Secondary School, Minna, Niger State',
    date: 'July 24, 2025',
    description: 'Arieli Foundation provided over 200 pads to girls at Police Secondary School. This initiative is part of the ongoing effort to combat period poverty and support young girls in managing menstrual health with dignity.',
    Icon: HeartIcon,
    category: 'Period Poverty',
  },
  {
    title: 'WASH Education and Care Outreach',
    location: 'Christ Foundation Orphanage Home and Widows Outreach, Kuje',
    date: 'August 30, 2025',
    description: "The session focused on teaching the children the importance of safe handwashing practices and healthy hygiene habits, reflecting the Foundation's commitment to improving health and well-being through education.",
    Icon: DropletsIcon,
    category: 'WASH Initiative',
  },
  {
    title: 'Maternal Health Needs Assessment & Pad Donation',
    location: 'Kuchingoro IDP Camp (with Neem Foundation)',
    date: 'September 4, 2025',
    description: 'The initiative aimed at understanding the pressing maternal health challenges within the camp while supporting women and girls with access to essential menstrual hygiene products.',
    Icon: HeartIcon,
    category: 'IDP Support',
  },
  {
    title: 'Community Health Clinic Outreach',
    location: 'Kaura Community Health Clinic, Dafara Ltd.',
    date: 'September 11, 2025',
    description: "During the visit, the Foundation paid patients' medical bills, donated essential medical kits, and conducted a sensitisation session on maternal health risks.",
    Icon: BabyIcon,
    category: 'Health Awareness',
  },
]

const testimonials = [
  {
    name: 'Mrs Ameenah',
    type: 'Maternity Kit Recipient',
    quote: "I didn't have much for my baby before, but Arieli Foundation gave me the things I need. The kit and the advice they shared made me feel ready for the birth. I am so grateful for their help.",
  },
  {
    name: 'Mrs Khadijah',
    type: 'WASH Initiative Participant',
    quote: "Arieli Foundation showed us how to keep our water clean and wash our hands the right way. It's simple things, but it keeps us healthy. We are grateful for what they taught us.",
  },
  {
    name: 'Mummy Amina',
    type: 'Health Education Participant',
    quote: "Before, I didn't know it was important to go to the clinic when I'm pregnant. The doctors from Arieli Foundation explained it to us, and now I understand why I need to see a doctor and take care of myself.",
  },
  {
    name: 'Ms Jemima',
    type: 'Pad Recipient',
    quote: "I used to struggle when my period came, but Arieli Foundation gave us pads and taught us how to use them. Now, I don't have to worry anymore. I feel better knowing they care about girls like us.",
  },
]

const pdfReports = [
  {
    title: '2024 Outreach Highlights',
    description: 'Complete overview of all 2024 outreach activities, impact metrics, and community engagement.',
    year: '2024',
    url: 'https://blobs.vusercontent.net/blob/Arieli%20Outreach%20highlight-UPDATED%282%29-rQrzQVwModtIX2Q6RBfNwXaYeT2UgW.pdf',
  },
  {
    title: '2025 Outreach Summary',
    description: 'Detailed summary of 2025 outreach campaigns, partnerships, and outcomes.',
    year: '2025',
    url: 'https://blobs.vusercontent.net/blob/2025%20OUTREACH%281%29-qeDF9zpE2E8iRJvlyhR5zufouYqzLs.pdf',
  },
]

function OutreachCard({ item, index, isVisible }: { item: typeof outreach2024[0], index: number, isVisible: boolean }) {
  const Icon = item.Icon
  return (
    <div
      className={`glass-card card-hover-glow group relative p-4 lg:p-6 rounded-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="flex items-start gap-3 lg:gap-4">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center shrink-0 group-hover:from-orange/30 group-hover:to-orange/15 transition-all">
          <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-orange" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 lg:gap-3 mb-2">
            <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-1 rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors mb-2 text-sm lg:text-base">
            {item.title}
          </h3>
          <div className="flex flex-wrap gap-2 lg:gap-3 text-xs text-muted-foreground mb-2 lg:mb-3">
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-3 h-3" />
              {item.location}
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" />
              {item.date}
            </span>
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ReportsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: pdfRef, isVisible: pdfVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: outreach2025Ref, isVisible: outreach2025Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const { ref: outreach2024Ref, isVisible: outreach2024Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#111827]/95 to-[#111827]/90 dark:from-[#0B0F14] dark:via-[#0B0F14]/95 dark:to-[#0B0F14]/90">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(245,158,11,0.18),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.1),transparent_50%)]" />
          </div>
        </div>

        <div 
          ref={heroRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl">
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Transparency & Accountability
            </span>
            <h1 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wide mb-4 lg:mb-6 leading-[1.1]">
              Reports & <span className="text-orange">Impact</span>
            </h1>
            <p className="text-white/70 text-base lg:text-lg xl:text-xl leading-relaxed">
              We believe in complete transparency. Explore our outreach reports and see the real impact we are making in maternal and child health across communities in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <section className="py-12 lg:py-16 bg-surface-soft dark:bg-[#111827]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={pdfRef}
            className={`text-center mb-8 lg:mb-12 transition-all duration-700 ${
              pdfVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
              Download Reports
            </span>
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide">
              Official PDF Reports
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {pdfReports.map((report, index) => (
              <a
                key={report.title}
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card card-hover-glow group relative p-4 lg:p-6 rounded-xl transition-all duration-500 ${
                  pdfVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="w-12 h-14 lg:w-14 lg:h-16 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center shrink-0 group-hover:from-orange/30 group-hover:to-orange/15 transition-all">
                    <FileTextIcon className="w-5 h-5 lg:w-6 lg:h-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 lg:gap-3 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors text-sm lg:text-base">
                        {report.title}
                      </h3>
                      <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-1 rounded-full shrink-0">
                        {report.year}
                      </span>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">
                      {report.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs lg:text-sm text-orange font-medium">
                      <DownloadIcon className="w-3 h-3 lg:w-4 lg:h-4" />
                      Download PDF
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Outreach Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={outreach2025Ref}
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              outreach2025Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
              Current Year
            </span>
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground tracking-wide mb-3 lg:mb-4">
              2025 Outreach Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              An insight into our ongoing outreach activities this year, reaching communities across Nigeria with maternal health education, WASH initiatives, and period poverty support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {outreach2025.map((item, index) => (
              <OutreachCard key={index} item={item} index={index} isVisible={outreach2025Visible} />
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Outreach Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-surface-soft dark:bg-[#111827]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={outreach2024Ref}
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              outreach2024Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
              Previous Year
            </span>
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground tracking-wide mb-3 lg:mb-4">
              2024 Outreach Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              A look back at our impactful outreach activities in 2024, empowering mothers and nurturing children across various communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {outreach2024.map((item, index) => (
              <OutreachCard key={index} item={item} index={index} isVisible={outreach2024Visible} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialRef}
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-3">
              Voices of Impact
            </span>
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground tracking-wide mb-3 lg:mb-4">
              Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              Hear from the women and girls who have benefited from our community outreach programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass-card card-hover-glow relative p-6 lg:p-8 rounded-xl transition-all duration-500 ${
                  testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 text-5xl lg:text-6xl text-orange/20 font-serif leading-none">
                  &ldquo;
                </div>
                <div className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6 italic text-sm lg:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm lg:text-base">{testimonial.name}</p>
                    <p className="text-xs lg:text-sm text-orange">{testimonial.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-16 lg:py-20 bg-gradient-to-br from-orange to-gold"
      >
        <div 
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white tracking-wide mb-4 lg:mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/90 text-sm lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto">
            Your support enables us to reach more communities, empower more mothers, and nurture more children. Together, we can create lasting change.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            <Link
              href="/#partner"
              className="inline-flex items-center gap-2 bg-white text-orange font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-white/90 transition-colors text-sm lg:text-base"
            >
              Partner With Us
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-white/10 transition-colors text-sm lg:text-base"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
