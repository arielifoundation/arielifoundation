import Link from 'next/link'

// Custom SVG icons
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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

const reports = [
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

export function ReportsSection() {
  return (
    <section id="reports" className="py-24 lg:py-32 bg-background dark:bg-[#0B0F14] relative overflow-hidden">
      {/* Dark mode ambient glow */}
      <div className="absolute inset-0 ambient-glow-orange pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-orange text-sm font-semibold tracking-wider uppercase mb-4">
              Transparency
            </span>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6 leading-[1.1]">
              Reports & <span className="text-orange">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe in complete transparency. Access our annual reports and outreach summaries to see how we&apos;re making a difference.
            </p>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 text-orange font-semibold group hover:text-gold transition-colors"
            >
              View All Reports
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Reports cards */}
          <div className="space-y-4">
            {reports.map((report) => (
              <a
                key={report.title}
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover-glow group relative p-6 rounded-xl bg-card dark:bg-[#111827] border border-border dark:border-white/5 cursor-pointer overflow-hidden block"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-16 rounded-lg bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center shrink-0 group-hover:from-orange/30 group-hover:to-orange/15 transition-all">
                    <FileTextIcon className="w-6 h-6 text-orange" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                          {report.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {report.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-orange font-medium mt-2">
                          <DownloadIcon className="w-3 h-3" />
                          Download PDF
                        </span>
                      </div>
                      <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-1 rounded-full shrink-0">
                        {report.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRightIcon className="w-5 h-5 text-orange" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
